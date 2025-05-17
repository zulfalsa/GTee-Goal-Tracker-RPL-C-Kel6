@extends('app')

@section('content')
<div class="card">
    <div class="card-header">
        <h2>Register</h2>

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
        <form action="{{ route('register') }}" method="POST">
            @csrf
            <div class="form-group mb-3">
                <input type="text" name="name" placeholder="Name" value="{{ old('name') }}" required>
            </div>

            <div class="form-group mb-3">
                <input type="email" name="email" placeholder="Email" value="{{ old('email') }}" required>
            </div>

            <div class="form-group mb-3">
                <input type="password" name="password" id="password" placeholder="Password" required>
            </div>

            <div class="form-group mb-3">
                <button type="submit" class="btn btn-primary">Register</button>
            </div>

            <div class="form-group">
                <p>Already have an account?</p>
                <a href="{{ route('login') }}">Login</a>
            </div>
        </form>
    </div>
</div>
</script>
@endsection
