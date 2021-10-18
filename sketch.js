//sounds :
var footStep, bgMusic;
var foot1 = "no";
var explosion, explosion1 = "no";
var money, money1 = "no";
var click, click1 = "no";
var drop, drop1 = "no";
var box, box1 = "no";
var WIN, WIN1 = "no";

//images/sounds : 
var monkeyBodyIMG, marsIMG, earthIMG, rocketIMG, rocketShipIMG, cap1IMG;
var shooter1IMG, rdBoxIMG, blueBoxIMG;
var capSellerL, capSellerR, monkeyL, monkeyR, redCapIMG, blueCapIMG;
var astroidIMG, bulletIMG;
var star, starIMG
//starting screen sprites : 
var bg1;
var monkeyBody;
var button;

//starting screen buttons : 
var shopButton, levelsButton, howToPlayButton, backButton;

//SHOP :
var buyButton, buyButton2, sellButton;
var cap1, shooter1, rocketShip;

var rocket = "0";
var shooter = "0";

//LEVELS : 
var monkey;
var LV1Button, LV2Button, LV3Button, LV4Button, LV5Button;
var rocketim, earth, mars;

var gameState = "0";
var monkeyCount = 0;
var moneyCount = 0;
var capCount = 0;
var levelCount = 1;

var capSeller;

var redCap1, redCap2, redCap3, blueCap1, blueCap2, blueCap3;
var border1, border2, border3, border4;
var redBox, blueBox;
var back2button;
var earn = "0";

//LV 1 : 
var wall1, wall2;
var monkey1, monkey2;
var monkey1Stat = "no";
var monkey2Stat = "no";

//LV 2 : 
var wall3, wall4, wall5, wall6;
var monkey3;
var monkey3Stat = "no";
var reset = "0";
var resetButton;

//LV 4 :
var astroidGroup;
var buletsGroup;
var rocketBody;
var state = "play";
var score = 0;
var buttonRe;

//LV 5 : 
var alien, alienIMG;
var wall7, wall8, wall9, wall10,wall11;
var sensor1, door1;
var sensor2, sensor3, door2;
var playButton;
var endDoor;
var block;
var s1 = "no", s2 = "no", s3 = "no";

