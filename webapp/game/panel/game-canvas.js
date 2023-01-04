class GameCanvas{
    constructor(){
        this.dom = document.querySelector(".game-canvas");
        /** @typeof {CanvasRenderingContext2D} */
        this.ctx = this .dom.getContext("2d");
        this.boy = new Boy(100,100);
    
        this.dom.onclick = this.clickHandler.bind(this);
    }
     
    run(){
        this.update();
        this.draw();
    }

    update(){
        this.boy.update();
        //this.boy.move(2);

    }
    draw(){
        this.boy.draw(this.ctx);
    }
    pause(){
        this.pause = true;
    }
    //event handlers---------------------
    clickHandler(e){
        //this.pause = true;
        //this.boy.move(2);
        this.boy.moveTo(e.x,e.y);
        this.boy.draw(this.ctx);

    }


}
