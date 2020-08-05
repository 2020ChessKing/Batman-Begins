class Bat
{
    constructor()
    {
      this.body = Bodies.rectangle(200, 200, 60, 300);
      World.add(world, this.body);  

      this.img = loadImage("bat.png")
    }

    display()
    {
      var pos = this.bodu.position;
      
      imageMode(CENTER);
      image(this.img, pos.x, pos.y, this.width, this.height);
    }
}