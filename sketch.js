const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bola;
var piso, piso2, piso3, piso4;

var up;

function setup() {
  createCanvas(400, 500);

  engine = Engine.create();
  world = engine.world;

  var bola_options = {
    restitution: 0.7,
    frictionAir: 0.05,
  };

  bola = Bodies.circle(200, 100, 20, bola_options);
  World.add(world, bola);

  piso = new Backroom(200, 389, 400, 20);
  piso2 = new Backroom(200, 10, 400, 20);

  //criando um botão
  up = createImg("up.png");
  up.size(70, 70);
  up.position(20, 415);
  up.mouseClicked(cima);
}

function draw() {
  background("black");

  Engine.update(engine);

  strokeWeight(2);
  stroke("purple");
  noFill();

  ellipseMode(RADIUS);
  ellipse(bola.position.x, bola.position.y, 20);

  piso.show();
  piso2.show();
}

function cima() {
  Matter.Body.applyForce(bola, { x: 0, y: 0 }, { x: 0, y: -0.1 });
}
