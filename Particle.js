class Particle {
    constructor(x,y,radius) {
        var options = {
            restitution:0.4
        }
        this.radius = radius;

        this.body = Bodies.circle(x,y,this.radius,options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(this.body,world);
        }
        Display() {
            var pos = this.body.position;
            var angle = this.body.angle;

            push();
            translate(pos.x, pos.y);
            rotate(angle);
            fill(this.color);
            ellipseMode(radius);
            ellipse(x,y,this.radius,this.radius);
            pop();
        }
};