function preload()
{

}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
}

function draw()
{
    
}

function take_snapshot()
{
    save('clown-nose.jpg');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}