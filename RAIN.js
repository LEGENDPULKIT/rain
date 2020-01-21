var Drop=[]

function setup()
{
    canvas=createCanvas(400,400);
    
    for(var i=0;i<Drop.length;i++)
    {
        Drop[i]=new Drops()

    }

    

    
}

function draw()
{
    background(0);

    for(var i=0;i<Drop.length;i++)
    {
        Drop[i].fall();
        Drop[i].display();


    }
    
}