const buttonElement = document.getElementById("button");
const adviceElement = document.getElementById("advice");

async function addAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const movies = await response.json();
  let result = movies.slip["advice"];
  return result;
}
addAdvice();

buttonElement.onclick = function (e) {
  addAdvice()
    .then((data) => {
        adviceElement.innerHTML = data;
      console.log("Success:", data);
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
};
