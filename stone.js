class Stone {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.width = width;
        this.height = height;
        this.image = loadImage("stone.png");
        this.body = Bodies.rectangle(x, y, 20, 20, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        imageMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}