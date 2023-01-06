class Boy{
    constructor(x,y){
        this.x = x || 100;
        this.y = y || 100;

        //이미지를 그리기 위한 변수--------------------------------
        this.ix = 1;
        this.iy = 2;
        this.sw = 106;
        this.sh = 148.25;
        this.sx = this.sw*this.ix;
        this.sy = this.sh*this.iy;

        //이동 단위
        this.vx = 0;
        this.vy = 0;

        //캐릭터가 있는 위치
        this.dx = 0;
        this.dy = 0;
    }
    draw(ctx){
        var img = new Image();
        img.src = "./image/boy.png";

        img.onload = function(){
            ctx.drawImage(img,
                this.sx, this.sy, this.sw, this.sh,
                this.x, this.y, 106, 148.25);
        }.bind(this);
    }
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
    moveTo(dx,dy){  //2.상태변수 변화 
        let w = dx - this.x;
        let h = dy - this.y;

        let d = Math.sqrt(w*w+h*h);
        this.vx = w/d;
        this.vy = h/d;
    }
    update(){
        //2.점진적으로 이동
        this.x += this.vx;
        this.y += this.vy;
    }
}
