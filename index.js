const checkBoxEl = document.querySelector(".input");
console.log(checkBoxEl.checked);

const bodyEl = document.querySelector("body");

checkBoxEl.checked = JSON.parse(localStorage.getItem("b-preference"));

function updateBody() {
  //   let preference = localStorage.getItem("b-preference");
  //   if (preference === "true") {
  //     bodyEl.style.backgroundColor = "black";
  //   }
  if (checkBoxEl.checked) {
    bodyEl.style.backgroundColor = "black";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
}

updateBody();

checkBoxEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("b-preference", JSON.stringify(checkBoxEl.checked));
}
