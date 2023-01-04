class Boy{
    constructor(x,y){
        this.x = x || 100;
        this.y = y || 100;

        this.vx = 0;    //이동단위
        this.vy = 0;

        this.dx = 0;    //캐릭터가 있는 위치
        this.dy = 0;

        //이미지를 그리기 위한 변수-----------------------------
        this.ix = 1;
        this.iy = 2;
        this.sw = 106;
        this.sh = 148.25
        this.sx = this.sw*this.ix;
        this.sy = this.sh*this.iy;
    
        
    }


    draw(ctx) {
        var img = new Image();
        img.src = "./image/boy.png";
        img.onload = function() {
            console.log(this);         
            ctx.drawImage(img,
                this.sx,this.sy,this.sw,this.sh,
                this.x,this.y,106,148.25);
        }.bind(this);
    }
    move(dir){
        switch(dir){
            case 1 :    //북
                this.y -=10;
            break;
            case 2 :    //동
                this.x +=10;
            break;
            case 3 :    //남
                this.y +=10;
            break;
            case 4 :    //서
                this.x -=10;
            break;
        }
    }

    //움직이기 위한 원동력
    moveTo(x,y){

        let w = dx - this.x;
        let h = dy - this.y;

        let d = Math.squrt()
        this.vx = w/d;
        this.vy = h/d;

    }
    update(){
        this.x += this.vx;
        this.y += this.vy;

    }

    
    
}