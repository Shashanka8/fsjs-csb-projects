function insert(num) {
  document.form.textview.value += num;
}

function equals() {
  if (document.form.textview.value == "") {
    alert("Please enter any numbers to calculate");
  } else {
    document.form.textview.value = eval(document.form.textview.value);
  }
}

function clean() {
  document.form.textview.value = "";
}

function back() {
  const len = document.form.textview.value.length;
  document.form.textview.value = document.form.textview.value.slice(0, len - 1);
}
