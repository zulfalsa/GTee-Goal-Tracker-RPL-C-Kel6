@extends('app')

@section('content')
<div class="card">
    <div class="card-header">
        {{-- Logo --}}
        <img src="{{ asset('images/logo-g-tee.png') }}" alt="Logo" class="mb-3" style="max-height: 300px;">

        <h2>Welcome</h2>
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
        {{-- Navigation Buttons --}}
        <div class="form-group mb-3">
            <a href="{{ route('login') }}" class="btn btn-primary">Login</a>
        </div>
        <div class="form-group mb-3">
            <a href="{{ route('register') }}" class="btn btn-success">Register</a>
        </div>
    </div>
</div>
@endsection
