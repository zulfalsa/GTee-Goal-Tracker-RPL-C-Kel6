@extends('layout')

@section('content')
<link rel="stylesheet" href="{{ asset('css/custom-todolist.css') }}">
<div class="dashboard-container d-flex">

    {{-- Main Content --}}
    <main class="main-content flex-grow-1 p-4">
        {{-- Heading and Add Button --}}
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h2 class="fw-bold mb-0">Work Hard, Play Hard!</h2>
            <a href="/add-todolist" class="btn btn-purple shadow-sm"> Add New To Do List</a>
        </div>

        {{-- Donut Chart + Category --}}
        <div class="row mb-4">
            {{-- Donut Charts --}}
            <div class="col-md-8">
                <div class="chart-wrapper d-flex gap-3 flex-wrap">
                    <div class="donut">
                        <canvas id="completedChart"></canvas>
                        <p>Completed</p>
                    </div>
                    <div class="donut">
                        <canvas id="progressChart"></canvas>
                        <p>In Progress</p>
                    </div>
                </div>
            </div>

            {{-- Category Section --}}
            <div class="col-md-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h5 class="fw-semibold mb-0">Category ({{ count($category) }})</h5>
                </div>

                @forelse($category as $cat)
                    @php
                        $total = $cat['total_tasks'] ?? 0;
                        $completed = $cat['completed_tasks'] ?? 0;
                        $percentage = $total > 0 ? round(($completed / $total) * 100) : 0;
                    @endphp
                    <div class="card shadow-sm mb-3 border-0">
                        <div class="card-body">
                            <h6 class="fw-bold mb-1">{{ $cat['title'] }}</h6>
                            <small class="text-muted">Projects and Assignments</small>
                            <div class="d-flex align-items-center mt-2 mb-1">
                                <div class="flex-grow-1">
                                    <div class="progress" style="height: 6px;">
                                        <div class="progress-bar bg-primary" style="width: {{ $percentage }}%;"></div>
                                    </div>
                                </div>
                                <small class="ms-2">{{ $completed }}/{{ $total }}</small>
                            </div>
                            @if(isset($cat['next_deadline']))
                                <div class="mt-2">
                                    <span class="badge bg-light text-dark rounded-pill">{{ $cat['next_deadline'] }}</span>
                                </div>
                            @endif
                        </div>
                    </div>
                @empty
                    <p class="text-muted">No category available.</p>
                @endforelse
            </div>
        </div>

        {{-- Task Table --}}
        <div class="table-responsive shadow-sm rounded-3 bg-white p-3">
            <table class="table table-borderless align-middle">
                <thead class="table-light">
                    <tr>
                        <th>Tasks</th>
                        <th>Urgency</th>
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
                            <td><a href="{{ url('edit-todolist/'.$item['id']) }}" class="btn btn-sm btn-outline-success">✏️</a></td>
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
                            <td colspan="6" class="text-center text-muted py-4">No tasks available 💤</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </main>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    const completed = {{ $todolist->where('status', 'Done')->count() }};
    const inProgress = {{ $todolist->where('status', 'On Progress')->count() }};
    const total = completed + inProgress;

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
</script>
@endsection
