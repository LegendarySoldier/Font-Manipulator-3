function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(400,170)

    canvas = createCanvas(550, 550);
    canvas.position(960, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
}
function modelLoaded(){
    console.log("PoseNet Is Initialized!");
}

noseX=0;
noseY=0;
diffrence=0;
rightWristX=0;
rightWristY=0;

function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diffrence = floor(leftWristX - rightWristX)
    }
} 


function draw(){
    background('#6C91C2');

    textSize(diffrence);
    fill("#FFE787");
    text("Laksh", 50, 400);
}