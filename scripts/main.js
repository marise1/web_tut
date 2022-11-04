/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";*/

/*
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});*/

const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/powers2.gif") {
    myImage.setAttribute("src", "images/powers2.jpg");
  } else {
    myImage.setAttribute("src", "images/powers2.gif");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => {
  setUserName();
};

function setUserName() {
  const myName = prompt("Please enter your name."); // pop up
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName); // variable 'name' with its value
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}