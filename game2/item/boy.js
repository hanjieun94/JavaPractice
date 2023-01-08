class Boy{
    constructor(x,y){
        this.x = x || 100;
        this.y = y || 100;

        //이미지를 그리기 위한 변수--------------------------------
        this.img = document.querySelector("#boy");
        this.ix = 1;
        this.iy = 2;
        this.sw = 106;
        this.sh = 148.25;
        this.sx = this.sw*this.ix;
        this.sy = this.sh*this.iy;

        this.vx = 0;
        this.vy = 0;

        this.dx = 0;
        this.dy = 0;

        this.walkDelay = 10;
    }
    //게임쓰레드(사용자가 호출하지 않는다.)------------------------
    draw(ctx){
        this.sx = this.sw*this.ix;
        this.sy = this.sh*this.iy;

        ctx.drawImage(this.img,
            this.sx, this.sy, this.sw, this.sh,
            this.x-this.sw/2, this.y-this.sh+15, this.sw, this.sh);
        }
    
    update(){
        // //ix를 0,2
        if((this.dx-1<this.x && this.x<this.dx+1) && (this.dy-1<this.y && this.y<this.dy+1)){
            this.vx = 0;
            this.vy = 0;
        }
        if(this.vx == 0 && this.vy == 0){
            this.ix = 1;
            return;

        }
        //2.점진적으로 이동
        this.x += this.vx;
        this.y += this.vy;

        this.walkDelay--;
        if(this.walkDelay == 0){
            this.ix = this.ix==2?0:2;
            this.walkDelay = 10;
        } 
            
        
    }
    //------------------------------------------------------------
    move(dir){
        switch(dir){
            case 1 :
                this.y -= 1;
            break;
            case 2 :
                this.x += 1;
            break;
            case 3 :
                this.y += 1;
            break;
            case 4 :
                this.x -= 1;
            break;
        }
    }
    moveTo(dx,dy){  //2.상태변수 변화 - 벡터 생성, 0일 때 정지
        
        this.ix = 0;
        this.sx = this.sw*this.ix;
        let w = dx - this.x;
        let h = dy - this.y;

        let d = Math.sqrt(w*w+h*h);
        this.vx = w/d;
        this.vy = h/d;

        this.dx = dx;
        this.dy = dy;
    }
}
