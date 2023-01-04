//UI
//사용자 입력 외에 작동
function GameCanvas() {
    

    this.dom = document.querySelector(".game-canvas");
    /** @typeof {CanvasRenderingContext2D} */
    this.ctx = this.dom.getContext("2d");
    this.boy = new Boy(100,100);

    //(내부적으로 게임 오버를 위한)게임 상태 변수
    this.gameover = false;
    //게임을 일시정지
    this.pause = false;
    
    //다른 함수'로' 넘겨받는다.
    //일반적인 함수는 call가능, '내'가 실행 가능
        //위임함수
        //callback함수; 사용자가 클릭했을 때, 나중에 실행, 이벤트가 발생했을 때
            //문제; callback하는 주체
    this.dom.onclick = this.clickHandler.bind(this);
    
}


GameCanvas.prototype = {

    //초당 60프레임으로 화면을 다시 그리는 코드
    run:function(){
        //일괄, 주기적으로 update, draw
        if(this.pause)
            return;

        this.update();
        this.draw();
        
        //settimeout; 일회성 
        //setinterval; 반복적으로 
        //1000ms = 1s
        console.log("timer start");

        // window.setTimeout(function(){
        //     console.log("time out");
        // }, 1000)

        // window.setTimeout(function(){
        //     this.run;
        // }, 1000)

        //window.setTimeout(this.run.bind(this), 1000)

        window.setTimeout(()=>{
            this.run;
        }, 17);
     
    },

    //잘게 쪼개기
    update:function(){
        this.boy.move(2);   //상태가 바뀌고

    },
    draw:function(){
        this.boy.draw(this.ctx);    //다시 그리고

    },
    pause(){
        this.pause = true;
    },
    //사용자 입력 event handlers---------------------
    clickHandler: function(){
        this.pause = true;

        this.boy.moveTo(x,y);
        // this.boy.move(2);
        // this.boy.draw(this.ctx);

    }


};