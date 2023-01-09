class GameCanvas{
//사용자 입출력 담당
//책임을 전달
    constructor(){
        this.dom = document.querySelector(".game-canvas");
        this.dom.focus();
        /** @typeof {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        this.boy = new Boy(500,500);
        this.bg = new Background();
        
        this.gameover = false;
        this.pause = false;
        
        this.dom.onclick = this.clickHandler.bind(this);
        this.dom.onkeydown = this.keyDownHandler.bind(this);
    }
    
    run(){
        //일괄적으로, 주기적으로 update, draw
        if(this.pause)
            return;
        
        //초당 60프레임 화면을 다시 그리는 코드
        this.update();
        this.draw();
        
        console.log("time start");
        window.setTimeout(this.run.bind(this), 17)
    }
    update(){
        this.boy.update();
        this.bg.update();
    }
    draw(){
        this.bg.draw(this.ctx);
        this.boy.draw(this.ctx);
       
    }
    pause(){
        this.pause = true;

    }
    //Event Handlert--------------------------------------------
    //1.사용자로부터 입력 -> 2.상태변수 변화 -> 사용자에게 출력
    clickHandler(e){    //1.사용자로부터 입력
        this.boy.moveTo(e.x, e.y);  //2.상태변수 변화
        //this.boy.draw(this.ctx);

    }
    //canvas는 key입력을 받지 않는다.
    //tap을 눌렀을 때 건너뛰는 녀석은 key입력을 받지 않는다.
    keyDownHandler(e){
        this.boy.move(e.key);
    }
}