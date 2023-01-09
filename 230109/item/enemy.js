export default class Enemy{
    constructor(x,y){
        this.img = document.querySelector("#enemy");
        this.x = 350;
        this.y = 350;
    }
    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y);
    }

}