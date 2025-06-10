@extends('layout')

@section('content')
<link rel="stylesheet" href="{{ asset('css/custom-todolist.css') }}">

<div class="fullpage-container">
    <div class="card">
        <div class="card-header">
            <h2>Add To Do List
                <a href="/todolist" class="btn btn-sm btn-danger float-end">Cancel</a> 
            </h2> 
        </div>
        <div class="card-body">
             <form action='add-todolist' method="POST">
                @csrf
                <div class="form-group mb-3">
                    <label>Task</label>
                    <input type="text" name="task" class="form-control" required>
                </div>
                <div class="form-group mb-3">
                    <label>Category</label>
                    <select name="category_id" class="form-control" required>
                        <option value="" disabled selected hidden>-- Select Category --</option>
                        @if(isset($category) && count($category) > 0)
                            @foreach($category as $key => $cat)
                                <option value="{{ $key }}">{{ $cat['title'] }}</option>
                            @endforeach
                        @else
                            <option value="" disabled>No active category available</option>
                        @endif
                    </select>
                </div>
                <div class="form-group mb-3">
                    <label>Urgency</label>
                    <select name="urgency" class="form-control" required>
                        <option value="" disabled selected hidden>-- Select Urgency --</option>
                        <option value="Very Low">Very Low</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Very High">Very High</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <label>Deadline</label>
                    <input type="datetime-local" name="deadline" class="form-control" required>
                </div>
                <div class="form-group mb-3">
                    <label>Status</label>
                    <select name="status" class="form-control" required>
                        <option value="" disabled selected hidden>-- Select Status --</option>
                        <option value="Not Started">Not Started</option>
                        <option value="On Progress">On Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <button type="submit" class="btn btn-primary">Save To Do List</button>
                </div>
             </form>
        </div>
    </div>
</div>
@endsection
