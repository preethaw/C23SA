
class Box
  {
    constructor(x,y,w,h){
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
    }
    display(){
      rectMode(CENTER);
      rect(this.x,this.y,this.width,this.height);
    }
  }

   
  

  
