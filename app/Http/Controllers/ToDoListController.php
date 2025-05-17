<?php

namespace App\Http\Controllers;

use Illuminate\Support\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

use Kreait\Firebase\Contract\Database;

class ToDoListController extends Controller
{
    protected $database;
    protected $tablename;
    public function __construct(Database $database)
    {
        $this->database = $database;
        $this->tablename = 'todolist';
    }
    
    public function index(){
        if (Session::get('firebase_user_role') !== 'user') {
            return redirect()->back()->with('status', 'Akses ditolak. Halaman ini hanya untuk pengguna.');
        }

        $user_id = session('firebase_user_id');
        if (!$user_id) {
            return redirect()->route('login')->with('status', 'Sesi pengguna tidak ditemukan.');
        }

        $allData = $this->database->getReference($this->tablename)->getValue();
        
        $todolist = collect($allData)->filter(function ($item) use ($user_id) {
            return isset($item['user_id']) && $item['user_id'] === $user_id;
        });

        $total_todolist = $todolist->count();
        $category = $this->database->getReference('category')->getValue();

        return view('todolist.index', compact('todolist', 'total_todolist', 'category'));
    }


    public function create(){
        if (Session::get('firebase_user_role') !== 'user') {
            return redirect()->back()->with('status', 'Akses ditolak. Halaman ini hanya untuk pengguna.');
        }
        $allCategory = $this->database->getReference('category')->getValue();
        $activeCategory = [];

        if ($allCategory) {
            foreach ($allCategory as $key => $cat) {
                if (isset($cat['status']) && $cat['status'] === 'Active') {
                    $activeCategory[$key] = $cat;
                }
            }
        }
        return view('todolist.create', ['category' => $activeCategory]);
    }

    public function store(Request $request){
        if (Session::get('firebase_user_role') !== 'user') {
            return redirect()->back()->with('status', 'Akses ditolak. Halaman ini hanya untuk pengguna.');
        }
        $user_id = session('firebase_user_id');
        $this->database->getReference('user/' . $user_id)->update([
            'last_activity' => now()->toDateTimeString(),
            'status' => 'Active',
        ]);
        if (!$user_id) {
            return redirect()->route('login')->with('status', 'Sesi pengguna tidak ditemukan. Silakan login kembali.');
        }

        $ref = $this->database->getReference($this->tablename)->push(); 
        $key = $ref->getKey(); 
        $postData = [
            'id' => $key,
            'user_id' => $user_id,
            'task' => $request->task,
            'category_id' => $request->category_id,
            'urgency' => $request->urgency,
            'deadline' => $request->deadline,
            'status' => $request->status,
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => null
        ];
        $postRef = $this->database->getReference($this->tablename . '/' . $key)->set($postData);;
        if ($postRef) {
            return redirect()->route('todolist.index')->with('status', 'To Do List Added Successfully');
        }
        else {
            return redirect()->back()->with('status', 'Failed to add To Do List');
        }
    }

    public function edit($id){
        if (Session::get('firebase_user_role') !== 'user') {
            return redirect()->back()->with('status', 'Akses ditolak. Halaman ini hanya untuk pengguna.');
        }
        $user_id = session('firebase_user_id');
        $editData = $this->database->getReference($this->tablename . '/' . $id)->getValue();
        if (!$editData) {
            return redirect()->back()->with('status', 'To Do List ID Not Found');
        }
    
        if (!isset($editData['user_id']) || $editData['user_id'] !== $user_id) {
            return redirect()->route('todolist.index')->with('status', 'Akses tidak diizinkan');
        }

        $allCategory = $this->database->getReference('category')->getValue();
        $category = [];
        if ($allCategory) {
            foreach ($allCategory as $key => $cat) {
                if (isset($cat['status']) && $cat['status'] === 'Active') {
                    $category[$key] = $cat;
                }
            }
        }
        return view('todolist.edit', compact('editData', 'id', 'category'));
    }  
    
    public function update(Request $request, $id){
        if (Session::get('firebase_user_role') !== 'user') {
            return redirect()->back()->with('status', 'Akses ditolak. Halaman ini hanya untuk pengguna.');
        }
        $user_id = session('firebase_user_id');
        $this->database->getReference('user/' . $user_id)->update([
            'last_activity' => now()->toDateTimeString(),
            'status' => 'Active',
        ]);
        $existingData = $this->database->getReference($this->tablename . '/' . $id)->getValue();
        if (!$existingData) {
            return redirect()->route('todolist.index')->with('status', 'To Do List ID Not Found');
        }
        if (!isset($existingData['user_id']) || $existingData['user_id'] !== $user_id) {
            return redirect()->route('todolist.index')->with('status', 'Akses tidak diizinkan');
        }
        $updateData = [
            'id' => $id,
            'user_id' => $user_id,
            'task' => $request->task,
            'category_id' => $request->category_id,
            'urgency' => $request->urgency,
            'deadline' => $request->deadline,
            'status' => $request->status,
            'created_at' => $existingData['created_at'],
            'updated_at' => Carbon::now()->toDateTimeString(),
        ];
        $res_updated = $this->database->getReference($this->tablename . '/' . $id)->update($updateData);
        if($res_updated){
            return redirect()->route('todolist.index')->with('status', 'To Do List Updated Successfully'); 
        }
        else{
            return redirect()->route('todolist.index')->with('status', 'Failed to update To Do List');
        }
    }

    public function destroy($id){
        if (Session::get('firebase_user_role') !== 'user') {
            return redirect()->back()->with('status', 'Akses ditolak. Halaman ini hanya untuk pengguna.');
        }
        $user_id = session('firebase_user_id');
        $this->database->getReference('user/' . $user_id)->update([
            'last_activity' => now()->toDateTimeString(),
            'status' => 'Active',
        ]);
        $todolist = $this->database->getReference($this->tablename . '/' . $id)->getValue();
        if (!$todolist || !isset($todolist['user_id']) || $todolist['user_id'] !== $user_id) {
            return redirect()->route('todolist.index')->with('status', 'Akses tidak diizinkan');
        }
        $del_data = $this->database->getReference($this->tablename . '/' . $id)->remove();
        if($del_data){
            return redirect()->route('todolist.index')->with('status', 'To Do List Deleted Successfully');
        }
        else{
            return redirect()->route('todolist.index')->with('status', 'Failed to delete To Do List');
        }
    }
}