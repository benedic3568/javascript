const h1 = document.getElementById("hi");
const input = document.getElementById("username");
const button = document.querySelector("button");

const name = localStorage.getItem("username");

if (name === null) {
  h1.innerText = "사용사 이름을 정해주세요!";
} else {
  h1.innerText = name + "님 안녕하세요!";
}

function printUsername() {
  const username = input.value;
  localStorage.setItem("username", username);
  h1.innerText = username + "님 안녕하세요";
}
button.addEventListener("click", printUsername);
