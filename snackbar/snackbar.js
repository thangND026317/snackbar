document.getElementById("snackbarBtn").onclick = () => {
  let snackbar = document.getElementById("snackbar");
  snackbar.classList.add("show");
  setTimeout(() => {
    snackbar.classList.remove("show");
  }, 3000);
};

document.getElementById("closeSnackbar").onclick = () => {
  document.getElementById("snackbar").classList.remove("show");
};

// hover = hold