function Boy(x,y) {
    this.ix = 1;
    this.iy = 2;
    this.sw = 106;
    this.sh = 148.25
    this.sx = this.sw*this.ix;
    this.sy = this.sh*this.iy;

    this.x = x || 100;
    this.y = y || 100;

}

Boy.prototype = {
    draw: function(ctx) {
        var img = new Image();
        img.src = "./image/boy.png";
        img.onload = function() {
            console.log(this);         
            ctx.drawImage(img,
                this.sx,this.sy,this.sw,this.sh,
                this.x,this.y,106,148.25);
        }.bind(this);
    },
    move: function(dir){
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
    },
    update: function() {

    }
    
}