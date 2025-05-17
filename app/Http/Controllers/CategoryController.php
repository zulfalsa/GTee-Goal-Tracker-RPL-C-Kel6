<?php

namespace App\Http\Controllers;

use Illuminate\Support\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

use Kreait\Firebase\Contract\Database;

class CategoryController extends Controller
{
    protected $database;
    protected $tablename;
    public function __construct(Database $database)
    {
        $this->database = $database;
        $this->tablename = 'category';
    }
    
    public function index(){
        if (Session::get('firebase_user_role') !== 'admin') {
            return redirect()->back()->with('status', 'Akses ditolak. Halaman ini hanya untuk admin.');
        }

        $user_id = session('firebase_user_id');
        if (!$user_id) {
            return redirect()->route('login')->with('status', 'Sesi pengguna tidak ditemukan.');
        }

        $allData = $this->database->getReference($this->tablename)->getValue();
        $category = collect($allData ?? []);
        $total_category = $category->count();

        $goalData = $this->database->getReference('goal')->getValue();
        $todoData = $this->database->getReference('todolist')->getValue();
        
        $goal = collect($goalData ?? []);
        $todolist = collect($todoData ?? []);

        $categoryUsage = [];

        foreach ($category as $catId => $cat) {
            $categoryUsage[$catId] = 0;
        }

        foreach ($goal as $goalId => $goalItem) {
            if (isset($goalItem['category_id']) && isset($categoryUsage[$goalItem['category_id']])) {
                $activityCount = isset($goalItem['activity']) && is_array($goalItem['activity']) 
                                ? count($goalItem['activity']) 
                                : 0;
                $categoryUsage[$goalItem['category_id']] += $activityCount;
            }
        }

        foreach ($todolist as $todo) {
            if (isset($todo['category_id']) && isset($categoryUsage[$todo['category_id']])) {
                $categoryUsage[$todo['category_id']]++;
            }
        }

        $categoryPopularity = [];
        foreach ($categoryUsage as $id => $count) {
            if ($count >= 20) {
                $categoryPopularity[$id] = 'Very Popular';
            } elseif ($count >= 15) {
                $categoryPopularity[$id] = 'Popular';
            } elseif ($count >= 10) {
                $categoryPopularity[$id] = 'Moderately Popular';
            } elseif ($count >= 5) {
                $categoryPopularity[$id] = 'Less Popular';
            } elseif ($count >= 1) {
                $categoryPopularity[$id] = 'Unpopular';
            } else {
                $categoryPopularity[$id] = 'Not Used at All';
            }
        }

        return view('category.index', compact('category', 'total_category', 'categoryUsage', 'categoryPopularity'));
    }

    public function create(){
        if (Session::get('firebase_user_role') !== 'admin') {
            return redirect()->back()->with('status', 'Akses ditolak. Halaman ini hanya untuk admin.');
        }

        return view('category.create');
    }

    public function store(Request $request){
        if (Session::get('firebase_user_role') !== 'admin') {
            return redirect()->back()->with('status', 'Akses ditolak. Halaman ini hanya untuk admin.');
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
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status,
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => null
        ];
        $postRef = $this->database->getReference($this->tablename . '/' . $key)->set($postData);;
        if ($postRef) {
            return redirect()->route('category.index')->with('status', 'Category Added Successfully');
        }
        else {
            return redirect()->back()->with('status', 'Failed to add Category');
        }
    }

    public function edit($id){
        if (Session::get('firebase_user_role') !== 'admin') {
            return redirect()->back()->with('status', 'Akses ditolak. Halaman ini hanya untuk admin.');
        }
        $user_id = session('firebase_user_id');
        $editData = $this->database->getReference($this->tablename . '/' . $id)->getValue();
        if (!$editData) {
            return redirect()->back()->with('status', 'Category ID Not Found');
        }
    
        return view('category.edit', compact('editData', 'id'));
    }

    public function update(Request $request, $id){
        if (Session::get('firebase_user_role') !== 'admin') {
            return redirect()->back()->with('status', 'Akses ditolak. Halaman ini hanya untuk admin.');
        }
        $user_id = session('firebase_user_id');
        $this->database->getReference('user/' . $user_id)->update([
            'last_activity' => now()->toDateTimeString(),
            'status' => 'Active',
        ]);
        $existingData = $this->database->getReference($this->tablename . '/' . $id)->getValue();
        if (!$existingData) {
            return redirect()->route('category.index')->with('status', 'Category ID Not Found');
        }
        $updateData = [
            'id' => $id,
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status,
            'created_at' => $existingData['created_at'],
            'updated_at' => Carbon::now()->toDateTimeString(),
        ];
        $res_updated = $this->database->getReference($this->tablename . '/' . $id)->update($updateData);
        if($res_updated){
            return redirect()->route('category.index')->with('status', 'Category Updated Successfully'); 
        }
        else{
            return redirect()->route('category.index')->with('status', 'Failed to update Category');
        }
    }

    public function destroy($id){
        if (Session::get('firebase_user_role') !== 'admin') {
            return redirect()->back()->with('status', 'Akses ditolak. Halaman ini hanya untuk admin.');
        }
        $user_id = session('firebase_user_id');
        $this->database->getReference('user/' . $user_id)->update([
            'last_activity' => now()->toDateTimeString(),
            'status' => 'Active',
        ]);
        $category = $this->database->getReference($this->tablename . '/' . $id)->getValue();
        if (!$category) {
            return redirect()->route('category.index')->with('status', 'User tidak ditemukan.');
        }
        $del_data = $this->database->getReference($this->tablename . '/' . $id)->remove();
        if($del_data){
            return redirect()->route('category.index')->with('status', 'Category Deleted Successfully');
        }
        else{
            return redirect()->route('category.index')->with('status', 'Failed to delete Category');
        }
    }
}