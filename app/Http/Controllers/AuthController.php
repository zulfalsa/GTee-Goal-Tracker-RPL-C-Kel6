<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Kreait\Firebase\Factory;
use Kreait\Firebase\Exception\Auth\EmailExists;
use Kreait\Firebase\Exception\Auth\InvalidPassword;


class AuthController extends Controller
{
    protected $auth;
    protected $database;

    public function __construct()
    {
        // Pastikan path JSON sesuai
        $factory = (new Factory)->withServiceAccount(base_path('gtee-goal-tracker-rpl-kel6-firebase-adminsdk-fbsvc-fd573c20ea.json'));
        $this->auth = $factory->createAuth();
        $this->database = $factory
        ->withDatabaseUri('https://gtee-goal-tracker-rpl-kel6-default-rtdb.firebaseio.com')
        ->createDatabase();
    }

    public function showLoginForm()
    {
        return view('auth.login');
    }

    public function showRegisterForm()
    {
        return view('auth.register');
    }

    public function register(Request $request){
    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email:dns|max:255',
        'password' => [
            'required',
            'string',
            'min:12',
            'regex:/[a-z]/',
            'regex:/[A-Z]/',
            'regex:/[0-9]/',
            'regex:/[@$!%*?&]/'
        ],
    ], [
        'password.regex' => 'Passwords must contain uppercase, lowercase letters, numbers, and symbols.'
    ]);

    try {
        $user = $this->auth->createUserWithEmailAndPassword($request->email, $request->password);

        $this->auth->updateUser($user->uid, ['displayName' => $request->name]);

        $this->auth->sendEmailVerificationLink($request->email);

        // ✅ Simpan user ke Realtime Database
        $this->database
            ->getReference('user/' . $user->uid)
            ->set([
                'id' => $user->uid,
                'email' => $request->email,
                'name' => $request->name,
                'role' => 'user',
                'status' => 'Inactive',
                'created_at' => now()->toDateTimeString(),
            ]);

            return redirect()->route('login')->with('status', 'Registrasi berhasil. Periksa email untuk verifikasi.');
        } catch (EmailExists $e) {
            return back()->with('status', 'Email sudah terdaftar.');
        } catch (\Exception $e) {
            return back()->with('status', 'Gagal registrasi: ' . $e->getMessage());
        }
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email:dns',
            'password' => 'required',
        ]);

        try {
            $signInResult = $this->auth->signInWithEmailAndPassword($request->email, $request->password);
            $user = $this->auth->getUser($signInResult->firebaseUserId());

            if (!$user->emailVerified) {
                return back()->with('status', 'Email belum diverifikasi.');
            }

            $userId = $user->uid;
            $userData = $this->database->getReference('user/' . $userId)->getValue();

            Session::put('firebase_user_id', $userId);
            Session::put('firebase_user_email', $user->email);
            Session::put('firebase_user_role', $userData['role'] ?? 'user');

            $this->database->getReference('user/' . $userId)->update([
            'last_signed_in' => now()->toDateTimeString(),
            ]);

            return redirect()->route('dashboard')->with('status', 'Login berhasil!');

        } catch (InvalidPassword $e) {
            return back()->with('status', 'Password salah.');
        } catch (\Throwable $e) {
            return back()->with('status', 'Login gagal: ' . $e->getMessage());
        }
    }



    public function logout()
    {
        Session::flush();
        return redirect()->route('login')->with('status', 'Logout berhasil.');
    }
}