function preload(){

    //images
    starIMG = loadImage("Images/stars.jpg");
    monkeyBodyIMG = loadImage("Images/monkeyFullBody.png");

    marsIMG = loadImage("Images/Mars.png");
    earthIMG = loadImage("Images/Earth.png");
    rocketIMG = loadImage("Images/rocket.png");
    rocketShipIMG = loadImage("Images/roketShip.png");
  
    cap1IMG = loadImage("Images/blueCap.png");
    shooter1IMG = loadImage("Images/shooter.png");
  
    redBoxIMG = loadImage("Images/redBox.png");
    blueBoxIMG = loadImage("Images/blueBox.png");
    

    blueCapIMG = loadImage("Images/blueCap.png");
    redCapIMG = loadImage("Images/redCap.png");

    monkeyR = loadImage("Images/MonkeyS.png");
    monkeyL = loadImage("Images/Monkey.png");

    capSellerR = loadImage("Images/capSeller.png.png");
    capSellerL = loadImage("Images/CapSellerS.png");

    llamaIMG = loadImage("Images/llama.png");
    astroidIMG = loadImage("Images/astroid.png");
    bulletIMG = loadImage("Images/bullet.png");

    alienIMG = loadImage("Images/alien.png");

    //sounds
    footStep = loadSound("Sounds/footStep.mp3");
    bgMusic = loadSound("Sounds/bgMoosic.mp3");
    money = loadSound("Sounds/money.mp3");
    explosion = loadSound("Sounds/explostion.mp3");
    click = loadSound("Sounds/click.mp3");
    drop = loadSound("Sounds/drop.mp3");
    box = loadSound("Sounds/inBox.mp3");
    WIN = loadSound("Sounds/WIN.mp3");

}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);

    bgMusic.loop();

    star = createSprite(0,0,windowWidth,windowHeight);
    star.addImage("bg", starIMG);
    star.x = star.width/2;
    star.scale = 1.5;
    star.visible = false;

    bg1 = createSprite(windowWidth/2, (windowHeight/2) + 50, windowWidth - 100, windowHeight - 200);
    bg1.shapeColor = "white";

    //start screen buttons : 
    monkeyBody = createSprite(windowWidth - (windowWidth - 300),windowHeight - (windowHeight - 300),100,100);
    monkeyBody.addImage("hi",monkeyBodyIMG);

    shopButton = createButton("SHOP");
    levelsButton = createButton("LEVELS");
    howToPlayButton = createButton("HOW TO PLAY?");
    backButton = createButton("BACK");
    backButton.position(windowWidth - 190,500);
    backButton.hide();

    button = createButton("CLICK TO LEARN MORE");
    button.hide();

    //shop : 
    buyButton = createButton("BUY");
    buyButton.position(750,480);
    buyButton.hide();
    buyButton2 = createButton("BUY");
    buyButton2.position(1000,480);
    buyButton2.hide();
    sellButton = createButton("SELL");
    sellButton.position(1000,230);
    sellButton.hide();

    cap1 = createSprite(850,250,50,50);
    cap1.addImage("blue", cap1IMG);
    cap1.scale = 0.2;
    cap1.visible = false;

    shooter1 = createSprite(950,390,20,20);
    shooter1.addImage("gun", shooter1IMG);
    shooter1.scale = 0.4;
    shooter1.visible = false;

    rocketShip = createSprite(700,350,50,50);
    rocketShip.addImage("ship", rocketShipIMG);
    rocketShip.visible = false;
    rocketShip.scale = 0.4;

    //levels :
    LV1Button = createButton("LV 1");
    LV1Button.position(windowWidth - (windowWidth - 200),250);
    LV1Button.hide();
    LV2Button = createButton("LV 2");
    LV2Button.position(windowWidth - (windowWidth - 200),300);
    LV2Button.hide();
    LV3Button = createButton("LV 3");
    LV3Button.position(windowWidth - (windowWidth - 200),350);
    LV3Button.hide();
    LV4Button = createButton("LV 3");
    LV4Button.position(windowWidth/2,230);
    LV4Button.hide();
    LV5Button = createButton("LV 4");
    LV5Button.position((windowWidth - 200),300);
    LV5Button.hide();

    rocketim = createSprite(windowWidth/2, windowHeight/2, 50,50);
    rocketim.addImage("spaceShip", rocketIMG);
    rocketim.scale = 0.5;
    rocketim.visible = false;
    earth = createSprite(windowWidth - (windowWidth - 200),windowHeight/2,50,50);
    earth.addImage("earth", earthIMG);
    earth.scale = 0.6;
    earth.visible = false;

    mars = createSprite(windowWidth - 200,windowHeight/2,50,50);
    mars.addImage("mars", marsIMG);
    mars.scale = 0.6;
    mars.visible = false;

    monkey = createSprite(windowWidth/2 - 250,windowHeight - 150);
    monkey.addImage("m", monkeyR);
    monkey.scale = 0.15;
    monkey.visible = false;
    //LV 1 : 
    redCap1 = createSprite(400,205,50,50);
    redCap1.visible = false;
    redCap1.addImage("red", redCapIMG);
    redCap1.scale = 0.15;

    blueCap1 = createSprite(500,215,50,50);
    blueCap1.visible = false;
    blueCap1.addImage("blue", blueCapIMG);
    blueCap1.scale = 0.15;

    monkey1 = createSprite(windowWidth - (windowWidth - 100), windowHeight -(windowHeight - 200),50,50);
    monkey1.visible = false;
    monkey1.addImage("m", monkeyR);
    monkey1.scale = 0.15;
    monkey2 = createSprite(windowWidth - 100,windowHeight -(windowHeight - 200),50,50);
    monkey2.visible = false;
    monkey2.addImage("m", monkeyR);
    monkey2.scale = 0.15;

    wall1 = createSprite(windowWidth/2, (windowHeight/2) + 100,20,100);
    wall2 = createSprite(windowWidth/2, (windowHeight/2) - 50,250,20);


    //LV 2 :
    redCap2 = createSprite(300,200,50,50);
    redCap2.visible = false;
    redCap2.addImage("red", redCapIMG);
    redCap2.scale = 0.15;
    redCap3 = createSprite(1150,200,50,50);
    redCap3.visible = false;
    redCap3.addImage("red", redCapIMG);
    redCap3.scale = 0.15;
    
    
    blueCap2 = createSprite(400,300,50,50);
    blueCap2.visible = false;
    blueCap2.addImage("blue", blueCapIMG);
    blueCap2.scale = 0.15;
    blueCap3 = createSprite(600,100,50,50);
    blueCap3.visible = false;
    blueCap3.addImage("blue", blueCapIMG);
    blueCap3.scale = 0.15;

    monkey3 = createSprite(600,200,50,50);
    monkey3.visible = false;
    monkey3.addImage("m", monkeyR);
    monkey3.scale = 0.15;

    resetButton = createButton("RESTART LEVEL");
    resetButton.position(windowWidth - 190,50);
    resetButton.hide();

    wall3 = createSprite((windowWidth/2)+200,windowHeight -(windowHeight - 450),20,200);
    wall3.visible = false;
    wall4 = createSprite((windowWidth/2)+100,windowHeight -(windowHeight - 350),300,20);
    wall4.visible = false;
    wall5 = createSprite((windowWidth/2)+450,windowHeight -(windowHeight - 215),20,150);
    wall5.visible = false;
    wall6 = createSprite(windowWidth - (windowWidth - 200),windowHeight -(windowHeight - 350),20,80);
    wall6.visible = false;

    //LV 4 :
    astroidGroup = new Group();
    buletsGroup = new Group();

    rocketBody = createSprite(100,windowHeight/2,50,50);
    rocketBody.addImage("recket", rocketIMG);
    rocketBody.scale = 1;
    rocketBody.visible = false;

    buttonRe = createButton("RESTART");
    buttonRe.position(windowWidth/2, windowHeight/2);
    buttonRe.hide();
    //LV 5 : 

    alien = createSprite(windowWidth/2, windowHeight/2);
    alien.addImage("a", alienIMG);
    alien.scale = 0.8;
    alien.visible = false;

    playButton = createButton("PLAY");
    playButton.position(windowWidth - 190,500);
    playButton.hide();

    sensor1 = createSprite(windowWidth - 100,220,50,100);
    sensor1.shapeColor = "lightPink";
    sensor1.visible = false;

    sensor2 = createSprite(windowWidth - 150,windowHeight - 80,180,50);
    sensor2.shapeColor = "lightBlue";
    sensor2.visible = false;

    sensor3 = createSprite(100,windowHeight - 120,50,100);
    sensor3.shapeColor = "lightBlue";
    sensor3.visible = false;
    
    door1 = createSprite(windowWidth - 180,windowHeight - 200,200,20);
    door1.shapeColor = "lightPink";
    door1.visible = false;
    door2 = createSprite(400,250,20,200);
    door2.shapeColor = "lightBlue";
    door2.visible = false;

    block = createSprite(windowWidth/2, windowHeight/2, 50,50);
    block.visible = false;

    endDoor = createSprite(100, windowHeight - (windowHeight - 200));
    endDoor.visible = false;
    endDoor.shapeColor = "lightGreen";

    wall7 = createSprite(windowWidth/2, windowHeight/2 + 50, 200,20);
    wall7.visible = false;
    wall8 = createSprite(windowWidth/2 - 400, windowHeight/2 + 50, 400,20);
    wall8.visible = false;
    wall9 = createSprite(windowWidth/2 + 350, windowHeight - 150 + 50, 20,150);
    wall9.visible = false;
    wall10 = createSprite(windowWidth/2 + 250, windowHeight - 200 + 50, 20,200);
    wall10.visible = false;
    wall11 = createSprite(windowWidth/2 + 400, windowHeight - 250, 20,50)
    wall11.visible = false;
    

    //overall levels : 
    capSeller = createSprite(windowWidth/2, windowHeight/2,50,50);
    capSeller.visible = false;
    capSeller.addImage("seller", capSellerR);
    capSeller.scale = 0.10;

    back2Button = createButton("BACK");
    back2Button.position(windowWidth/2,(windowHeight/2) + 100);
    back2Button.hide();

        //caps : 
        
        

        //borders : 
        border1 = createSprite(windowWidth - 50, (windowHeight/2) + 50, 20,windowHeight - 200);
        border1.visible = false;
        border2 = createSprite(windowWidth - (windowWidth - 50), (windowHeight/2) + 50, 20,windowHeight - 200);
        border2.visible = false;
        border3 = createSprite(windowWidth/2, windowHeight - 50,windowWidth - 80,20);
        border3.visible = false;
        border4 = createSprite(windowWidth/2, windowHeight - (windowHeight - 150), windowWidth - 80,20);
        border4.visible = false;

        //boxes : 
        redBox = createSprite(windowWidth/4, windowHeight - 100,20,20);
        redBox.visible = false;
        redBox.addImage("red", redBoxIMG);
        redBox.scale = 0.3;
        redBox.setCollider("rectangle",100,100,400,400);
        redBox.visible = false;

        blueBox = createSprite(windowWidth/2 + (windowWidth/4), windowHeight - 105,20,20);
        blueBox.visible = false;
        blueBox.addImage("blue", blueBoxIMG);
        blueBox.scale = 0.3;
        blueBox.setCollider("rectangle",100,100,400,400);
        blueBox.visible = false;
    
        
    
}

