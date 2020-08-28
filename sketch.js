const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var divison1, divison2,divison3,divison4,divison5;
var particle1,particle2,particle3,particle4,particle5,particle6,particle7;
var hlo1,hlo2,hlo3,hlo4,hlo5,hlo6,hlo7,hlo8,hlo9,hlo10;
var hlo11,hlo12,hlo13,hlo14,hlo15,hlo16,hlo17,hlo18,hlo19,hlo20;
var hlo21,hlo22,hlo23,hlo24,hlo25,hlo26,hlo27,hlo28,hlo29,hlo30;
function preload() {
  
}

function setup(){
    var canvas = createCanvas(430,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(200,695,500,20);
     divison1 = new Divison(215,580,20,250);
     divison2 = new Divison(315,580,20,250);
     divison3 = new Divison(115,580,20,250);
      divison4= new Divison(10,580,20,250);
       divison5 = new Divison(425,580,20,250);
particle1=new Particle(200,100,10);
particle2=new Particle(170,100,10);
particle3=new Particle(220,100,10);
particle4=new Particle(120,100,10);
particle5=new Particle(240,100,10);
particle6=new Particle(140,100,10);
particle7=new Particle(260,100,10);
hlo1=new Hlo(10,150,10);
hlo2=new Hlo(90,150,10);
hlo3=new Hlo(170,150,10);
hlo4=new Hlo(250,150,10);
hlo5=new Hlo(330,150,10);
hlo6=new Hlo(410,150,10);
hlo7=new Hlo(490,150,10);
hlo8=new Hlo(570,150,10);
hlo9=new Hlo(650,150,10);
hlo10=new Hlo(730,150,10);
hlo11=new Hlo(50,230,10);
hlo12=new Hlo(130,230,10);
hlo13=new Hlo(210,230,10);
hlo14=new Hlo(290,230,10);
hlo15=new Hlo(370,230,10);
hlo16=new Hlo(450,230,10);
hlo17=new Hlo(530,230,10);
hlo18=new Hlo(610,230,10);
hlo19=new Hlo(690,230,10);
hlo20=new Hlo(770,230,10);

hlo21=new Hlo(10,310,10);
hlo22=new Hlo(90,310,10);
hlo23=new Hlo(170,310,10);
hlo24=new Hlo(250,310,10);
hlo25=new Hlo(330,310,10);
hlo26=new Hlo(410,310,10);
hlo27=new Hlo(490,310,10);
hlo28=new Hlo(570,310,10);
hlo29=new Hlo(650,310,10);
hlo30=new Hlo(730,310,10);

}

function draw(){
    background(0);
   
    Engine.update(engine);
   
 
    ground.display();
   divison1.display();
      divison2.display();
      divison3.display();
       divison4.display();
        divison5.display();
      particle1.display();
      particle2.display();
      particle3.display();
      particle4.display();
      particle5.display();
      particle6.display();
      particle7.display();
      hlo1.display();
       hlo2.display();
        hlo3.display();
         hlo4.display();
          hlo5.display();
           hlo6.display();
            hlo7.display();
             hlo8.display();
 hlo9.display();
  hlo10.display();
  
   hlo11.display();
       hlo12.display();
        hlo13.display();
         hlo14.display();
          hlo15.display();
           hlo16.display();
            hlo17.display();
             hlo18.display();
 hlo19.display();
  hlo20.display();
   
hlo21.display();
hlo22.display();
hlo23.display();
hlo24.display();
hlo25.display();
hlo26.display();
hlo27.display();
hlo28.display();
hlo29.display();
hlo30.display();

}
