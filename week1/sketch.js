let name = "Julie Ahn";
let age = "21";
let loc = "New Jersey";
let contact = "ahns379@newschool.edu";

let picture;

let worldModel = {
 "food": ["coffee", "icecream", "chocolate"],
  "major": ["communication design"],
 }

let avatar = {}; // new  JSON Object
avatar.id = 0;
avatar.name = "Julie Ahn";
avatar.foods = ["coffee", "icecream", "chocolates"];

function preload() {
  picture = loadImage("assets/mypicture.JPG");
}

function setup() {
  createCanvas(800, 800);
  picture.resize(width/3, 0);
  print(worldModel);
  print(avatar);
  print(worldModel.food);
  print(worldModel.food.length);
  for(let i =0 ; i < worldModel.food.length; i++)
    print(worldModel.food[i]);
}

function draw() {
  background(255);
  image(picture, 0, 0);
  let posX = 10;
  let posY = 350;
  text("Name: " + name, posX, posY);
  posY += 20;
  text("Age: " + age, posX, posY);
  posY += 20;
  text("Location: " + loc, posX, posY);
  posY += 20;
  text("Contact: " + contact, posX, posY);
}



