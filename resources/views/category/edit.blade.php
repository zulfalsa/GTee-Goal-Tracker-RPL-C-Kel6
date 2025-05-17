@extends('layout')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h2>Edit Category
                        <a href="/category" class="btn btn-sm btn-danger float-end">Cancel</a> 
                    </h2> 
                </div>
                <div class="card-body">
                     <form action="{{ url('edit-category/'.$id) }}" method="POST">
                        @csrf
                        @method('PUT')
                        <div class="form-group mb-3">
                            <label>Title</label>
                            <input type="text" name="title" value="{{ $editData['title'] }}" class="form-control" required>
                        </div>
                        <div class="form-group mb-3">
                            <label>Description</label>
                            <input type="text" name="description" value="{{ $editData['description'] }}" class="form-control" required>
                        </div>
                        <div class="form-group mb-3">
                            <label>Status</label>
                            <select name="status" class="form-control" required>
                                <option value="" disabled selected hidden>-- Select Status --</option>
                                <option value="Active" {{ $editData['status'] == 'Active' ? 'selected' : '' }}>Active</option>
                                <option value="Inactive" {{ $editData['status'] == 'Inactive' ? 'selected' : '' }}>Inactive</option>
                            </select>
                        </div>
                        <div class="form-group mb-3">
                            <button type="submit" class="btn btn-primary">Update Category</button>
                        </div>
                     </form>
                </div>
            </div>
        </div> 
    </div>
</div>
@endsection