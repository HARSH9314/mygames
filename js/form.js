class Form {
    constructor()
    {
        this.title=createElement("h2")
        this.name=createInput("").attribute("placeholder","Name");
        this.greeting=createElement("h2");
        this.button=createButton("START");
        this.play=createButton("PLAY")
    }
    display()
    {

        this.play.hide();
        this.title.html("ARCHERY GAME 2D")
        this.title.position(displayWidth/2-50,0)
        
        this.name.position(displayWidth/2,displayHeight/2)
        this.button.position(displayWidth/2+50,displayHeight/2+30)
        
        this.button.mousePressed(()=>{
            this.name.hide();
            this.button.hide();
            var n=this.name.value();
            this.greeting.html(" welcome "+n);
            this.greeting.position(displayWidth/2,displayHeight/2)
            this.play.show();
            this.play.position(displayWidth/2,displayHeight/2+90)
        })
        this.play.mousePressed(()=>{
            game.play();
        })
    }
    hide()
    {
        this.button.hide();
        this.play.hide();
        this.name.hide();
        this.title.hide();
        this.greeting.hide();
        
    }

}