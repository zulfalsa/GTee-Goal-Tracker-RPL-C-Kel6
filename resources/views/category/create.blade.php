@extends('layout')

@section('content')
<link rel="stylesheet" href="{{ asset('css/custom-goaltracker.css') }}">
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h2>Add Category
                        <a href="/category" class="btn btn-sm btn-danger float-end">Cancel</a> 
                    </h2> 
                </div>
                <div class="card-body">
                     <form action='add-category' method="POST">
                        @csrf
                        <div class="form-group mb-3">
                            <label>Title</label>
                            <input type="text" name="title" class="form-control" required>
                        </div>
                        <div class="form-group mb-3">
                            <label>Description</label>
                            <input type="text" name="description" class="form-control" required>
                        </div>
                        <div class="form-group mb-3">
                            <label>Status</label>
                            <select name="status" class="form-control" required>
                                <option value="" disabled selected hidden>-- Select Status --</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                        <div class="form-group mb-3">
                            <button type="submit" class="btn btn-primary">Save Category</button>
                        </div>
                     </form>
                </div>
            </div>
        </div> 
    </div>
</div>
@endsection
