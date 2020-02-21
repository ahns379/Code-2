class Animal{
  //data
  constructor(name, continent){
    //defining a method 
    //every class has a constructor method 
    //this referes to this() type of object. data is absolutely belonging to this class. 
    this.name = name;
    this.continent = continent;
    
  }
}

let animals = [];


//animal class definition
function setup() {
  noLoop();
  // print("Before the push" + animals);
  // animals.push("Hello");
  // print("After the push:" + animals);
  animals.push(new Animal("Oliver", "North America"));
  print("After pushing the new animal: " + animals);
  print (animals);
  
  animals.forEach( a => print(a));
  
  
//   let jc = new Animal("John Cat", "North America");
  
//   print (ow);
//   print(jc);
  // createCanvas(400, 400);
}

function draw() {
  background(220);
}