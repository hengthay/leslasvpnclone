
window.addEventListener('scroll', () => {

  const navBar = document.getElementById('navbar');

  if(window.scrollY > 10 ) {
    navBar.classList.add('border-b-2', "border-red-500", "shadow-md", "shadow-red-500", "transition", "duration-300");
  }else {
    navBar.classList.remove('border-b-2', "border-red-500", "shadow-md", "shadow-red-500", "transition", "duration-300");
  }
});