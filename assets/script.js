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

var lineCount;

function keyUp(obj, e) {
  // arrows ; home ; end ; page up/down
  if (e.k = 33 && e.keyCode <= 40)
    selectionChanged(obj, e.keyCode);
}

function selectionChanged(obj) {
  var subStr = obj.value.substring(0, obj.selectionStart).split('\n');
  var row = subStr.length;
  var col = subStr[subStr.length - 1].length + 1;
  var tmpstr = 'Ln ' + row.toString() + ', Col ' + col.toString();

  // if selection spans over 
  if (obj.selectionStart != obj.selectionEnd) {
    subStr = obj.value.substring(obj.selectionStart, obj.selectionEnd).split('\n');
    row += subStr.length - 1;
    col = subStr[subStr.length - 1].length + 1;
    tmpstr += ' - Ln ' + row.toString() + ', Col ' + col.toString();
  }
  document.getElementById('line').innerHTML = tmpstr;
}

function inputChanged(objTxt) {
  objRows = objTxt.parentElement.parentElement.getElementsByTagName('textarea')[0];
  lineCount = countLines(objTxt.value);
  if (lineCount == 0) lineCount = 1;
  tempArr = objRows.value.split('\n');
  lineCountOld = parseInt(tempArr[tempArr.length - 1], 10);

  // if there was a change in line count
  if (lineCount != lineCountOld) {
    objRows.cols = lineCount.toString().length; // new width of txt_rownr
    populateRowNumber(objRows, lineCount);
    scrollChanges(objTxt);
  }
  selectionChanged(objTxt);
}

function scrollChanges(objTxt) {
  objRows = objTxt.parentElement.parentElement.getElementsByTagName('textarea')[0];
  scrollSync(objTxt, objRows);
}

function scrollSync(obj1, obj2) {
  // scroll text in object id1 the same as object id2
  obj2.scrollTop = obj1.scrollTop;
}

function populateRowNumber(obj, lineCount) {
  tmpstr = '';
  for (i = 1; i <= lineCount; i++) {
    tmpstr = tmpstr + i.toString() + '\n';
  }
  obj.value = tmpstr;
}

function countLines(txt) {
  if (txt == '') {
    return 1;
  }
  return txt.split('\n').length + 1;
}
