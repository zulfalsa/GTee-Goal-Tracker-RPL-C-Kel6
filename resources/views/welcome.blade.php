<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>G-Tee</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
<style>
    body {
        font-family: 'Poppins', sans-serif;
    }
    .logo-font {
        font-family: 'Fredoka', cursive;
    }
</style>

</head>
<body class="bg-gradient-to-tr from-purple-200 to-pink-300 min-h-screen flex items-center justify-center">
    <div class="bg-white rounded-3xl shadow-2xl p-10 max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
        {{-- Left Section --}}
        <div class="w-full md:w-1/2 text-center md:text-left">
            <h1 class="text-3xl font-semibold">Welcome to</h1>
            <h2 class="text-6xl logo-font text-purple-700 font-extrabold mt-2">G-Tee</h2>
            <p class="mt-3 text-gray-600 text-md md:text-lg font-medium">
                We here to help you blooms to your max level
            </p>

            <div class="mt-10 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div class="text-center sm:text-left">
                    <p class="font-semibold mb-2 text-sm text-gray-800">Already have an account?</p>
                    <a href="{{ route('login') }}"
                       class="bg-pink-400 text-white px-6 py-2 rounded-full shadow hover:bg-pink-500 transition font-semibold">
                       Login
                    </a>
                </div>

                <div class="text-center sm:text-left">
                    <p class="font-semibold mb-2 text-sm text-gray-800">New to this web?</p>
                    <a href="{{ route('register') }}"
                       class="bg-pink-400 text-white px-6 py-2 rounded-full shadow hover:bg-pink-500 transition font-semibold">
                       Register
                    </a>
                </div>
            </div>
        </div>

        {{-- Mascot Image --}}
        <div class="w-full md:w-1/2 flex justify-center">
            <img src="{{ asset('images/mascot.png') }}" alt="Mascot" class="w-64 drop-shadow-lg">
        </div>
    </div>
</body>
</html>
