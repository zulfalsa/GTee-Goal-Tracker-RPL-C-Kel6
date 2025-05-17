<?php

namespace App\Http\Controllers;

use Illuminate\Support\Carbon;
use Illuminate\Http\Request;
use Kreait\Firebase\Contract\Database;

class DashboardController extends Controller
{
    public function index()
    {
        $role = session('firebase_user_role');

        if ($role === 'admin') {
            return view('dashboard.admin');
        } else {
            return view('dashboard.user');
        }
    }

}