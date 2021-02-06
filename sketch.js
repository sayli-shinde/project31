const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var PLAY = 1;
var END = 0;
var gameState = PLAY;


var thunder1,thunder2,thunder3,thunder4;
var thunderGroup;
var particles = [];

function preload(){
    
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
   createCanvas(1800,1000);

    boy = new Boy(900,680);
       
    thunderGroup = new Group();

    Engine.run(engine); 
}

function draw(){
    Engine.update(engine);

    background(0);

    spawnObstacles();

    if(frameCount % 1 === 0){
        particle = new Drop(random(width/2-1300, width/2+1000), 2, 2);
        particles.push(particle);
      }

      for (var j = 0; j < particles.length; j++ ){
        particles[j].display();
      } 
    
      boy.display();
      
      drawSprites();
}   

function spawnObstacles() {
    if(frameCount % 60 === 0) {
       var thunder = createSprite(900,150);
    
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: thunder.addImage(thunder1);
                break;
        case 2: thunder.addImage(thunder2);
                break;
        case 3: thunder.addImage(thunder3);
                break;
        case 4: thunder.addImage(thunder4);
                break;
        default: break;
      }        
      thunder.scale = 0.5;
      thunder.lifetime = 5;

      thunderGroup.add(thunder)
      
     
    }
  }