export class Block {
    constructor(width, height, x, y, moveMaxX) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.moveMinX = this.x;
        this.maxX = this.x + this.width;
        this.maxY = this.y + this.height;
        this.moveMaxX = moveMaxX;
        this.dir = 1;
    }

    draw(ctx) {
        const xGap = 80;
        const yGap = 60;
        
        if(this.maxX == this.moveMaxX) {
            this.dir = -1;
        }
        else if(this.x == this.moveMinX) {
            this.dir = 1;
        }
        this.x += this.dir;
        this.maxX += this.dir;
        // box
        ctx.fillStyle = '#F781F3';
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();

        // shadow
        ctx.fillStyle = '#610B5E';
        ctx.beginPath();
        ctx.moveTo(this.maxX, this.maxY);
        ctx.lineTo(this.maxX - xGap, this.maxY + yGap);
        ctx.lineTo(this.x - xGap, this.maxY + yGap);
        ctx.lineTo(this.x, this.maxY);
        ctx.fill();

        ctx.fillStyle = '#F5A9F2';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.maxY);
        ctx.lineTo(this.x - xGap, this.maxY + yGap);
        ctx.lineTo(this.x - xGap, this.maxY + yGap - this.height);
        ctx.fill();
    }
}