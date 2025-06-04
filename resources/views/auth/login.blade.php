@extends('app')

@section('content')
<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
    <div class="bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row w-full max-w-4xl space-x-0 md:space-x-10">

        {{-- Left Side: Mascot --}}
        <div class="hidden md:flex items-center justify-center">
            <img src="{{ asset('images/mascot.png') }}" alt="Mascot" class="w-64 h-auto">
        </div>

        {{-- Right Side: Login Form --}}
        <div class="w-full">
            <h2 class="text-3xl font-bold text-purple-700 mb-4">Welcome back to <span class="text-pink-500">G-Tee</span></h2>

            {{-- Status Message --}}
            @if (session('status'))
                <div class="bg-blue-100 text-blue-800 px-4 py-2 rounded mb-3">
                    {{ session('status') }}
                </div>
            @endif

            {{-- Validation Errors --}}
            @if ($errors->any())
                <div class="bg-red-100 text-red-700 px-4 py-2 rounded mb-3">
                    <ul class="list-disc ml-4 space-y-1">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form action="{{ route('login') }}" method="POST" class="space-y-4">
                @csrf

                <input type="email" name="email" placeholder="Email" required
                    class="w-full px-4 py-2 border border-purple-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400">

                <input type="password" name="password" placeholder="Password" required
                    class="w-full px-4 py-2 border border-purple-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400">

                <button type="submit"
                    class="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-full shadow-md">
                    Login
                </button>

                <p class="text-center text-sm mt-2 text-gray-500">
                    Don't have an account? 
                    <a href="{{ route('register') }}" class="text-purple-600 font-medium hover:underline">Register here</a>
                </p>
            </form>
        </div>
    </div>
</div>
@endsection
