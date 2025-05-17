@extends('layout')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h2>Edit To Do List
                        <a href="/todolist" class="btn btn-sm btn-danger float-end">Cancel</a> 
                    </h2> 
                </div>
                <div class="card-body">
                     <form action="{{ url('edit-todolist/'.$id) }}" method="POST">
                        @csrf
                        @method('PUT')
                        <div class="form-group mb-3">
                            <label>Task</label>
                            <input type="text" name="task" value="{{$editData['task']}}" class="form-control" required>
                        </div>
                        <div class="form-group mb-3">
                            <label>Category</label>
                            <select name="category_id" class="form-control" required>
                                <option value="" disabled hidden>-- Select Category --</option>
                                @if(isset($category) && count($category) > 0)
                                    @foreach($category as $key => $cat)
                                        <option value="{{ $key }}" {{ $editData['category_id'] == $key ? 'selected' : '' }}>
                                            {{ $cat['title'] }}
                                        </option>
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
                                <option value="Very Low" {{ $editData['urgency'] == 'Very Low' ? 'selected' : '' }}>Very Low</option>
                                <option value="Low" {{ $editData['urgency'] == 'Low' ? 'selected' : '' }}>Low</option>
                                <option value="Medium" {{ $editData['urgency'] == 'Medium' ? 'selected' : '' }}>Medium</option>
                                <option value="High" {{ $editData['urgency'] == 'High' ? 'selected' : '' }}>High</option>
                                <option value="Very High" {{ $editData['urgency'] == 'Very High' ? 'selected' : '' }}>Very High</option>
                            </select>
                        </div>
                        <div class="form-group mb-3">
                            <label>Deadline</label>
                            <input type="datetime-local" name="deadline" value="{{$editData['deadline']}}" class="form-control" required>
                        </div>
                        <div class="form-group mb-3">
                            <label>Status</label>
                            <select name="status" class="form-control" required>
                                <option value="" disabled selected hidden>-- Select Status --</option>
                                <option value="Not Started" {{ $editData['status'] == 'Not Started' ? 'selected' : '' }}>Not Started</option>
                                <option value="On Progress" {{ $editData['status'] == 'On Progress' ? 'selected' : '' }}>On Progress</option>
                                <option value="Done" {{ $editData['status'] == 'Done' ? 'selected' : '' }}>Done</option>
                            </select>
                        </div>
                        <div class="form-group mb-3">
                            <button type="submit" class="btn btn-primary">Update To Do List</button>
                        </div>
                     </form>
                </div>
            </div>
        </div> 
    </div>
</div>
@endsection