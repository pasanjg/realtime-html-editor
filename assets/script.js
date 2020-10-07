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

window.onbeforeunload = function () {
  return "";
};