function draw(){
    
    background("black");
    
    
    monkey1.velocityX = 0;
    monkey1.velocityY = 0;

    monkey2.velocityX = 0;
    monkey2.velocityY = 0;

    monkey3.velocityX = 0;
    monkey3.velocityY = 0;

    capSeller.velocityX = 0;
    capSeller.velocityY = 0;
 
    //sounds 

    if(foot1 === "yes"){
        footStep.play();
        foot1 = "no";
    }

    if(click1 === "yes"){
        click.play();
        click1 = "no";
    }
    if(explosion1 === "yes"){
        explosion.play();
        explosion1 = "no";
    }
    if(money1 === "yes"){
        money.play();
        money1 = "no";
    }
    if(drop1 === "yes"){
        drop.play();
        drop1 = "no";
    }
    if(box1 === "yes"){
        box.play();
        box1 = "no";
    }
    if(WIN1 === "yes"){
        WIN.play();
        WIN1 = "no";
    }

    if(gameState !== "LEVELS"){
        fill("white");
        textSize(20);
        text("MONEY : $" + moneyCount, 50,50);
        text("CAPS : " + capCount, 250,50);
      }
    
    if(gameState === "0"){
        drawSprites();
        monkeyBody.visible = true;

        textSize(70);
        fill("black");
        text("SPACE EXPEDITION", 545,250);
        textSize(20);
        text("One small step for man, a giant leap for mankind", 650,300);

        shopButton.position(windowWidth - 150,350);
        
        shopButton.mousePressed(function(){
            click1 = "yes";
            if(capCount >= 6){
            click1 = "yes";
            gameState = "SHOP";

        }else{
            alert("Earn Caps and complete LV 2 first to unlock the SHOP!");
        }
        });

        

        levelsButton.position(windowWidth - 160,420);
        levelsButton.mousePressed(function(){
            click1 = "yes";
            gameState = "LEVELS";

        });

        howToPlayButton.position(windowWidth - 190,500);
        howToPlayButton.mousePressed(function(){
            click1 = "yes";
            gameState = "H2P?";

        });
    }else{
    hide();
    }

    if(gameState === "LEVELS"){
        
        if(levelCount === 5){
            fill("white");
            textSize(20);
            text("Gravity on Mars is 3.711m/s^2, compared to Earth's gravity which is 9.807m/s^2", windowWidth/2 - 100, windowHeight/2 - 150);
        
        }
        if(levelCount === 2){
            monkey.visible = true;
            monkey.scale = 0.2
            fill("white");
            textSize(20);
            text("MONKEY FACT!! : ", monkey.x + 80, monkey.y - 20);
            textSize(18);
            text("Some monkeys have a 'prehensile tail' which \nis like a second hand.", monkey.x + 80, monkey.y + 15);
        }else if(levelCount === 4){
            monkey.visible = true;
            monkey.scale = 0.2
            fill("white");
            textSize(20);
            text("MONKEY FACT!! : ", monkey.x + 80, monkey.y - 20);
            textSize(18);
            text("A group of Monkeys are caled a 'troop', \n'tribe' or a 'mission'.", monkey.x + 80, monkey.y + 15);
        }else if(levelCount === 5){
            monkey.visible = true;
            monkey.scale = 0.2
            fill("white");
            textSize(20);
            text("MONKEY FACT!! : ", monkey.x + 80, monkey.y - 20);
            textSize(18);
            text("Monkeys have large brains when comparred \nto their body proportions; \nthis is why they're so intellegent", monkey.x + 80, monkey.y + 15);
        }else{
            monkey.visible = false;
        }

        if(rocket === "1"
        && shooter === "1"){
            fill("white");
            stroke("white");
            strokeWeight(5);
            for(var i = windowWidth - (windowWidth - 200); i < windowWidth/2; i = i + 20){
                line(i,windowHeight/2,i+10,windowHeight/2);
            }
        }

        

        if(levelCount === 5){
            
            fill("white");
            stroke("white");
            strokeWeight(5);
            for(var i = windowWidth/2;i < windowWidth - 200; i = i + 20){
                line(i,windowHeight/2,i+10,windowHeight/2);
            }
        }

        drawSprites();
        noStroke();

        bg1.visible = false;
        monkeyBody.visible = false;
        rocketim.visible = true;
        earth.visible = true;
        mars.visible = true;


        LV1Button.show();
        LV2Button.show();
        LV4Button.show();
        LV5Button.show();

        fill("white");
        textSize(40);
        text("LEVELS : will be unlocked once the required items are bought", (windowWidth/2) - 550,100);

        LV1Button.mousePressed(function(){
            click1 = "yes";
        if(levelCount === 1){
            gameState = "LV 1";
        }
        })
        LV2Button.mousePressed(function(){
            click1 = "yes";
        if(levelCount === 2){
            gameState = "LV 2";
        }
        })
        LV4Button.mousePressed(function(){
            click1 = "yes";
        if(levelCount === 4
        && rocket === "1"
        && shooter === "1"){
            gameState = "LV 4";
        }
        })
        LV5Button.mousePressed(function(){
            click1 = "yes";
        if(levelCount === 5){
            gameState = "LV 5";
        }
        })

        backButton.show();
        backButton.mousePressed(function(){
            click1 = "yes";
            gameState = "0";
            backButton.hide();
            show();
        });
    }else{
        bg1.visible = true;
        earth.visible = false;
        mars.visible = false;
        rocketim.visible = false;
        LV5Button.hide();
        LV4Button.hide();
        LV3Button.hide();
        LV2Button.hide();
        LV1Button.hide();
        monkey.visible = false;

    }

    if(gameState === "SHOP"){
        drawSprites();
        rocketShip.visible = true;
        cap1.visible = true;
        shooter1.visible = true;

        textSize(100);
        fill("white");
        text("SHOP!!",700,130)
        textSize(30);
        fill("black");
        text("$3,000", 900,250);
        text("$5,000",900,500);
        text("$10,000",630,500);

        buyButton.show();
        buyButton2.show();
        sellButton.show();

        buyButton.mousePressed(function(){
            money1 = "yes";
        if(moneyCount > 1000){
            rocket = "1";
            moneyCount = moneyCount - 10000;
        }
        })
        buyButton2.mousePressed(function(){
            money1 = "yes";
        if(moneyCount > 500){
            shooter = "1";
            moneyCount = moneyCount - 5000;
        }
        })
        sellButton.mousePressed(function(){
            money1 = "yes";
        if(capCount >= 1){
            moneyCount = moneyCount + 3000;
            capCount = capCount - 1;
        }
        })

        backButton.show();
        backButton.mousePressed(function(){
            click1 = "yes";
            gameState = "0";
            backButton.hide();
            show();
        });
    }else{
        rocketShip.visible = false;
        buyButton.hide();
        buyButton2.hide();
        sellButton.hide();
        shooter1.visible = false;
        cap1.visible = false;
    }

    if(gameState === "H2P?"){
        drawSprites();
        monkeyBody.visible = true;

        textSize(70);
        fill("black");
        text("HOW TO PLAY?",550,250);

        textSize(20);
        fill("grey");
        text("> You are the Cap Seller who wants to become an astronaut! \n" 
        + "> These pesky monkeys have stolen your caps, so you have to get them back. \n"
        + "> It just so happens that the monkeys will follow everything you do! \n" 
        + "> Use the 'up, down, left, right' arrows to move. Once you collect the hat, use \n"
        + "   'space bar' to drop the hat in the box. \n" 
        + "> Make the monkeys pick up the caps and drop them off in their respective boxes. \n"
        + "> Earn money by selling your caps in the SHOP and buy a shooter and rocket ship \n"
        + "   to advance to space! + learn space facts along the way!",495,300);

        backButton.show();
        backButton.mousePressed(function(){
            click1 = "yes";
            gameState = "0";
            backButton.hide();
            show();
        });
    }

    //transition : 

    
    
    if(gameState === "transition"){
        if(levelCount != "MOUNTAIN"){
            
        }
        textSize(50);
        fill("white");
        text("WELL DONE! This level is completed!!", (windowWidth/2) - 500, windowHeight/2);
        back2Button.show();
        back2Button.mousePressed(function(){
            click1 = "yes";
            gameState = "LEVELS";
            back2Button.hide();
            if(levelCount === 2){
                monkey1.x = 200;
                monkey1.y = 200;
                monkey2.x = 400;
                monkey2.y = 200;
            }
            if(levelCount === 5){
                reset = "bg story";
                //monkeys
            }
            
        });
        

    }else{
        back2Button.hide();
    }

    //LEVELS : 

    if(gameState === "LV 1"){
        textSize(20);
        text("GET ALL CAPS TO GO TO NEXT LEVEL!",windowWidth/2, windowHeight - (windowHeight - 100));
        backButton.hide();
        bg1.visible = false;
        monkeyBody.visible = false;

        border1.visible = true;
        border2.visible = true;
        border3.visible = true;
        border4.visible = true;

        redBox.visible = true;
        blueBox.visible = true;

        capSeller.visible = true;
        blueCap1.visible = true;
        redCap1.visible = true;
        monkey1.visible = true;
        monkey2.visible = true;

        wall1.visible = true;
        wall2.visible = true;

        

        redCap1.collide(border1);
        redCap1.collide(border2);
        redCap1.collide(border3);
        redCap1.collide(border4);
        redCap1.collide(wall1);
        redCap1.collide(wall2);

        blueCap1.collide(border1);
        blueCap1.collide(border2);
        blueCap1.collide(border3);
        blueCap1.collide(border4);
        blueCap1.collide(wall1);
        blueCap1.collide(wall2);

        monkey1.collide(border1);
        monkey1.collide(border2);
        monkey1.collide(border3);
        monkey1.collide(border4);
        monkey1.collide(monkey2);
        monkey1.collide(capSeller);
        monkey1.collide(redBox);
        monkey1.collide(blueBox);
        monkey1.collide(wall1);
        monkey1.collide(wall2);

        monkey2.collide(border1);
        monkey2.collide(border2);
        monkey2.collide(border3);
        monkey2.collide(border4);
        monkey2.collide(monkey1);
        monkey2.collide(capSeller);
        monkey2.collide(redBox);
        monkey2.collide(blueBox);
        monkey2.collide(wall1);
        monkey2.collide(wall2);

        capSeller.collide(border1);
        capSeller.collide(border2);
        capSeller.collide(border3);
        capSeller.collide(border4);
        capSeller.collide(monkey1);
        capSeller.collide(monkey2);
        capSeller.collide(redBox);
        capSeller.collide(blueBox);
        capSeller.collide(wall1);
        capSeller.collide(wall2);

        if(capCount === 2){
            WIN1 = "yes";
            gameState = "transition";
            levelCount = 2;
            reset = "2";
            earn = "+1";
        }

        if(keyDown("space")){
            
            if(monkey1Stat === "yes:red"){
                drop1 = "yes";
                redCap1.velocityY = +5;
                monkey1Stat = "fall:red";
            }
            if(monkey2Stat === "yes:red"){
                drop1 = "yes";
                redCap1.velocityY = +5;
                monkey2Stat = "fall:red";
            }
            if(monkey1Stat === "yes:blue"){
                drop1 = "yes";
                blueCap1.velocityY = +5;
                monkey1Stat = "fall:blue";
            }
            if(monkey2Stat === "yes:blue"){
                drop1 = "yes";
                blueCap1.velocityY = +5;
                monkey2Stat = "fall:blue";
            }
        }

        if(monkey1Stat === "fall:red"){
            if(redCap1.isTouching(redBox)){
                box1 = "yes";
                capCount = capCount+1;
                monkey1Stat = "no";
                redCap1.destroy();
            }
        }
        if(monkey2Stat === "fall:red"){
            if(redCap1.isTouching(redBox)){
                box1 = "yes";
                capCount = capCount+1;
                monkey2Stat = "no";
                redCap1.destroy();
            }
        }
        if(monkey1Stat === "fall:blue"){
            if(blueCap1.isTouching(blueBox)){
                box1 = "yes";
                capCount = capCount+1;
                monkey1Stat = "no";
                blueCap1.destroy();
            }
        }
        if(monkey2Stat === "fall:blue"){
            if(blueCap1.isTouching(blueBox)){
                box1 = "yes";
                capCount = capCount+1;
                monkey2Stat = "no";
                blueCap1.destroy();
            }
        }

        if(keyDown(UP_ARROW)){
            foot1 = "yes";
            monkey1.velocityY =  - 5;
            monkey2.velocityY =  - 5;
            capSeller.velocityY =  - 5;
        }
        if(keyDown(DOWN_ARROW)){
            foot1 = "yes";
            monkey1.velocityY =  + 5;
            monkey2.velocityY =  + 5;
            capSeller.velocityY =  + 5;
        }
        if(keyDown(LEFT_ARROW)){
            foot1 = "yes";
            monkey1.velocityX =  - 5;
            monkey2.velocityX =  - 5;
            capSeller.velocityX =  - 5;

        }
        if(keyDown(RIGHT_ARROW)){
            foot1 = "yes";
            monkey1.velocityX =  + 5;
            monkey2.velocityX =  + 5;
            capSeller.velocityX =  + 5;

        }

        if(monkey1.isTouching(redCap1)
        && monkey1Stat === "no"){
            drop1 = "yes";
          monkey1Stat = "yes:red";
        }
        if(monkey2.isTouching(redCap1)
        && monkey2Stat === "no"){
            drop1 = "yes";
          monkey2Stat = "yes:red";
        }
        if(monkey1.isTouching(blueCap1)
        && monkey1Stat === "no"){
            drop1 = "yes";
          monkey1Stat = "yes:blue";
        }
        if(monkey2.isTouching(blueCap1)
        && monkey2Stat === "no"){
            drop1 = "yes";
          monkey2Stat = "yes:blue";
        }

        if(monkey1Stat === "yes:red"){
            redCap1.x = monkey1.x;
            redCap1.y = monkey1.y - 40;
        }
        if(monkey1Stat === "yes:blue"){
            blueCap1.x = monkey1.x;
            blueCap1.y = monkey1.y - 40;
        }
        if(monkey2Stat === "yes:red"){
            redCap1.x = monkey2.x;
            redCap1.y = monkey2.y - 40;
        }
        if(monkey2Stat === "yes:blue"){
            blueCap1.x = monkey2.x;
            blueCap1.y = monkey2.y - 40;
        }



        drawSprites();
       
    }else{
        border1.visible = false;
        border2.visible = false;
        border3.visible = false;
        border4.visible = false;

        redBox.visible = false;
        blueBox.visible = false;

        capSeller.visible = false;
        blueCap1.visible = false;
        redCap1.visible = false;
        monkey1.visible = false;
        monkey2.visible = false;

        wall1.visible = false;
        wall2.visible = false;
    }

    if(gameState === "LV 2"){
        var capCount1 = 0;
        textSize(20);
        text("GET ALL CAPS TO GO TO NEXT LEVEL!",windowWidth/2, windowHeight - (windowHeight - 100));
        backButton.hide();

        resetButton.show();
        resetButton.mousePressed(function(){
            click1 = "yes";
            reset = "2";
        });

        if(reset === "2"){
            redCap2.destroy();
            redCap3.destroy();
            blueCap2.destroy();
            blueCap3.destroy();

            monkey1Stat = "no";
            monke2Stat = "no";
            monkey3Stat = "no";

            capCount = 2;

            monkey1.x = 200;
            monkey2.x = 400;
            monkey3.x = 600;

            monkey1.y = 200;
            monkey2.y = 200;
            monkey3.y = 200;

            redCap2 = createSprite(300,200,50,50);
            redCap2.visible = false;
            redCap2.addImage("red", redCapIMG);
            redCap2.scale = 0.15;
            redCap3 = createSprite(1150,200,50,50);
            redCap3.visible = false;
            redCap3.addImage("red", redCapIMG);
            redCap3.scale = 0.15;
            
            
            blueCap2 = createSprite(400,300,50,50);
            blueCap2.visible = false;
            blueCap2.addImage("blue", blueCapIMG);
            blueCap2.scale = 0.15;
            blueCap3 = createSprite(600,400,50,50);
            blueCap3.visible = false;
            blueCap3.addImage("blue", blueCapIMG);
            blueCap3.scale = 0.15;

            reset = "0";
        }
        bg1.visible = false;
        monkeyBody.visible = false;

        border1.visible = true;
        border2.visible = true;
        border3.visible = true;
        border4.visible = true;

        wall3.visible = true;
        wall4.visible = true;
        wall5.visible = true;
        wall6.visible = true;

        redBox.visible = true;
        blueBox.visible = true;

        capSeller.visible = true;
        blueCap3.visible = true;
        redCap3.visible = true;
        redCap2.visible = true;
        blueCap2.visible = true;
        monkey1.visible = true;
        monkey2.visible = true;
        monkey3.visible = true;

        redCap3.collide(border1);
        redCap2.collide(border2);
        redCap3.collide(border3);
        redCap3.collide(border4);
        redCap3.collide(wall3);
        redCap3.collide(wall4);
        redCap3.collide(wall5);
        redCap3.collide(wall6);

        blueCap3.collide(border1);
        blueCap3.collide(border2);
        blueCap3.collide(border3);
        blueCap3.collide(border4);
        blueCap3.collide(wall3);
        blueCap3.collide(wall4);
        blueCap3.collide(wall5);
        blueCap3.collide(wall6);

        redCap2.collide(border1);
        redCap2.collide(border2);
        redCap2.collide(border3);
        redCap2.collide(border4);
        redCap2.collide(wall3);
        redCap2.collide(wall4);
        redCap2.collide(wall5);
        redCap2.collide(wall6);

        blueCap2.collide(border1);
        blueCap2.collide(border2);
        blueCap2.collide(border3);
        blueCap2.collide(border4);
        blueCap2.collide(wall3);
        blueCap2.collide(wall4);
        blueCap2.collide(wall5);
        blueCap2.collide(wall6);

        monkey1.collide(border1);
        monkey1.collide(border2);
        monkey1.collide(border3);
        monkey1.collide(border4);
        monkey1.collide(wall3);
        monkey1.collide(wall4);
        monkey1.collide(wall5);
        monkey1.collide(wall6);
        monkey1.collide(monkey2);
        monkey1.collide(monkey3);
        monkey1.collide(capSeller);
        monkey1.collide(redBox);
        monkey1.collide(blueBox);

        monkey2.collide(border1);
        monkey2.collide(border2);
        monkey2.collide(border3);
        monkey2.collide(border4);
        monkey2.collide(wall3);
        monkey2.collide(wall4);
        monkey2.collide(wall5);
        monkey2.collide(wall6);
        monkey2.collide(monkey1);
        monkey2.collide(monkey3);
        monkey2.collide(capSeller);
        monkey2.collide(redBox);
        monkey2.collide(blueBox);

        monkey3.collide(border1);
        monkey3.collide(border2);
        monkey3.collide(border3);
        monkey3.collide(border4);
        monkey3.collide(wall3);
        monkey3.collide(wall4);
        monkey3.collide(wall5);
        monkey3.collide(wall6);
        monkey3.collide(monkey2);
        monkey3.collide(monkey1);
        monkey3.collide(capSeller);
        monkey3.collide(redBox);
        monkey3.collide(blueBox);

        capSeller.collide(border1);
        capSeller.collide(border2);
        capSeller.collide(border3);
        capSeller.collide(border4);
        capSeller.collide(wall3);
        capSeller.collide(wall4);
        capSeller.collide(wall5);
        capSeller.collide(wall6);
        capSeller.collide(monkey1);
        capSeller.collide(monkey2);
        capSeller.collide(monkey3);
        capSeller.collide(redBox);
        capSeller.collide(blueBox);

        if(capCount === 6){
            WIN1 = "yes";
            gameState = "transition";
            levelCount = 4;
        }

        if(keyDown("space")){
            if(monkey1Stat === "yes:red"){
                drop1 = "yes";
                redCap3.velocityY = +5;
                monkey1Stat = "fall:red";
            }
            if(monkey1Stat === "yes:red2"){
                drop1 = "yes";
                redCap2.velocityY = +5;
                monkey1Stat = "fall:red2";
            }
            if(monkey2Stat === "yes:red"){
                drop1 = "yes";
                redCap3.velocityY = +5;
                monkey2Stat = "fall:red";
            }
            if(monkey2Stat === "yes:red2"){
                drop1 = "yes";
                redCap2.velocityY = +5;
                monkey2Stat = "fall:red2";
            }
            if(monkey3Stat === "yes:red"){
                drop1 = "yes";
                redCap3.velocityY = +5;
                monkey3Stat = "fall:red";
            }
            if(monkey3Stat === "yes:red2"){
                drop1 = "yes";
                redCap2.velocityY = +5;
                monkey3Stat = "fall:red2";
            }
            if(monkey1Stat === "yes:blue"){
                drop1 = "yes";
                blueCap3.velocityY = +5;
                monkey1Stat = "fall:blue";
            }
            if(monkey1Stat === "yes:blue2"){
                drop1 = "yes";
                blueCap2.velocityY = +5;
                monkey1Stat = "fall:blue2";
            }
            if(monkey2Stat === "yes:blue"){
                drop1 = "yes";
                blueCap3.velocityY = +5;
                monkey2Stat = "fall:blue";
            }
            if(monkey2Stat === "yes:blue2"){
                drop1 = "yes";
                blueCap2.velocityY = +5;
                monkey2Stat = "fall:blue2";
            }
            if(monkey3Stat === "yes:blue"){
                drop1 = "yes";
                blueCap3.velocityY = +5;
                monkey3Stat = "fall:blue";
            }
            if(monkey3Stat === "yes:blue2"){
                drop1 = "yes";
                blueCap2.velocityY = +5;
                monkey3Stat = "fall:blue2";
            }
        }

        if(monkey1Stat === "fall:red"){
            if(redCap3.isTouching(redBox)){
                box1 = "yes";
                capCount = capCount+1;
                monkey1Stat = "no";
                redCap3.destroy();
            }
        }
        if(monkey2Stat === "fall:red"){
            if(redCap3.isTouching(redBox)){
                box1 = "yes";
                capCount = capCount+1;

                monkey2Stat = "no";
                redCap3.destroy();
            }
        }
        if(monkey3Stat === "fall:red"){
            if(redCap3.isTouching(redBox)){
                box1 = "yes";
                capCount = capCount+1;
                monkey3Stat = "no";
                redCap3.destroy();
            }
        }
        if(monkey1Stat === "fall:blue"){
            if(blueCap3.isTouching(blueBox)){
                box1 = "yes";
                capCount = capCount+1;
                monkey1Stat = "no";
                blueCap3.destroy();
            }
        }
        if(monkey2Stat === "fall:blue"){
            if(blueCap3.isTouching(blueBox)){
                box1 = "yes";
                capCount = capCount+1;
                monkey2Stat = "no";
                blueCap3.destroy();
            }
        }
        if(monkey3Stat === "fall:blue"){
            if(blueCap3.isTouching(blueBox)){
                box1 = "yes";
                capCount = capCount+1;
                monkey3Stat = "no";
                blueCap3.destroy();
            }
        }
       
        if(monkey1Stat === "fall:red2"){
            if(redCap2.isTouching(redBox)){
                box1 = "yes";
                monkey1Stat = "no";
                capCount = capCount+1;
                redCap2.destroy();
            }
        }
        if(monkey2Stat === "fall:red2"){
            if(redCap2.isTouching(redBox)){
                box1 = "yes";
                capCount = capCount+1;

                monkey2Stat = "no";
                redCap2.destroy();
            }
        }
        if(monkey3Stat === "fall:red2"){
            if(redCap2.isTouching(redBox)){
                box1 = "yes";
                capCount = capCount+1;
                monkey3Stat = "no";
                redCap2.destroy();
            }
        }
        if(monkey1Stat === "fall:blue2"){
            if(blueCap2.isTouching(blueBox)){
                box1 = "yes";
                capCount = capCount+1;
                monkey1Stat = "no";
                blueCap2.destroy();
            }
        }
        if(monkey2Stat === "fall:blue2"){
            if(blueCap2.isTouching(blueBox)){
                box1 = "yes";
                capCount = capCount+1;
                monkey2Stat = "no";
                blueCap2.destroy();
            }
        }
        if(monkey3Stat === "fall:blue2"){
            if(blueCap2.isTouching(blueBox)){
                box1 = "yes";
                capCount = capCount+1;
                monkey3Stat = "no";
                blueCap2.destroy();
            }
        }

        if(keyDown(UP_ARROW)){
            foot1 = "yes";
            monkey1.velocityY =  - 5;
            monkey2.velocityY =  - 5;
            monkey3.velocityY =  - 5;
            capSeller.velocityY =  - 5;
        }
        if(keyDown(DOWN_ARROW)){
            foot1 = "yes";
            monkey1.velocityY =  + 5;
            monkey2.velocityY =  + 5;
            monkey3.velocityY =  + 5;
            capSeller.velocityY =  + 5;
        }
        if(keyDown(LEFT_ARROW)){
            foot1 = "yes";
            monkey1.velocityX =  - 5;
            monkey2.velocityX =  - 5;
            monkey3.velocityX =  - 5;
            capSeller.velocityX =  - 5;


        }
        if(keyDown(RIGHT_ARROW)){
            foot1 = "yes";
            monkey1.velocityX =  + 5;
            monkey2.velocityX =  + 5;
            monkey3.velocityX =  + 5;
            capSeller.velocityX =  + 5;

        }

        if(monkey1.isTouching(redCap3)
        && monkey1Stat === "no"){
            drop1 = "yes";
          monkey1Stat = "yes:red";
        }
        if(monkey2.isTouching(redCap3)
        && monkey2Stat === "no"){
            drop1 = "yes";
          monkey2Stat = "yes:red";
        }
        if(monkey1.isTouching(redCap2)
        && monkey1Stat === "no"){
            drop1 = "yes";
          monkey1Stat = "yes:red2";
        }
        if(monkey2.isTouching(redCap2)
        && monkey2Stat === "no"){
            drop1 = "yes";
          monkey2Stat = "yes:red2";
        }

        if(monkey1.isTouching(blueCap3)
        && monkey1Stat === "no"){
            drop1 = "yes";
          monkey1Stat = "yes:blue";
        }
        if(monkey2.isTouching(blueCap3)
        && monkey2Stat === "no"){
            drop1 = "yes";
          monkey2Stat = "yes:blue";
        }
        if(monkey1.isTouching(blueCap2)
        && monkey1Stat === "no"){
            drop1 = "yes";
          monkey1Stat = "yes:blue2";
        }
        if(monkey2.isTouching(blueCap2)
        && monkey2Stat === "no"){
            drop1 = "yes";
          monkey2Stat = "yes:blue2";
        }
        if(monkey3.isTouching(redCap3)
        && monkey3Stat === "no"){
            drop1 = "yes";
            monkey3Stat = "yes:red";
        }
        if(monkey3.isTouching(redCap2)
        && monkey3Stat === "no"){
            drop1 = "yes";
            monkey3Stat = "yes:red2";
        }
        if(monkey3.isTouching(blueCap3)
        && monkey3Stat === "no"){
            drop1 = "yes";
            monkey3Stat = "yes:blue";
        }
        if(monkey3.isTouching(blueCap2)
        && monkey3Stat === "no"){
            drop1 = "yes";
            monkey3Stat = "yes:blue2";
        }

        if(monkey1Stat === "yes:red"){
            redCap3.x = monkey1.x;
            redCap3.y = monkey1.y - 40;
        }
        if(monkey1Stat === "yes:blue"){
            blueCap3.x = monkey1.x;
            blueCap3.y = monkey1.y - 40;
        }
        if(monkey1Stat === "yes:red2"){
            redCap2.x = monkey1.x;
            redCap2.y = monkey1.y - 40;
        }
        if(monkey1Stat === "yes:blue2"){
            blueCap2.x = monkey1.x;
            blueCap2.y = monkey1.y - 40;
        }
        
        if(monkey2Stat === "yes:red"){
            redCap3.x = monkey2.x;
            redCap3.y = monkey2.y - 40;
        }
        if(monkey2Stat === "yes:blue"){
            blueCap3.x = monkey2.x;
            blueCap3.y = monkey2.y - 40;
        }
        if(monkey2Stat === "yes:red2"){
            redCap2.x = monkey2.x;
            redCap2.y = monkey2.y - 40;
        }
        if(monkey2Stat === "yes:blue2"){
            blueCap2.x = monkey2.x;
            blueCap2.y = monkey2.y - 40;
        }

        if(monkey3Stat === "yes:red"){
            redCap3.x = monkey3.x;
            redCap3.y = monkey3.y - 40;
        }
        if(monkey3Stat === "yes:blue"){
            blueCap3.x = monkey3.x;
            blueCap3.y = monkey3.y - 40;
        }
        if(monkey3Stat === "yes:red2"){
            redCap2.x = monkey3.x;
            redCap2.y = monkey3.y - 40;
        }
        if(monkey3Stat === "yes:blue2"){
            blueCap2.x = monkey3.x;
            blueCap2.y = monkey3.y - 40;
        }




        drawSprites();
       
    }else{
        border1.visible = false;
        border2.visible = false;
        border3.visible = false;
        border4.visible = false;
        wall3.visible = false;
        wall4.visible = false;
        wall5.visible = false;
        wall6.visible = false;

        redBox.visible = false;
        blueBox.visible = false;

        capSeller.visible = false;
        blueCap3.visible = false;
        redCap3.visible = false;
        redCap2.visible = false;
        blueCap2.visible = false;
        monkey1.visible = false;
        monkey2.visible = false;
        monkey3.visible = false;

        resetButton.hide();
    } 

    if(gameState === "LV 4"){
        camera.position.y = rocketBody.y;
        bg1.visible = false;
        
        
        
        rocketBody.y = mouseY
        rocketBody.visible = true;
        
        if(state === "play"){
            star.visible = true;
        
            star.velocityX = -2;

            if(star.x < 0){
                star.x = windowWidth/2;
            }
            if (keyDown("space")) {
                drop1 = "yes";
                createBullet();
            }
            
            if (World.frameCount % 150 == 0) {
                astroid();
            }
            if(buletsGroup.isTouching(astroidGroup)){
                explosion1 = "yes";
                astroidGroup.destroyEach();
                score = score + 1;
                buletsGroup.destroyEach();
            }
            if(astroidGroup.isTouching(rocketBody)){
                explosion1 = "yes";
                astroidGroup.destroyEach();
                buletsGroup.destroyEach();
                state = "end";
            }
            if(score >= 10){
                astroidGroup.destroyEach();
                buletsGroup.destroyEach();
                state = "finish";
            }
        }

        if(state === "finish"){
            star.velocityX = 0;
            WIN1 = "yes";
            rocketBody.velocityX = 5;
            rocketBody.lifetime = 1000;

            
            if(rocketBody.x > windowWidth){
                gameState = "transition";
                levelCount = 5;
            }
        }

        if(state === "end"){
            star.velocityX = 0;
            explosion1 = "yes";
            
            score = 0;
            if(keyDown(UP_ARROW)){
                state = "play";
            }
        }
        
        drawSprites();
        fill("white");
        textSize(20);
        text("SCORE : " + score, 450,rocketBody.y - 100);
        if(state === "end"){
            text("retry? Click up arrow", windowWidth/2, windowHeight/2);
        }
        if(state === "finish"){
            fill("white");
            textSize(40);
            text("There have only been 18 successfull missions to Mars...", windowWidth/2 - 500, windowHeight/2);
            

        }
    }else{

        camera.y = windowHeight/2;
        rocketBody.visible = false;
        star.visible = false;
       
    }

    if(gameState === "LV 5"){
        
        backButton.hide();
        resetButton.mousePressed(function(){
            click1 = "yes";
            reset = "5";
        });

        if(reset === "bg story"){
            capSeller.visible = false;
            monkey1.visible = false;
            monkey2.visible = false;
            monkey3.visible = false;
            wall7.visible = false;
            wall8.visible = false;
            wall9.visible = false;
            wall10.visible = false;
            wall11.visible = false;
            sensor1.visible = false;
            sensor2.visible = false;
            sensor3.visible = false;
            door1.visible = false;
            door2.visible = false;
            endDoor.visible = false;
            block.visible = false;

            alien.visible = true;
            fill("white");
            textSize(40);
            text("The alien has captured \nand infected the \nmonkeys!", 70,windowHeight/2);
            text("Now, the monkey's \nmovements will \nbe opposite to \nthat of the capSeller.", windowWidth - 400, windowHeight/2);
            text("HELP THEM ESCAPE!", windowWidth/2 - 180, windowHeight/2 - 220);

            playButton.show();
            playButton.mousePressed(function(){
                click1 = "yes";
                reset = "5";
            });

        }else{
            resetButton.show();
            playButton.hide();
            wall7.visible = true;
            wall8.visible = true;
            wall9.visible = true;
            wall10.visible = true;
            wall11.visible = true;
            sensor1.visible = true;
            sensor2.visible = true;
            sensor3.visible = true;
            door1.visible = true;
            door2.visible = true;
            endDoor.visible = true;
            capSeller.visible = true;
            monkey1.visible = true;
            monkey3.visible = true;
            border1.visible = true;
            border2.visible = true;
            border3.visible = true;
            border4.visible = true;
            alien.visible = false;
            block.visible = true;
            
           
            
    textSize(20);
    text("*Notice the difference in gravity here and on Earth", windowWidth/2 - 300, 80);
        }

        if(reset === "5"){
            monkey1.x = 200;
            
            monkey3.x = 600;

            monkey1.y = 200;
            
            monkey3.y = 200;

            capSeller.x = 200;
            capSeller.y = 500;

            block.x = windowWidth/2;
            block.y = windowHeight/2;

            reset = "0";
        }
        bg1.visible = false;
        monkeyBody.visible = false;

        block.collide(border1);
        block.collide(border2);
        block.collide(border3);
        block.collide(border4);
        block.collide(wall10);
        block.collide(wall11);
        block.collide(wall7);
        block.collide(wall8);
        block.collide(wall9);

        door1.collide(border1);
        door1.collide(border2);
        door1.collide(border3);
        door1.collide(border4);
        door1.collide(wall10);
        door1.collide(wall7);
        door1.collide(wall8);
        door1.collide(wall9);
        door2.collide(border1);
        door2.collide(border2);
        door2.collide(border3);
        door2.collide(border4);

        block.velocityY = +9;


        monkey1.collide(border1);
        monkey1.collide(border2);
        monkey1.collide(border3);
        monkey1.collide(border4);
        monkey1.collide(monkey3);
        monkey1.collide(capSeller);
        monkey1.collide(wall7);
        monkey1.collide(wall9);
        monkey1.collide(wall8);
        monkey1.collide(wall10);
        monkey1.collide(wall11);
        monkey1.collide(door1);
        monkey1.collide(door2);
        monkey1.displace(block);
        monkey1.collide(endDoor);



        monkey3.collide(border1);
        monkey3.collide(border2);
        monkey3.collide(border3);
        monkey3.collide(border4);
        monkey3.collide(monkey1);
        monkey3.collide(capSeller);
        monkey3.collide(wall7);
        monkey3.collide(wall9);
        monkey3.collide(wall8);
        monkey3.collide(wall10);
        monkey3.collide(wall11);
        monkey3.collide(door1);
        monkey3.collide(door2);
        monkey3.displace(block);
        monkey3.collide(endDoor);

        capSeller.collide(border1);
        capSeller.collide(border2);
        capSeller.collide(border3);
        capSeller.collide(border4);
        capSeller.collide(monkey1);
        capSeller.collide(monkey3);
        capSeller.collide(wall7);
        capSeller.collide(wall9);
        capSeller.collide(wall8);
        capSeller.collide(wall10);
        capSeller.collide(wall11);
        capSeller.collide(door1);
        capSeller.collide(door2);
        capSeller.displace(block);
        capSeller.collide(endDoor);

        if(keyDown(UP_ARROW)){
            foot1 = "yes";
            monkey1.velocityY =  + 3;
            monkey3.velocityY =  + 3;
            capSeller.velocityY =  - 8;
        }
        if(keyDown(DOWN_ARROW)){
            foot1 = "yes";
            monkey1.velocityY =  - 8;
            monkey3.velocityY =  - 8;
            capSeller.velocityY = + 3;
        }
        if(keyDown(LEFT_ARROW)){
            foot1 = "yes";
            monkey1.velocityX =  + 5;
            monkey3.velocityX =  + 5;
            capSeller.velocityX =  - 5;


        }
        if(keyDown(RIGHT_ARROW)){
            foot1 = "yes";
            monkey1.velocityX =  - 5;
            monkey3.velocityX =  - 5;
            capSeller.velocityX =  + 5;

        }

        if(monkey1.isTouching(sensor1)
            ||monkey3.isTouching(sensor1)
            ||capSeller.isTouching(sensor1)
            ||block.isTouching(sensor1)){
                drop1 = "yes";
                door1.velocityX = -10;
        }else{
            door1.velocityX = +10;
        }

        if(monkey1.isTouching(sensor2)
            ||monkey3.isTouching(sensor2)
            ||capSeller.isTouching(sensor2)
            ||block.isTouching(sensor2)){
                drop1 = "yes";
                s1 = "yes"
        }else{
            s1 = "no";
        }
        if(monkey1.isTouching(sensor3)
            ||monkey3.isTouching(sensor3)
            ||capSeller.isTouching(sensor3)
            ||block.isTouching(sensor3)){
                drop1 = "yes";
                s2 = "yes"
        }else{
            s2 = "no";
        }
        
        if(s1 === "yes" && s2 === "yes"){
            drop1 = "yes";
            door2.velocityY = 10;
        }else{
            door2.velocityY = -10;
        }
        
        
        

        if(monkey1.isTouching(endDoor)
        &&monkey3.isTouching(endDoor)){
            WIN1 = "yes";
            gameState = "done";
        }
        
        drawSprites();
        textSize(20);
        text("ESCAPE DOOR!!\nGet the two monkeys here", endDoor.x + 50, endDoor.y);

       
    }else{
        border1.visible = false;
        border2.visible = false;
        border3.visible = false;
        border4.visible = false;
        

        capSeller.visible = false;
        monkey1.visible = false;
        monkey2.visible = false;
        monkey3.visible = false;

        resetButton.hide();
    } 

    if(gameState === "done"){
        textSize(50);
        fill("white");
        text("CONGRATULATIONS! END OF GAME", windowWidth/2 - 500, windowHeight/2);
    }
}

async function hide(){
    shopButton.hide();
    levelsButton.hide();
    howToPlayButton.hide();
}
  
async function show(){
    shopButton.show();
    levelsButton.show();
    howToPlayButton.show();
}

async function astroid() {
    var obstacle = createSprite(windowWidth,Math.round(random(windowHeight - 20, windowHeight - (windowHeight - 20))), 10, 10);
    obstacle.addImage("o",astroidIMG);
    obstacle.velocityX = -5;
    obstacle.lifetime = 1050;
    obstacle.scale = 0.5;
    
    
    astroidGroup.add(obstacle);
    // return obstacle;
  
  }
  
   async function createBullet() {
    var bulet= createSprite(100, 100, 60, 10);
    bulet.addImage("o",bulletIMG);
    bulet.x = 360;
    bulet.y=rocketBody.y;
    bulet.velocityX = 7;
    bulet.lifetime = 1000;
    bulet.scale = 0.3;
     
    buletsGroup.add(bulet);
    // return bulet;
     
  }