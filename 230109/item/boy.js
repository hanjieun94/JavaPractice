export default class Boy{
    #speed;
    constructor(x,y){
        this.x = x || 100;
        this.y = y || 100;

    
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

        this.#speed = 3;

        this.walkDelay = 10;
        this.dir = 0;

        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;
        this.moveDown = false;
    }
    set speed(value){
        this.#speed = value;
    }
    get speed(){
        return this.#speed;
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

        //이동을 위한 코드----------------------------------------
        if(this.moveUp)
            // this.y -= 1;
            this.y -= this.#speed;
        if(this.moveDown)
            this.y += this.#speed;
        if(this.moveLeft)
            this.x -= this.#speed;
        if(this.moveRight)
            this.x += this.#speed;
        //  switch(this.dir){
        //     case 1:
        //         this.y -= 1;
        //         break;
        //     case 2:
        //         this.x += 1;
        //         break;
        //     case 3:
        //         this.y += 1;
        //         break;
        //     case 4:
        //         this.x -= 1;
        //         break;    
        // }

        if((this.dx-1<this.x && this.x<this.dx+1) && (this.dy-1<this.y && this.y<this.dy+1)){
            this.vx = 0;
            this.vy = 0;
        }

        //벡터가 0일 때 반환
        if(!(this.moveLeft||this.moveRight||this.moveUp||this.moveDown||false))
            if(this.vx == 0 && this.vy == 0){
                this.ix = 1;
                return;
            }

        this.x += this.vx;
        this.y += this.vy;

        //걷는 효과
        this.walkDelay--;
        if(this.walkDelay == 0){
            this.ix = this.ix==2?0:2;
            this.walkDelay = 10;
        } 
   
    }
    //------------------------------------------------------------
   
    // moveTo(dx,dy){  

    //     this.ix = 0;
    //     this.sx = this.sw*this.ix;
    //     let w = dx - this.x;
    //     let h = dy - this.y;

    //     let d = Math.sqrt(w*w+h*h);
    //     this.vx = w/d;
    //     this.vy = h/d;

    //     this.dx = dx;
    //     this.dy = dy;
    // }
    
    
    //move하고 stop하기 위해서 개별적으로 변수 설정하기
    move(dir){
        switch(dir){
            case 1:
                this.moveUp = true;
                break;
            case 3:
                this.moveDown = true;
                break;
            case 2:
                this.moveRight = true;
                break;
            case 4:
                this.moveLeft = true;
                break;    
        }
    }

    stop(dir){
        switch(dir){
            case 1:
                this.moveUp = false;
                break;
            case 3:
                this.moveDown = false;
                break;
            case 2:
                this.moveRight = false;
                break;
            case 4:
                this.moveLeft = false;
                break;    
            
        }
    }
}
