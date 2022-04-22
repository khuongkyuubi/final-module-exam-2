let canvas = document.getElementById("my-canvas");
let ctx = canvas.getContext("2d");
ctx.canvas.width = 600;
ctx.canvas.height = 600;

let rectangle = new Rectangle(10, 10, 200, 100, "#000000");
rectangle.render(ctx);
