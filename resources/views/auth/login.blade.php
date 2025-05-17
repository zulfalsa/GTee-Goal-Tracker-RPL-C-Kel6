@extends('app')

@section('content')
<div class="card">
    <div class="card-header">
        <h2>Login</h2>
        {{-- Status Message --}}
        @if (session('status'))
            <div class="alert alert-info">
                {{ session('status') }}
            </div>
        @endif

        {{-- Validation Errors --}}
        @if ($errors->any())
            <div class="alert alert-danger">
                <ul class="mb-0">
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
    </div>
    <div class="card-body">
        <form action="{{ route('login') }}" method="POST">
            @csrf
            <div class="form-group mb-3">
                <input type="email" name="email" placeholder="Email" required>
            </div>
            <div class="form-group mb-3">
                <input type="password" name="password" placeholder="Password" required><br>
            </div>
            <div class="form-group mb-3">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
            <div class="form-group">
                <p>Don't have an account?</p>
                <a href="{{ route('register') }}">Register</a>
            </div>
        </form>
    </div>
</div>
@endsection
