document
  .querySelector("#tombol-jumbotron")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });

document
  .querySelector("nav ul li:nth-child(1) a")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

document
  .querySelector("nav ul li:nth-child(2) a")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("tech").scrollIntoView({
      behavior: "smooth",
    });
  });

document
  .querySelector("nav ul li:nth-child(3) a")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
    });
  });

var tombolKeAtas = document.getElementById("tombol-ke-atas");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    tombolKeAtas.style.display = "block";
  } else {
    tombolKeAtas.style.display = "none";
  }
});

tombolKeAtas.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const tombolJumbotron = document.getElementById("tombol-jumbotron");
const tombolJumbotronText = document.getElementById("tombol-jumbotron-text");

tombolJumbotron.addEventListener("mouseover", function () {
  tombolJumbotronText.style.display = "inline";
});

tombolJumbotron.addEventListener("mouseout", function () {
  tombolJumbotronText.style.display = "none";
});
