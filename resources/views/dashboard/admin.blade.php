@extends('layout')

@section('content')
<link rel="stylesheet" href="{{ asset('css/dasboard.css') }}">

<div class="welcome-section container rounded-4 shadow-sm d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 p-4 my-4 text-center text-md-start">
  
  {{-- Tulisan Welcome --}}
  <div>
    <h1 class="welcome-title">Welcome <span class="brand text-purple">Admin!</span></h1>
  </div>

  {{-- Maskot --}}
  <div>
    <img src="{{ asset('images/maskot.png') }}" alt="Maskot G-Tee" class="maskot-img">
  </div>
</div>

<div class="tools-section container text-center">
  <div class="d-flex flex-wrap gap-4 justify-content-center">
    {{-- Manage User --}}
    <a href="{{ url('user') }}" class="card-tool text-decoration-none shadow-sm bg-gradient-to-br from-purple-400 to-pink-300 text-black rounded-xl p-4">
      <img src="{{ asset('images/goal.png') }}" alt="Manage User" class="img-fluid mb-2" style="max-height: 200px;">
      <div class="card-tool-title fw-semibold">Manage User</div>
    </a>

    {{-- Manage Categories --}}
    <a href="{{ route('category.index') }}" class="card-tool text-decoration-none shadow-sm bg-gradient-to-br from-purple-400 to-pink-300 text-black rounded-xl p-4">
        <img src="{{ asset('images/todo.png') }}" alt="Categories" class="img-fluid mb-2 max-h-[200px]">
        <div class="card-tool-title font-semibold">Manage Categories</div>
    </a>
  </div>
</div>

@endsection
