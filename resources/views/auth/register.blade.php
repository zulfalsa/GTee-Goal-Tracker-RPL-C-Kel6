@extends('app')

@section('content')
<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100">
    <div class="bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row w-full max-w-4xl space-x-0 md:space-x-10">

        {{-- Left Side: Mascot --}}
        <div class="hidden md:flex items-center justify-center">
            <img src="{{ asset('images/mascot.png') }}" alt="Mascot" class="w-64 h-auto">
        </div>

        {{-- Right Side: Register Form --}}
        <div class="w-full">
            <h2 class="text-3xl font-bold text-pink-600 mb-4">Create your <span class="text-purple-600">G-Tee</span> account</h2>

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

            <form action="{{ route('register') }}" method="POST" class="space-y-4">
                @csrf

                <input type="text" name="name" placeholder="Full Name" required
                    class="w-full px-4 py-2 border border-pink-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400">

                <input type="email" name="email" placeholder="Email" required
                    class="w-full px-4 py-2 border border-pink-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400">

                <input type="password" name="password" placeholder="Password" required
                    class="w-full px-4 py-2 border border-pink-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400">

                <input type="password" name="password_confirmation" placeholder="Confirm Password" required
                    class="w-full px-4 py-2 border border-pink-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400">

                <button type="submit"
                    class="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-full shadow-md">
                    Register
                </button>

                <p class="text-center text-sm mt-2 text-gray-500">
                    Already have an account?
                    <a href="{{ route('login') }}" class="text-pink-600 font-medium hover:underline">Login here</a>
                </p>
            </form>
        </div>
    </div>
</div>
@endsection
