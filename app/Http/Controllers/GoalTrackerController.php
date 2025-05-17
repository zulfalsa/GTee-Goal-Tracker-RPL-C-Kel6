<?php

namespace App\Http\Controllers;

use Illuminate\Support\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Kreait\Firebase\Contract\Database;

class GoalTrackerController extends Controller
{
    protected $database;
    protected $tablename;
    public function __construct(Database $database)
    {
        $this->database = $database;
        $this->tablename = 'goal';
    }
    
    public function index(){
        if (Session::get('firebase_user_role') !== 'user') {
            return redirect()->back()->with('status', 'Akses ditolak. Halaman ini hanya untuk pengguna.');
        }

        $user_id = session('firebase_user_id');
        if (!$user_id) {
            return redirect()->route('login')->with('status', 'Sesi pengguna tidak ditemukan.');
        }

        $allData = $this->database->getReference($this->tablename)->getValue() ?? [];
        
        $goal = collect($allData)->filter(function ($item) use ($user_id) {
            return isset($item['user_id']) && $item['user_id'] === $user_id;

        })->map(function ($item) {
            $activity = $item['activity'] ?? [];
            $doneCount = collect($activity)->where('status', 'Done')->count();
            $totalCount = count($activity);
            $item['progress'] = $totalCount > 0 ? round(($doneCount / $totalCount) * 100) : 0;
            return $item;
        });

        $total_goal = $goal->count();
        $category = $this->database->getReference('category')->getValue();

        return view('goaltracker.index', compact('goal', 'total_goal', 'category'));
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
        return view('goaltracker.create',['category' => $activeCategory]);
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

        if (!$request->has('activity') || !is_array($request->activity)) {
            return redirect()->back()->with('status', 'Minimal satu aktivitas harus ditambahkan.');
        }
        $activityData = [];
        $createdAt = Carbon::now()->toDateTimeString();
        foreach ($request->activity as $index => $act) {
            $activityData['activity_' . $index] = [
                'task' => $act['task'],
                'urgency' => $act['urgency'],
                'deadline' => $act['deadline'],
                'status' => $act['status'],
                'id' => $key,
                'user_id' => $user_id,
                'title' => $request->title,
                'created_at' => $createdAt,
                'updated_at' => null
            ];
        }
        $postData = [
            'id' => $key,
            'user_id' => $user_id,
            'title' => $request->title,
            'category_id' => $request->category_id,
            'activity' => $activityData,
            'created_at' => Carbon::now()->toDateTimeString(),
            'updated_at' => null
        ];
        $postRef = $this->database->getReference($this->tablename . '/' . $key)->set($postData);;
        if ($postRef) {
            return redirect()->route('goaltracker.index')->with('status', 'Goal Added Successfully');
        }
        else {
            return redirect()->back()->with('status', 'Failed to add Goal');
        }
    }

    public function edit($id){
        if (Session::get('firebase_user_role') !== 'user') {
            return redirect()->back()->with('status', 'Akses ditolak. Halaman ini hanya untuk pengguna.');
        }
        
        $user_id = session('firebase_user_id');

        $editData = $this->database->getReference($this->tablename . '/' . $id)->getValue();
        if (!$editData) {
            return redirect()->back()->with('status', 'Goal Not Found');
        }
    
        if (!isset($editData['user_id']) || $editData['user_id'] !== $user_id) {
            return redirect()->route('goaltracker.index')->with('status', 'Akses tidak diizinkan');
        }

        $activityData = isset($editData['activity']) ? $editData['activity'] : [];
        $allCategory = $this->database->getReference('category')->getValue();
        $category = [];
        if ($allCategory) {
            foreach ($allCategory as $key => $cat) {
                if (isset($cat['status']) && $cat['status'] === 'Active') {
                    $category[$key] = $cat;
                }
            }
        }
        return view('goaltracker.edit', compact('editData', 'activityData', 'id', 'category'));
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
            return redirect()->route('goaltracker.index')->with('status', 'Goal ID Not Found');
        }
        if (!isset($existingData['user_id']) || $existingData['user_id'] !== $user_id) {
            return redirect()->route('goaltracker.index')->with('status', 'Akses tidak diizinkan');
        }
        $updateData = [
            'id' => $id,
            'user_id' => $user_id,
            'title' => $request->title,
            'category_id' => $request->category_id,
            'created_at' => $existingData['created_at'],
            'updated_at' => Carbon::now()->toDateTimeString(),
        ];
        $activityInput = $request->input('activity'); 
        $activityData = [];

        if ($activityInput && is_array($activityInput)) {
            $updatedAt = Carbon::now()->toDateTimeString();
            foreach ($activityInput as $activityId => $activity) {
                $activityData[$activityId] = [
                    'task' => $activity['task'] ?? '',
                    'urgency' => $activity['urgency'] ?? '',
                    'deadline' => $activity['deadline'] ?? '',
                    'status' => $activity['status'] ?? 'pending',
                    'id' => $id,
                    'user_id' => $user_id,
                    'title' => $request->title,
                    'created_at' => $existingData['created_at'],
                    'updated_at' => $updatedAt,
                ];
            }
            $updateData['activity'] = $activityData;

        }
        $res_updated = $this->database->getReference($this->tablename . '/' . $id)->update($updateData);
        if($res_updated){
            return redirect()->route('goaltracker.index')->with('status', 'Goal Updated Successfully'); 
        }
        else{
            return redirect()->route('goaltracker.index')->with('status', 'Failed to update Goal');
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
        $goal = $this->database->getReference($this->tablename . '/' . $id)->getValue();
        if (!$goal || !isset($goal['user_id']) || $goal['user_id'] !== $user_id) {
            return redirect()->route('goaltracker.index')->with('status', 'Akses tidak diizinkan');
        }
        $del_data = $this->database->getReference($this->tablename . '/' . $id)->remove();
        if($del_data){
            return redirect()->route('goaltracker.index')->with('status', 'Goal Deleted Successfully');
        }
        else{
            return redirect()->route('goaltracker.index')->with('status', 'Failed to delete Goal');
        }
    }
}