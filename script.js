const container = document.querySelectorAll(".container");
const unread = document.querySelectorAll(".unread");
const link = document.querySelectorAll(".link");
const drop = document.getElementById("drop");

let privateButton = document.getElementById("private");
let newNumber = document.getElementById("number");

let number = unread.length;

newNumber.textContent = number;

container.forEach((c, i) => {
  c.addEventListener("click", function () {
    c.style.backgroundColor = "white";
    unread[i].classList.add("active");
    newNumber.textContent = number - document.querySelectorAll(".unread.active").length;
  });
});

privateButton.addEventListener("click", function () {
  drop.style.border = "1px solid hsl(219, 12%, 42%)";
});

const mark = document.getElementById("mark");
mark.addEventListener("click", markAll);
function markAll() {
  container.forEach((c) => {
    c.style.backgroundColor = "white";
  });
  unread.forEach((u) => {
    u.classList.add("active");
  });
  newNumber.textContent = 0;
}
