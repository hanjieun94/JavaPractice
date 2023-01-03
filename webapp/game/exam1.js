

window.addEventListener("load",function(){


    var canvas = document.querySelector(".game-canvas");


    canvas.onclick = function(){

        for(var i=0; i<10; i++){
            boys[i].move(i*10);
            boys[i].draw(ctx);
            ctx.clearRect(0,0,canvas.width,canvas.height);
            console.log(boys[i].y)

         
        }
        for(var i=0; i<10; i++){
            if(boys[i].y>1000){
               
                boom.draw(ctx);
            }
                
        }

    };
    
    
    /** @typeof {CanvasRenderingContext2D} */
    var ctx = canvas.getContext("2d");

    function Boy(x, y) {
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
        draw:function(ctx) {
            var img = new Image();
            img.src = "./image/boy.png";
                            //img는 Boy 프로퍼티에 정의되어 있지 않다.
                            //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object
            img.onload = function() {
                ctx.drawImage(img,
                    this.sx,this.sy,this.sw,this.sh,
                    //move에서 사용하기 위한 변수화
                    this.x,this.y,106,148.25);
               
            }.bind(this);
           
        },
        move:function(speed){
            this.y += speed;

        }
        
    }
    //640X600
    //128X150
    function Boom(){
        this.ix = 2;
        this.iy = 3;
        this.sw = 150;
        this.sh = 128;
        this.sx = this.sw*this.ix;
        this.sy = this.sh*this.iy;
    }
    Boom.prototype={
        draw:function(ctx) {
            var img2 = new Image();
            img2.src = "./image/boom.png";
            img2.onload = function() {
                ctx.drawImage(img2,
                    this.sx,this.sy,this.sw,this.sh,
                    250,650,500,500);
            }.bind(this);
        }
    }

    var boys = [];
    for(var i=0; i<10; i++)
        boys[i] = new Boy(Math.random()*999,Math.random()*999);
    

    var boom = new Boom();
 
});