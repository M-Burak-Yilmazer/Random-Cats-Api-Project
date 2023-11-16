const cardDiv = document.getElementById("cardDiv");
const loadingDiv = document.getElementById("loading");
const btn = document.querySelector(".btn");
const containerDiv = document.querySelector(".none");
const tarih = document.getElementById("tarih");

// image.innerHTML = `<img class="image" src="./img/loading.gif" />`;
setTimeout(() => {
  loadingDiv.remove();
  containerDiv.classList.add("blok")
  request();
  btn.addEventListener("click", () => {
    cardDiv.innerHTML = "";
    request();
  });
 
}, 3000);

 setInterval(()=>{tarih.innerHTML = `${new Date().toLocaleString()}`;},1000)


const url = "./img/spin.gif";
let image = document.createElement("img");
image.src = `${url}`;
image.classList.add("image");



const showError = () => {
  image.src = "./img/error.gif";
  cardDiv.appendChild(image);
  image.classList.add("block");
};
const showImg = () => {
  cardDiv.appendChild(image);
  image.classList.add("block");
};
const closeImg = () => {
  image.classList.remove("block");
};

const request = () => {
  showImg();
  fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      closeImg();
      showCat(data);
    })
    .catch((err) => {
      showError();
      console.log(err);
    });
};

const showCat = (array) => {
  console.log(array);
  array.forEach((item) => {
    cardDiv.innerHTML += `<div class="col-12 col-sm-6 col-lg-4">
      <div style="height:200px;">
        <img src="${item.url}" class=" catimg img-thumbnail w-100 h-100" alt="...">
      </div>
</div>`;
  });
};
