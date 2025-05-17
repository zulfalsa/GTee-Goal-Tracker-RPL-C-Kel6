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
                    <h2>Goals - Total : {{ $total_goal }}
                        <a href="/add-goaltracker" class="btn btn-sm btn-primary float-end">Add New Goal Tracker</a> 
                    </h2> 
                </div>
                <div class="card-body">
                @if ($goal->isNotEmpty())
                        @foreach ($goal as $key => $item)
                            <div class="goal-item mb-3">
                                <h4>{{ $item['title'] }} [{{ $category[$item['category_id']]['title'] }}] (Progress: {{ $item['progress'] }}%)</h4>
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Task</th>
                                            <th>Urgency</th>
                                            <th>Deadline</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($item['activity'] as $activity)
                                            <tr>
                                                <td>{{ $activity['task'] }}</td>
                                                <td>{{ $activity['urgency'] }}</td>
                                                <td>{{ $activity['deadline'] }}</td>
                                                <td>{{ $activity['status'] }}</td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                                <a href="{{ url('edit-goaltracker/'.$item['id']) }}" class="btn btn-sm btn-success">Edit Goal</a>
                                <form action="{{ url('delete-goaltracker/'.$item['id']) }}" method="POST" style="display:inline;">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-sm btn-danger">Delete Goal</button>
                                </form>
                            </div>
                        @endforeach
                    @else
                    <tr>
                        <td colspan="6">No Record Found</td>
                    </tr>
                    @endif
                </div>
            </div>
        </div> 
    </div>
</div>
@endsection