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
                    <h2>Category - Total : {{ $total_category }}
                        <a href="/add-category" class="btn btn-sm btn-primary float-end">Add New Categories</a> 
                    </h2> 
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Popularity</th>
                                <th>Usage Count</th>
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        @if ($category)
                            @foreach ($category as $key => $item)
                                <tr>
                                    <td>{{ $item['title'] }}</td>
                                    <td>{{ $item['description'] }}</td>
                                    <td>{{ $categoryPopularity[$key] }}</td>
                                    <td>{{ $categoryUsage[$key] }}</td>
                                    <td>{{ $item['status'] }}</td>
                                    <td><a href="{{ url('edit-category/'.$item['id']) }}" class="btn btn-sm btn-success">Edit</a></td>
                                    <td>
                                        <form action="{{ url('delete-category/'.$item['id']) }}" method="POST">
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