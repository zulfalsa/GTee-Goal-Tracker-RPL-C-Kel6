<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\FirebaseService;
use Kreait\Firebase\Factory;
use Kreait\Firebase\Messaging\CloudMessage;
use Kreait\Firebase\Messaging\Notification;

class NotificationController extends Controller
{
    protected $firebaseService;

    public function __construct(FirebaseService $firebaseService)
    {
        $this->firebaseService = $firebaseService;
    }

    public function sendNotification(Request $request)
    {
        $userId = $request->input('user_id'); // atau ambil dari auth()->id()

        $fcmToken = $this->firebaseService->getFcmTokenByUserId($userId);

        if (!$fcmToken) {
            return response()->json(['error' => 'Token tidak ditemukan'], 404);
        }

        // Kirim notifikasi
        $factory = (new Factory)->withServiceAccount(config('firebase.credentials.file'));
        $messaging = $factory->createMessaging();

        $message = CloudMessage::fromArray([
            'token' => $fcmToken,
            'notification' => [
                'title' => 'Halo dari Laravel!',
                'body' => 'Notifikasi dikirim ke pengguna ' . $userId,
            ],
        ]);

        $messaging->send($message);

        return response()->json(['message' => 'Notifikasi terkirim']);
    }
}
