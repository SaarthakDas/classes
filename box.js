class Box{

    //properties (how it looks, physical attributes)
    //setup part of the class:runs once
    constructor(x,y,width,height){

        var options= {
            restitution: 0.18,
            density:1,
            friction:0.01
        }

        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
       
    }
    

    //function(what it does)
    //draw part of the class: runs for every frame
    display(){
        //namespacing/nicknaming
        var pos= this.body.position;
        //to push changes from this point
        push();
        //to translate the x and y position so that rect could turn
        translate(pos.x,pos.y);
        //to rotate a rect at some angle
        rotate(this.body.angle);
        //used to fill colors in an object
        fill("red");
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        //to pop out the applied the changes at this point
        pop();
    }
}

//push and pop are used so that so that the changes dont leak to the other classes