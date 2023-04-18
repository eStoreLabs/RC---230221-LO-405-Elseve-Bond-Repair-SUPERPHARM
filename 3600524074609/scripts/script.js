const smoothScrollElems = document.querySelectorAll(
  'a[href^="#"]:not([href="#"])',
);
smoothScrollElems.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const id = link.getAttribute('href').substring(1);

    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
