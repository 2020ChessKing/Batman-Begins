class Drop
{
    constructor()
    {
        this.body = Bodies.circle(random(100, 600), -10, 10);
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;

        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, 5, 5);
    }
}