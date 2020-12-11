function openNav() {
  document.getElementById("mySidenav").style.width = "500px";
  document.getElementById("myDiv").style.opacity = "0.5";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("myDiv").style.opacity = "1";
}

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeNav();
  }
})

