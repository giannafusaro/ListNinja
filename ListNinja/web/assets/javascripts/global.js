

function redirectTo(path) {
  if (window.location.pathname != path) {
    window.location = path;
  }
}