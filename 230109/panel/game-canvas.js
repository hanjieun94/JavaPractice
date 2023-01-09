//default: 여러 클래스 중 default할 클래스
import Boy from '../item/boy.js'
import Enemy from '../item/enemy'
import Background from '../item/background'

export default class GameCanvas{

    constructor(){
        this.dom = document.querySelector(".game-canvas");
        this.dom.focus();
        /** @typeof {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");
        this.boy = new Boy(500,500);
        this.enemy = new Enemy(0,0);
        //this.boy.setSpeed(this.boy.getSpeed()+1);
        this.boy.speed++;
        this.bg = new Background();
        
        this.gameover = false;
        this.pause = false;
        
        // this.dom.onclick = this.clickHandler.bind(this);
        this.dom.onkeydown = this.keyDownHandler.bind(this);
        this.dom.onkeyup = this.keyUpHandler.bind(this);

    }
    
    run(){
     
        if(this.pause)
            return;

        this.update();
        this.draw();
        
        console.log("time start");
        window.setTimeout(this.run.bind(this), 17)
    }
    update(){
        this.bg.update();
        this.boy.update();
        //this.enm.update();
    }
    draw(){
        this.bg.draw(this.ctx);
        this.boy.draw(this.ctx);
        this.enemy.draw(this.ctx);
       
    }
    pause(){
        this.pause = true;

    }
    //Event Handlert--------------------------------------------
   
    // clickHandler(e){    
    //     this.boy.moveTo(e.x, e.y);  
    // }

    keyDownHandler(e){
        switch(e.key){
            case "ArrowUp":
                this.boy.move(1);
                break;
            case "ArrowLeft":
                this.boy.move(4);
                break;
            case "ArrowRight":
                this.boy.move(2);
                break;
            case "ArrowDown":
                this.boy.move(3);
                break;    
        }
    }

    //어떤 방향에 대해서 가는 것을 멈춰!
    keyUpHandler(e){
        switch(e.key){
            case "ArrowUp":
                this.boy.stop(1);
                break;
            case "ArrowLeft":
                this.boy.stop(4);
                break;
            case "ArrowRight":
                this.boy.stop(2);
                break;
            case "ArrowDown":
                this.boy.stop(3);
                break;    
        }
    }

}
//export default GameCanvas;