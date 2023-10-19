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

let uniPlanets = new Set()

const cont1 = document.querySelector(".cont1");
const cont2 = document.querySelector(".cont2");
const cont3 = document.querySelector(".cont3");

const ranGen = () => {
  uniPlanets.clear()
  min = Math.ceil(0);
  max = Math.floor(Object.keys(imagesObj).length);

for(let i = 0; i < 10; i++) {
  let unnum = Math.floor(Math.random() * (max - min));
      uniPlanets.add(unnum)
  } 
  
let uniPlanetVals = uniPlanets.values()
let uniPlanetsArr = []

for(let x = 0; x < uniPlanets.size; x++) {
  uniPlanetsArr.push(uniPlanetVals.next().value)
}

  cont1.firstChild.textContent = `${imagesObj[uniPlanetsArr[0]].title}`;
  cont1.lastChild.src = `images/${imagesObj[uniPlanetsArr[0]].image}`;
  cont2.firstChild.textContent = `${imagesObj[uniPlanetsArr[1]].title}`;
  cont2.lastChild.src = `images/${imagesObj[uniPlanetsArr[1]].image}`;
  cont3.firstChild.textContent = `${imagesObj[uniPlanetsArr[2]].title}`;
  cont3.lastChild.src = `images/${imagesObj[uniPlanetsArr[2]].image}`; 

}
ranGen();

setInterval(ranGen, 5000);
