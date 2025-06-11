@extends('layout')

@section('content')
<link rel="stylesheet" href="{{ asset('css/custom-goaltracker.css') }}">
<div class="container">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h2>Add Goal Tracker
                        <a href="/goaltracker" class="btn btn-sm btn-danger float-end">Cancel</a> 
                    </h2> 
                </div>
             
                <div class="card-body">
                     <form action='add-goaltracker' method="POST">
                        @csrf
                        <div class="form-group mb-3">
                            <label>Title</label>
                            <input type="text" name="title" class="form-control" required>
                        </div>
                        <div class="form-group mb-3">
                            <label>Category</label>
                            <select name="category_id" class="form-control" required>
                                <option value="" disabled selected hidden>-- Select Category --</option>
                                @if(isset($category) && count($category) > 0)
                                    @foreach($category as $key => $cat)
                                        <option value="{{ $key }}">{{ $cat['title'] }}</option>
                                    @endforeach
                                @else
                                    <option value="" disabled>No active category available</option>
                                @endif
                            </select>
                        </div>
                        <div class="form-group mb-3">
                            <label>Activity</label>
                            <div id="activity-container">
                                <div class="activity-group mt-3">
                                    <input type="text" name="activity[0][task]" class="form-control mb-2" placeholder="Task" required>
                                    <select name="activity[0][urgency]" class="form-control mb-2" required>
                                        <option value="" disabled selected hidden>-- Select Urgency --</option>
                                        <option value="Very Low">Very Low</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Very High">Very High</option>
                                    </select>
                                    <input type="datetime-local" name="activity[0][deadline]" class="form-control mb-2" required>
                                    <select name="activity[0][status]" class="form-control mb-2" required>
                                        <option value="" disabled selected hidden>-- Select Status --</option>
                                        <option value="Not Started">Not Started</option>
                                        <option value="On Progress">On Progress</option>
                                        <option value="Done">Done</option>
                                    </select>
                                    <button type="button" class="btn btn-sm btn-danger remove-activity-btn">Hapus</button>
                                </div>
                            </div>
                            <button type="button" class="btn btn-sm btn-info" id="add-activity-btn">Add More Activity</button>
                        </div>
                        <div class="form-group mb-3">
                            <button type="submit" class="btn btn-primary">Save Goal Tracker</button>
                        </div>
                        <script>
                            let activityIndex = 1;

                            function updateRemoveButtonsVisibility() {
                                const groups = document.querySelectorAll('.activity-group');
                                groups.forEach((group, index) => {
                                    const removeBtn = group.querySelector('.remove-activity-btn');
                                    if (removeBtn) {
                                        removeBtn.style.display = (groups.length > 1) ? 'inline-block' : 'none';
                                    }
                                });
                            }

                            document.getElementById('add-activity-btn').addEventListener('click', function () {
                                const container = document.getElementById('activity-container');
                                const newGroup = document.createElement('div');
                                newGroup.classList.add('activity-group', 'mt-3');
                                newGroup.innerHTML = `
                                    <input type="text" name="activity[${activityIndex}][task]" class="form-control mb-2" placeholder="Task" required>
                                    <select name="activity[${activityIndex}][urgency]" class="form-control mb-2" required>
                                        <option value="" disabled selected hidden>-- Select Urgency --</option>
                                        <option value="Very Low">Very Low</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Very High">Very High</option>
                                    </select>
                                    <input type="datetime-local" name="activity[${activityIndex}][deadline]" class="form-control mb-2" required>
                                    <select name="activity[${activityIndex}][status]" class="form-control mb-2" required>
                                        <option value="" disabled selected hidden>-- Select Status --</option>
                                        <option value="Not Started">Not Started</option>
                                        <option value="On Progress">On Progress</option>
                                        <option value="Done">Done</option>
                                    </select>
                                    <button type="button" class="btn btn-sm btn-danger remove-activity-btn">Hapus</button>
                                `;
                                container.appendChild(newGroup);
                                activityIndex++;
                                updateRemoveButtonsVisibility();
                            });

                            document.getElementById('activity-container').addEventListener('click', function(e) {
                                if (e.target && e.target.classList.contains('remove-activity-btn')) {
                                    e.target.parentElement.remove();
                                    updateRemoveButtonsVisibility();
                                }
                            });

                            document.addEventListener('DOMContentLoaded', updateRemoveButtonsVisibility);
                        </script>
                     </form>
                </div>
            </div>
        </div> 
    </div>
</div>
@endsection