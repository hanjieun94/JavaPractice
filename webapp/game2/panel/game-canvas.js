function GameCanvas() {

    this.dom = document.querySelector(".game-canvas");
    /** @typeof {CanvasRenderingContext2D} */
    this.ctx = this.dom.getContext("2d");
    this.boy = new Boy(100,100);
    
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
        this.update();
        this.draw();
    },

    //잘게 쪼개기
    update:function(){

    },
    draw:function(){
        this.boy.draw(this.ctx);

    },
    //event handlers---------------------
    clickHandler: function(){
        this.boy.move(2);
        this.boy.draw(this.ctx);

    }


};