let navbarLinks = document.querySelectorAll("header nav div ul li a");

window.addEventListener("scroll", e => {
  scrollpos = window.scrollY;

  navbarLinks.forEach(link => {

    let section = document.querySelector(link.hash);
    
    if (section.offsetTop <= scrollpos + 200 &&
        section.offsetTop + section.offsetHeight > scrollpos + 200) {
      link.classList.add("active");
      link.classList.add("active-nav-item");
    } else {
      link.classList.remove("active");
      link.classList.remove("active-nav-item");
    }
  });
});