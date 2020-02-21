/* Please do this with a partner.
ASK a neighbor if you don't know what to do or get stuck. Only after no one in the class can figure out what to do you ask Ursula.


This is an informal test of your understanding of the code assigned this week.  With a partner debug it.

THEN:  enhance it by adding items to the poison list in setup using dot notation. 
*/
// worldModel is a JSON object
let worldModel = {
// food relates to an array of strings
 "food": ["pizza", "ice cream", "apple sauce"],
  "poison": ["mushrooms", "pufferfish", "bleach"]
 }

let avatar = {}; // new  JSON Object
avatar.id = 0;
avatar.name = "Oliver Wodunne";
avatar.foods = "pizza, bacon, cookies";

function preload() {
  pizza = loadImage("assets/pizza.jpg");
  icecream = loadImage("assets/icecream.jpg");
  applesauce = loadImage("assets/applesauce.jpg");
}

function setup() {
  createCanvas(1000,1000);
  // Should print an array
  print(worldModel.food);
  print(avatar.name);
  print(avatar.foods);
  // Should print the number of items in worldModel
  print(worldModel.food.length);
  // Should print each item in the food list
  for(let i = 0 ; i < worldModel.food.length; i++)
    print(worldModel.food[i]);
}

function draw() {
  image(pizza, 0,0, 100,100);
  image(icecream, 100,0,100,100);
  image(applesauce, 200,0,100,100);
}
