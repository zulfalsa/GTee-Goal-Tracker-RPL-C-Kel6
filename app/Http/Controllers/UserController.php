<?php

namespace App\Http\Controllers;

use Illuminate\Support\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

use Kreait\Firebase\Contract\Database;

class UserController extends Controller
{
    protected $database;
    protected $tablename;
    public function __construct(Database $database)
    {
        $this->database = $database;
        $this->tablename = 'user';
    }
    
    public function index(){
        if (Session::get('firebase_user_role') !== 'admin') {
            return redirect()->back()->with('status', 'Akses ditolak. Halaman ini hanya untuk admin.');
        }
    
        $userData = $this->database->getReference('user')->getValue();
        $user = collect($userData ?? []); 
        $total_user = $user->count();

        $categoryData = $this->database->getReference('category')->getValue() ?? [];
        $goalData = $this->database->getReference('goal')->getValue() ?? [];
        $todolistData = $this->database->getReference('todolist')->getValue() ?? [];

        $categoryUsagePerUser = [];

        foreach ($todolistData as $todo) {
            $userId = $todo['user_id'] ?? null;
            $categoryId = $todo['category_id'] ?? null;
            if ($userId && $categoryId) {
                $categoryUsagePerUser[$userId][$categoryId] = ($categoryUsagePerUser[$userId][$categoryId] ?? 0) + 1;
            }
        }

        $mostUsedCategory = [];
        foreach ($user as $userId => $userInfo) {
            if (isset($categoryUsagePerUser[$userId])) {
                $usage = $categoryUsagePerUser[$userId];
                $maxUsage = max($usage);
                $topCategories = [];

                foreach ($usage as $catId => $count) {
                    if ($count === $maxUsage) {
                        $topCategories[] = $categoryData[$catId]['title'] ?? 'Unknown';
                    }
                }

                // Gabungkan nama kategori
                $mostUsedCategory[$userId] = implode(', ', $topCategories);
            } else {
                $mostUsedCategory[$userId] = 'No Usage';
            }
        }
    
        return view('user.index', compact('user', 'total_user', 'mostUsedCategory'));
    }    
}