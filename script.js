const inp = document.querySelectorAll(".validateInput");
const form = document.querySelector(".validatedForm");

inp.forEach((e) => {
  e.addEventListener("blur", (event) => {
    if (event.target.value === "") {
      event.target.nextSibling.nextSibling.style.visibility = "visible";
    }
  });
  e.addEventListener("input", (event) => {
    if (event.target.value !== "") {
      event.target.nextSibling.nextSibling.style.visibility = "hidden";
    }
  });
});

let isValidated = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inp.forEach((event) => {
    if (event.value === "") {
      event.nextSibling.nextSibling.style.visibility = "visible";
      isValidated = false;
    } else {
      isValidated = true;
    }
  });
  if (isValidated) {
    form.submit();
  }
});
