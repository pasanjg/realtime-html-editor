function refresh() {
  var editorText = document.getElementById('editor').value;
  document.getElementById('viewer').srcdoc = editorText;
}

function erase() {
  var editorText = document.getElementById('editor').value;
  if ((editorText !== null) || (editorText !== ' ') || (editorText === undefined)) {
    if (confirm('Clear everything in the editor?')) {
      document.getElementById('editor').value = "";
      refresh();
    }
  }
}

function switchMode() {
  document.body.classList.toggle('light');
  if (document.getElementById("switch").classList.contains('fa-moon'))
    document.getElementById("switch").classList.toggle('fa-sun');
  else
    document.getElementById("switch").classList.toggle('fa-moon');
}

window.onbeforeunload = function () {
  return "";
};
