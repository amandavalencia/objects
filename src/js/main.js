import '/src/css/style.scss'
//Övningar objekt
//Fråga 1
class Person {
  eyecolor;
  name;
  favoriteColor;
  constructor(eyecolor,name,favoriteColor){
    this.eyecolor = eyecolor;
    this.name = name;
    this.favoriteColor = favoriteColor;
  }
}
//Fråga 2

window.onload = function (){
  const amandaV = new Person("Brun", "AmandaV", "Blå");
  const amandaT = new Person ("Blå", "AmandaT", "Pasteller");
  const mona = new Person ("Blå", "Mona", "Grön");

  const persons = [amandaT, amandaV, mona]
  for(let i = 0; i < persons.length; i++){
    console.log(persons[i]);

    const h2Name = document.createElement("h2");
    const h3Eyecolor = document.createElement("h3");
    const h3FavColor = document.createElement("h3");


    h2Name.id = "namn";
    h3Eyecolor.id = "ögon";
    h3FavColor.id = "Färg";
    

    h3Eyecolor.innerHTML = "Ögonfärg: " + persons[i].eyecolor;
    h3FavColor.innerHTML = "Favorit färg: " + persons[i].favoriteColor;
    h2Name.innerHTML = "Namn: " + persons[i].name;

    const container = document.createElement("div");
    container.className = "container";
    container.appendChild(h2Name);
    container.appendChild(h3Eyecolor);
    container.appendChild(h3FavColor);

    document.body.appendChild(container);
  }
}
 

class GreenIsGood {
  nameOfPlant;
  needOfLight;
  watering;
  nutrition;
  imgUrl;

  constructor(plant, light, watering, nutrition, imgUrl){
    this.nameOfPlant = plant;
    this.needOfLight = light;
    this.watering = watering;
    this.nutrition = nutrition;
    this.imgUrl = imgUrl;
  }
}
const section = document.createElement("section");

const papergojablomma = new GreenIsGood ("Vit Papergojablomma", "Sol - Halvskugga", "Medel", "Medel", "https://www.plantagen.se/dw/image/v2/BCMR_PRD/on/demandware.static/-/Sites-inriver-catalog/default/dw1a4d7e20/images/large/FW-547499_Strelitzia_Nicolai_35cm.jpg?sh=1236&sfrm=jpg")
const monstera = new GreenIsGood ("Monstera", "Halvskugga - Skugga", "Lite", "Medel", "https://www.plantagen.se/dw/image/v2/BCMR_PRD/on/demandware.static/-/Sites-inriver-catalog/default/dw1af58434/images/large/521144-4017891310947.jpg?sh=1236&sfrm=jpg")
const vinrödStenante = new GreenIsGood ("Vinröd stenante", "Sol - Halvskugga", "Medel", "Medel", "https://www.plantagen.se/dw/image/v2/BCMR_PRD/on/demandware.static/-/Sites-inriver-catalog/default/dw0556c0fd/images/large/FW-547531_Calathea_Oppenheimiana_27cm.jpg?sh=1236&sfrm=jpg")
const Rundkalatea = new GreenIsGood ("Rundkalatea", "Halvskugga", "Medel", "Medel", "https://www.plantagen.se/dw/image/v2/BCMR_PRD/on/demandware.static/-/Sites-inriver-catalog/default/dwce33b64b/images/large/4017891293875(1).jpg?sh=1236&sfrm=jpg")

const plantor = [papergojablomma, monstera, vinrödStenante, Rundkalatea]
for(let i = 0; i < plantor.length; i++){

  const plantName = document.createElement("h1");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const img = document.createElement("img");

  plantName.innerHTML = plantor[i].nameOfPlant;
  p1.innerHTML = "Ljusbehov: " + plantor[i].needOfLight;
  p2.innerHTML = "Vatten: " + plantor[i].watering;
  p3.innerHTML = "Näring: " + plantor[i].nutrition;
  img.src = plantor[i].imgUrl;

  img.className = "imgPlantor";

  const flowerContainer = document.createElement("div");
  flowerContainer.className = "flowerContainer";

  flowerContainer.appendChild(plantName);
  flowerContainer.appendChild(p1);
  flowerContainer.appendChild(p2);
  flowerContainer.appendChild(p3);
  flowerContainer.appendChild(img);

  section.appendChild(flowerContainer);

} 
document.body.appendChild(section);