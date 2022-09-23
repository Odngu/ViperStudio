let slideIndex = [1, 1, 1];
let slideId = ["indumentaria__exhibicion--imagen", "logotipos__exhibicion--imagen", "flyers__exhibicion--imagen"]
crearSlide(1, 0);
crearSlide(1, 1);
crearSlide(1, 2);

window.scrollTo(0, 0);

function plusSlides(n, no) {
 crearSlide(slideIndex[no] += n, no);
}

function crearSlide(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}