@extends('layout')

@section('content')
<link rel="stylesheet" href="{{ asset('css/dasboard.css') }}">

<div class="welcome-section container rounded-4 shadow-sm d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 p-4 my-4 text-center text-md-start">
  
  {{-- Tulisan Welcome --}}
  <div>
    <h1 class="welcome-title">Welcome to <span class="brand text-purple">G-Tee</span></h1>
    <p class="welcome-subtitle">We’re here to help you bloom to your max level 🌱</p>
    <h2 class="section-heading">Section and Tools</h2>
  </div>

  {{-- Maskot --}}
  <div>
    <img src="{{ asset('images/maskot.png') }}" alt="Maskot G-Tee" class="maskot-img">
  </div>
</div>

<div class="tools-section container text-center">
  <div class="d-flex flex-wrap gap-4 justify-content-center">
    {{-- Goal Tracker --}}
    <a href="{{ url('/goaltracker') }}" class="card-tool text-decoration-none text-dark shadow-sm">
      <img src="{{ asset('images/goal.png') }}" alt="Goal Tracker" class="img-fluid mb-2" style="max-height: 200px;">
      <div class="card-tool-title fw-semibold">GOAL TRACKER</div>
    </a>

    {{-- To Do List --}}
    <a href="{{ route('todolist.index') }}" class="card-tool text-decoration-none text-dark shadow-sm">
      <img src="{{ asset('images/todo.png') }}" alt="To Do List" class="img-fluid mb-2" style="max-height: 200px;">
      <div class="card-tool-title fw-semibold">TO DO LIST</div>
    </a>
  </div>
</div>
@endsection
