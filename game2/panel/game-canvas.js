class GameCanvas{

    constructor(x,y){
        this.dom = document.querySelector(".game-canvas");
        /** @typeof {CanvasRenderingContext2D} */
        this.ctx = this .dom.getContext("2d");
        this.dom.onclick = this.clickHandler.bind(this);
        
        this.boy = new Boy(100,100);
        
        this.gameover = false;
        this.pause = false;

    }
    
    run(){
        //일괄적으로, 주기적으로 update, draw
        if(this.pause)
            return;
        
        //초당 60프레임 화면을 다시 그리는 코드
        this.update();
        this.draw();
        
        console.log("time start");
        window.setTimeout(this.run.bind(this), 1000)
    }
    update(){
        this.boy.update();
    }
    draw(){
        this.boy.draw(this.ctx);
        
    }
    pause(){
        this.pause = true;

    }
    //Event Handlert--------------------------------------------
    clickHandler(e){
        this.boy.moveTo(e.x, e.y);
        this.boy.draw(this.ctx);

    }
}