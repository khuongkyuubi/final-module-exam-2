class Rectangle {
    constructor(x, y, width, height, color) {
        this.x = x; // number
        this.y = y; // number
        this.width = width; // number
        this.height = height; // number
        this.color = color; // string - hex code
    }

    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}