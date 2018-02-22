import Circle from '../component/circle';

export const drawWorld = (width, height, ctx, entities, score) => {
    ctx.clearRect(0, 0, width, height);
    entities.forEach(e => {
        const { shape, position } = e;
        if (shape && position) {
            if (shape instanceof Circle) {
                ctx.beginPath();
                ctx.arc(position.x, position.y, shape.r, 0, 2 * Math.PI, false);
                // ctx.lineWidth = 5;
                ctx.strokeStyle = shape.color;
                ctx.stroke();
                ctx.closePath();
            }
        }
    });
    ctx.font = "30px Verdana";
    // Create gradient
    var gradient = ctx.createLinearGradient(0,0,width,0);
    gradient.addColorStop("0","magenta");
    gradient.addColorStop("0.5","blue");
    gradient.addColorStop("1.0","red");
    // Fill with gradient
    ctx.fillStyle = gradient;
    ctx.fillText(score, 20, 30);
}

export const drawGameOver = (width, height, ctx, score) => {
    ctx.clearRect(0, 0, width, height);
    ctx.font = "30px Verdana";
    ctx.fillText('Game Over', width / 2, height / 2);
}
