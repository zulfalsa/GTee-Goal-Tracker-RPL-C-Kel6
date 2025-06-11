@extends('layout')

@section('content')
<link rel="stylesheet" href="{{ asset('css/custom-goaltracker.css') }}">

<div class="container">
    <div class="row">
        <div class="col-md-12">
            @if(session('status'))
                <h2 class="alert alert-warning mb-2">{{ session('status') }}</h2>
            @endif
            
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h2 class="mb-0">Goals - Total : {{ $total_goal }}</h2>
                    <a href="/add-goaltracker" class="btn btn-primary">+ Add New Goal</a>
                </div>
                
                <div class="card-body">
                    @if ($goal->isNotEmpty())
                        <div class="accordion" id="goalAccordion">
                            @foreach ($goal as $key => $item)
                                <div class="card mb-3">
                                    <div class="card-header" id="heading{{ $key }}">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <button class="btn btn-link text-decoration-none collapsed" type="button" 
                                                    data-bs-toggle="collapse" data-bs-target="#collapse{{ $key }}" 
                                                    aria-expanded="false" aria-controls="collapse{{ $key }}">
                                                <h5 class="mb-0">
                                                    <i class="fas fa-chevron-down me-2"></i>
                                                    {{ $item['title'] }} 
                                                    <span class="badge bg-secondary">{{ $category[$item['category_id']]['title'] }}</span>
                                                </h5>
                                            </button>
                                            
                                            <div class="goal-info d-flex align-items-center">
                                                <div class="progress me-3" style="width: 120px; height: 20px;">
                                                    <div class="progress-bar" role="progressbar" 
                                                         style="width: {{ $item['progress'] }}%;" 
                                                         aria-valuenow="{{ $item['progress'] }}" 
                                                         aria-valuemin="0" aria-valuemax="100">
                                                        {{ $item['progress'] }}%
                                                    </div>
                                                </div>
                                                
                                                <div class="btn-group">
                                                    <a href="{{ url('edit-goaltracker/'.$item['id']) }}" 
                                                       class="btn btn-sm btn-edit">
                                                        <i class="fas fa-pen me-1"></i> Edit
                                                    </a>
                                                    <form action="{{ url('delete-goaltracker/'.$item['id']) }}" 
                                                          method="POST" style="display:inline;">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit" class="btn btn-sm btn-delete"
                                                                onclick="return confirm('Are you sure you want to delete this goal?')">
                                                            <i class="fas fa-trash-alt me-1"></i> Delete
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div id="collapse{{ $key }}" class="collapse" 
                                         aria-labelledby="heading{{ $key }}" data-bs-parent="#goalAccordion">
                                        <div class="card-body">
                                            @if(count($item['activity']) > 0)
                                                <div class="table-responsive">
                                                    <table class="table table-hover">
                                                        <thead class="table-light">
                                                            <tr>
                                                                <th><i class="fas fa-tasks me-1"></i>Task</th>
                                                                <th><i class="fas fa-exclamation-triangle me-1"></i>Urgency</th>
                                                                <th><i class="fas fa-calendar me-1"></i>Deadline</th>
                                                                <th><i class="fas fa-check-circle me-1"></i>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            @foreach ($item['activity'] as $activity)
                                                                <tr>
                                                                    <td>{{ $activity['task'] }}</td>
                                                                    <td>
                                                                        @if($activity['urgency'] == 'High')
                                                                            <span class="badge bg-danger">{{ $activity['urgency'] }}</span>
                                                                        @elseif($activity['urgency'] == 'Medium')
                                                                            <span class="badge bg-warning">{{ $activity['urgency'] }}</span>
                                                                        @else
                                                                            <span class="badge bg-success">{{ $activity['urgency'] }}</span>
                                                                        @endif
                                                                    </td>
                                                                    <td>{{ $activity['deadline'] }}</td>
                                                                    <td>
                                                                        @if($activity['status'] == 'Completed')
                                                                            <span class="badge bg-success">
                                                                                <i class="fas fa-check me-1"></i>{{ $activity['status'] }}
                                                                            </span>
                                                                        @elseif($activity['status'] == 'In Progress')
                                                                            <span class="badge bg-primary">
                                                                                <i class="fas fa-spinner me-1"></i>{{ $activity['status'] }}
                                                                            </span>
                                                                        @else
                                                                            <span class="badge bg-secondary">
                                                                                <i class="fas fa-clock me-1"></i>{{ $activity['status'] }}
                                                                            </span>
                                                                        @endif
                                                                    </td>
                                                                </tr>
                                                            @endforeach
                                                        </tbody>
                                                    </table>
                                                </div>
                                            @else
                                                <div class="text-center text-muted py-4">
                                                    <i class="fas fa-tasks fa-3x mb-3"></i>
                                                    <p>No tasks found for this goal.</p>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    @else
                        <div class="text-center text-muted py-5">
                            <i class="fas fa-bullseye fa-3x mb-3"></i>
                            <h4>No Goals Found</h4>
                            <p>Start by creating your first goal tracker!</p>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const collapseElements = document.querySelectorAll('.collapse');
    
    collapseElements.forEach(function(element) {
        element.addEventListener('show.bs.collapse', function() {
            const button = document.querySelector(`[data-bs-target="#${element.id}"]`);
            const icon = button.querySelector('.fas.fa-chevron-down');
            icon.style.transform = 'rotate(0deg)';
        });
        
        element.addEventListener('hide.bs.collapse', function() {
            const button = document.querySelector(`[data-bs-target="#${element.id}"]`);
            const icon = button.querySelector('.fas.fa-chevron-down');
            icon.style.transform = 'rotate(-90deg)';
        });
    });
});
</script>
@endsection
