@extends('layout')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            @if(session('status'))
                <h2 class="alert alert-warning mb-2">{{session('status')}}</h2>
            @endif
            <div class="card">
                <div class="card-header">
                    <h2>To Do Lists - Total : {{ $total_todolist }}
                        <a href="/add-todolist" class="btn btn-sm btn-primary float-end">Add New To Do Lists</a> 
                    </h2> 
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Category</th>
                                <th>Urgency</th>
                                <th>Deadline</th>
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        @if ($todolist)
                            @foreach ($todolist as $key => $item)
                                <tr>
                                    <td>{{ $item['task'] }}</td>
                                    <td>{{ $category[$item['category_id']]['title'] }}</td>
                                    <td>{{ $item['urgency'] }}</td>
                                    <td>{{ $item['deadline'] }}</td>
                                    <td>{{ $item['status'] }}</td>
                                    <td><a href="{{ url('edit-todolist/'.$item['id']) }}" class="btn btn-sm btn-success">Edit</a></td>
                                    <td>
                                        <form action="{{ url('delete-todolist/'.$item['id']) }}" method="POST">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-sm btn-danger">Delete</button>
                                        </form>
                                    </td>
                                </tr>
                            @endforeach
                        @else
                            <tr>
                                <td colspan="6">No Record Found</td>
                            </tr>
                        @endif
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
    </div>
</div>
@endsection