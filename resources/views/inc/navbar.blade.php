<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <h1 class="navbar-brand">G-Tee</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        @if(Session::get('firebase_user_role') === 'admin')
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/category">Manage Category</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/user">Manage User</a>
          </li>
        @elseif(Session::get('firebase_user_role') === 'user')
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/goaltracker">Goal Tracker</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/todolist">To Do List</a>
          </li>
        @endif
      </ul>

      <form action="{{ route('logout') }}" method="POST" class="d-flex ms-3">
        @csrf
        <button type="submit" class="btn btn-danger">Logout</button>
      </form>
    </div>
  </div>
</nav>