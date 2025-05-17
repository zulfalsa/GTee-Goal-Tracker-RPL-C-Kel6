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
                    <h2>User - Total : {{ $total_user }}
                    </h2> 
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Most Used Category</th>
                                <th>Created At</th>
                                <th>Last Signed In</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        @if ($user)
                            @foreach ($user as $key => $item)
                                <tr>
                                    <td>{{ $item['email'] }}</td>
                                    <td>{{ $mostUsedCategory[$key] ?? 'No Usage' }}</td>
                                    <td>{{ $item['created_at'] }}</td>
                                    <td>{{ $item['last_signed_in'] ?? 'Never Signed In' }}</td>
                                    <td>{{ $item['status'] }}</td>
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