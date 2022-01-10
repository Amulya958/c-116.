NOSE_X = 0 ;
NOSE_Y = 0 ;

function preload()
{
clown_image = loadImage('https://i.postimg.cc/13j69b5D/image-removebg-preview-3.png') ;
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
video = createCapture(VIDEO) ;
video.size(350,350) ;
video.hide() ;

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses) ;
}

function modelLoaded() {
    console.log('POSENET IS WORKING') ;
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results) ;
      NOSE_Y =results[0].pose.nose.y ;
      NOSE_X =results[0].pose.nose.x-30 ;
    }
}

function draw()
{
image(video , 0 , 0 , 350 , 350);
image(clown_image , NOSE_X , NOSE_Y , 65 , 45);
}

function take_picture()
{
    save('myFilterPICTURE.png');
}