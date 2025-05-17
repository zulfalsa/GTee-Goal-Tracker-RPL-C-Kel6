<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class FirebaseAuth
{
    public function handle(Request $request, Closure $next)
    {
        if (!Session::has('firebase_user_id')) {
            return redirect()->route('login')->with('status', 'Silakan login terlebih dahulu');
        }   

        return $next($request);
    }
}
