@extends('layout')

@section('content')
<link rel="stylesheet" href="{{ asset('css/custom-todolist.css') }}">

<div class="dashboard-container p-4">

    <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="fw-bold mb-0">Work Hard, Play Hard!</h2>
        <a href="/add-todolist" class="btn btn-purple shadow-sm">Add New To Do List</a>
    </div>

    <div class="d-flex flex-wrap gap-3 mb-4">
        <div class="donut">
            <canvas id="completedChart"></canvas>
            <p>Completed</p>
        </div>
        <div class="donut">
            <canvas id="progressChart"></canvas>
            <p>In Progress</p>
        </div>
        <div class="donut">
            <canvas id="notstartedChart"></canvas>
            <p>Not Started</p>
        </div>
    </div>

    <div class="d-flex flex-wrap gap-4">
        <div class="flex-grow-1" style="min-width: 60%;">
            <div class="table-responsive shadow-sm rounded-3 bg-white p-3">
                <table class="table table-borderless align-middle">
                    <thead class="table-light">
                        <tr>
                            <th>Tasks</th>
                            <th>Urgency</th>
                            <th>Category</th> 
                            <th>Deadlines</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($todolist as $item)
                            <tr>
                                <td>{{ $item['task'] }}</td>
                                <td>{{ $item['urgency'] }}</td>
                                <td>{{ $category[$item['category_id']]['title'] }}</td>
                                <td>{{ $item['deadline'] }}</td>
                                <td>
                                    @php
                                        $statusClass = match($item['status']) {
                                            'Done' => 'badge bg-success',
                                            'On Progress' => 'badge bg-warning text-dark',
                                            'Not Started' => 'badge bg-danger',
                                            default => 'badge bg-secondary'
                                        };
                                    @endphp
                                    <span class="{{ $statusClass }}">{{ $item['status'] }}</span>
                                </td>
                                <td>
                                    <a href="{{ url('edit-todolist/'.$item['id']) }}" class="btn btn-sm btn-outline-success">✏️</a>
                                </td>
                                <td>
                                    <form action="{{ url('delete-todolist/'.$item['id']) }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-sm btn-outline-danger">🗑️</button>
                                    </form>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="7" class="text-center text-muted py-4">No tasks available 💤</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    const completed = {{ $todolist->where('status', 'Done')->count() }};
    const inProgress = {{ $todolist->where('status', 'On Progress')->count() }};
    const notstarted = {{ $todolist->where('status', 'Not Started')->count() }};
    const total = completed + inProgress + notstarted;

    function renderDonut(id, value, total, label, color) {
        const ctx = document.getElementById(id).getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [label, 'Others'],
                datasets: [{
                    data: [value, total - value],
                    backgroundColor: [color, '#e9ecef'],
                    borderWidth: 1
                }]
            },
            options: {
                cutout: '70%',
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    renderDonut('completedChart', completed, total, 'Completed', '#6f42c1');
    renderDonut('progressChart', inProgress, total, 'In Progress', '#0d6efd');
    renderDonut('notstartedChart', notstarted, total, 'Not Started', '#dc3545');
</script>
@endsection
