class Game{
    
    constructor(){
        
    }
    start()
    {
        form =new Form()
        form.display();
    }
    play()
    {
        form.hide();
       
       
        target =createSprite(displayWidth/2,displayHeight/2-80,300,200);
        target.scale=0.5
        target.addImage(targetimg);

        block1=createSprite(displayWidth/2,displayHeight/2-80,250,250);
        block1.shapeColor="red";
        block1.visible=true;

        block2=createSprite(displayWidth/2,displayHeight/2-80,200,200);
        block2.shapeColor="white";
        block2.visible=true;
        
        block3=createSprite(displayWidth/2,displayHeight/2-80,150,150);
        block3.shapeColor="pink";
        block3.visible=true;

        block4=createSprite(displayWidth/2,displayHeight/2-80,100,100);
        block4.shapeColor="pink";
        block4.visible=true;
        
        block=createSprite(displayWidth/2,displayHeight/2-80,42,42);
        block.shapeColor="white";
        block.visible=true;
        
        bow=createSprite(displayWidth-70,300,500,10)
        bow.scale=1.5
        bow.addImage(bowImage);
       
        //if arrow touch block score= score+50 else if block2 touch s
        
        console.log("we are in play");
        drawSprites();
        

    }

    createArrow()
    {
    
        arrow=createSprite(displayWidth,300,30,30);
        arrow.addImage(arr);
        arrow.x=Math.round(random(displayWidth/2-50,displayWidth/2+100))
        arrow.scale=0.5
        arrow.y=Math.round(random(displayHeight/2-50,displayHeight/2+100))
        
        
    }
}
