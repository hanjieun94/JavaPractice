

window.addEventListener("load",function(){

    //window초기화 시 적재되지 않고 대치되는 문제발생
    // this.window.onclick = function(){
    //     console.log("window clicked");
    // };
    

    var canvas = document.querySelector(".game-canvas");
    //var img = this.document.querySelector("img"); 
    //img.src = "./image/boy.png";

    canvas.onclick = function(){
        // console.log("canvas clicked");
        boy2.move(2);
        boy2.draw(ctx);
    };
    
    /** @typeof {CanvasRenderingContext2D} */
    var ctx = canvas.getContext("2d");
    //ctx.fillStyle = "rgb(200, 0, 0)";
    //ctx.fillRect(10, 10, 50, 50);
    //ctx.strokeRect(20, 10, 160, 100);
   
    function Box() {
    }
    // Box.prototype = {
    //     test:function(){
    //         console.log(this);      //window
    //     }
    // };
    Box.prototype = {
        test:function(x,y){
            console.log(this);  //box
            console.log(x);
            console.log(y);
        }
    }
    var box1 = new Box();
    box1.test();


    // var obj = {kor:2};
    // obj.onload = box1.test;
    // obj.onload();
    // // obj.f1 = box1.test;
    // // obj.f1();
    
    
    // var f1 = box1.test;
    // f1();
    // var n1 = {id:1, title:'hello'};
    // console.log("집중");
    
    // console.log(this);
    // obj.onload.call(n1)
    // console.log(this);
    
    // obj.onload.apply(n1,['hi','okay']);

    
    function Boy(x,y) {
        this.ix = 1;
        this.iy = 1;
        this.sw = 106;
        this.sh = 148.25
        this.sx = this.sw*this.ix;
        this.sy = this.sh*this.iy;

        this.x = x || 100;
        this.y = y || 100;

    }
    // Boy.prototype = {
    //     draw:function(ctx) {
    //         var img = new Image();
    //         img.src = "./image/boy.png";
    //         img.onload = function() {
    //             console.log(this);          //실행해주는 주체 = this

    //             ctx.drawImage(img,
    //                 this.sx,this.sy,this.sw,this.sh)
    //         }
    //     }
    // }
    Boy.prototype = {
        draw:function(ctx) {
            var img = new Image();
            img.src = "./image/boy.png";
            img.onload = function() {
                console.log(this);          //실행해주는 주체 = this

                ctx.drawImage(img,
                    this.sx,this.sy,this.sw,this.sh,
                    //move에서 사용하기 위한 변수화
                    this.x,this.y,106,148.25);
            }.bind(this);
        },
        move:function(dir){
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
    }

    //캡슐화함으로써 객체 이름으로 식별 가능
    var boy1 = new Boy(9,9);
    boy1.draw(ctx);

    var boy2 = new Boy();
 
    boy2.move(2);
    boy2.draw(ctx);

    //캔버스에 그리기

    // var img = new Image();
    // img.src = "./image/boy.png";
    // img.onload = function() {
        //ctx.drawImage(img,100,100);
        //ctx.drawImage(img,100,100,106,148.25);    //이미지 크기 변경
        //ctx.drawImage(img,          //소스
        //     0,0,106,148,25,
        //     200,100,106,148.25);    //destination위치

        // //인덱스
        // var ix = 1;
        // var iy = 1;

        // var sw = 106;
        // var sh = 148.25;
        // var sx = sw * ix;
        // var sy = sh * iy;


        // // ctx.drawImage(img,          
        // //     90,300,106,148.25,
        // //     50,100,106,148.25);      
        // // ctx.drawImage(img,          
        // //     0,0,106,148.25,
        // //     150,200,106,148.25);     
        
        // ctx.drawImage(img,          
        //     sx,sy*2,sw,sh,
        //     150,200,sw,sh);

    }

);