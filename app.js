const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  console.log(formData);
  const myObj = Object.fromEntries(formData);
  console.log(myObj);
});
