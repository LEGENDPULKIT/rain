function Drops()
{
     this.x =random(width);
     this.y=random(-200,-100);

     this.yspeed=random(4,8);

     this.fall=function()
     {
         this.y=this.y+this.yspeed;

         if(this.y>height)
         {
            this.y=random(-200,-100);

         }

     }

    this.display=function()
    {
       
      stroke(25,250,210);
      strokeWeight(4);
       line(this.x,this.y,this.x,this.y+20)


    }

}