<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Kreait\Firebase\Factory;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class UpdateUserStatus extends Command
{
    protected $signature = 'user:update-status';
    protected $description = 'Update user status based on last login and activity';

    protected $database;

    public function __construct()
    {
        parent::__construct();

        $factory = (new Factory)->withServiceAccount(base_path('gtee-goal-tracker-rpl-kel6-firebase-adminsdk-fbsvc-fd573c20ea.json'));
        $this->database = $factory
            ->withDatabaseUri('https://gtee-goal-tracker-rpl-kel6-default-rtdb.firebaseio.com')
            ->createDatabase();
    }

    public function handle()
    {
        Log::info('Schedule berjalan otomatis: ' . now());
        $users = $this->database->getReference('user')->getValue();
        $now = Carbon::now();

        foreach ($users as $id => $user) {
            $lastLogin = isset($user['last_signed_in']) ? Carbon::parse($user['last_signed_in']) : null;
            $lastActivity = isset($user['last_activity']) ? Carbon::parse($user['last_activity']) : null;

            $status = 'Inactive'; // default

            if ($lastLogin && $now->diffInDays($lastLogin) <= 7) {
                // login dalam 7 hari terakhir
                if ($lastActivity && $now->diffInDays($lastActivity) <= 3) {
                    $status = 'Active';
                } else {
                    $status = 'No Activity';
                }
            }

            // simpan status ke Firebase
            $this->database->getReference('user/' . $id)->update([
                'status' => $status,
            ]);
        }

        $this->info('User statuses updated successfully.');
    }
}