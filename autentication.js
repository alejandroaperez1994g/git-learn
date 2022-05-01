const list = document.querySelector(".list");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((element) => {
//       let liE = document.createElement("li");
//       liE.textContent = element.title;
//       list.appendChild(liE);
//     });
//   });

const url = "https://jsonplaceholder.typicode.com/posts";
async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  setList(data);
}

const setList = (data) => {
  data.forEach((element) => {
    let elementList = document.createElement("li");
    elementList.innerHTML = element.title;
    list.appendChild(elementList);
    console.log(elementList);
  });
};

fetchData();
