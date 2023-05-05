const imagesObj = [
  {
    image: "img0.jpg",
    title: "Hercules M13",
  },
  {
    image: "img1.jpg",
    title: "Dumbbell Nebula",
  },
  {
    image: "img2.jpg",
    title: "Jupiter",
  },
  {
    image: "img3.jpg",
    title: "Nebula M57",
  },
  {
    image: "img4.jpg",
    title: "Saturn",
  },
  {
    image: "img5.jpg",
    title: "Black Eye M64",
  },
  {
    image: "img6.jpg",
    title: "Orion Nebula M42",
  },
  {
    image: "img7.jpg",
    title: "M62 Galaxy",
  },
  {
    image: "img8.jpg",
    title: "Orion Nebula",
  },
  {
    image: "img9.jpg",
    title: "Jupiter",
  },
  {
    image: "img10.jpg",
    title: "M51 Galaxy",
  },
];

var cont1 = document.querySelector(".cont1");
var cont2 = document.querySelector(".cont2");
var cont3 = document.querySelector(".cont3");

const ranGen = () => {
  min = Math.ceil(0);
  max = Math.floor(Object.keys(imagesObj).length);

  cont1ranNum = Math.floor(Math.random() * (max - min));
  cont2ranNum = Math.floor(Math.random() * (max - min));
  cont3ranNum = Math.floor(Math.random() * (max - min));

  if (cont1ranNum === cont2ranNum) {
    cont2ranNum = Math.floor(Math.random() * (max - min));
  }

  if (cont2ranNum === cont3ranNum) {
    cont2ranNum = Math.floor(Math.random() * (max - min));
  }

  if (cont1ranNum === cont3ranNum) {
    cont3ranNum = Math.floor(Math.random() * (max - min));
  }

  cont1.firstChild.textContent = `${imagesObj[cont1ranNum].title}`;
  cont1.lastChild.src = `images/${imagesObj[cont1ranNum].image}`;
  cont2.firstChild.textContent = `${imagesObj[cont2ranNum].title}`;
  cont2.lastChild.src = `images/${imagesObj[cont2ranNum].image}`;
  cont3.firstChild.textContent = `${imagesObj[cont3ranNum].title}`;
  cont3.lastChild.src = `images/${imagesObj[cont3ranNum].image}`; 


};
ranGen();
setInterval(ranGen, 5000);
