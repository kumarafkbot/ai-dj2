scoreLeftWrist = 0
leftWristX=0
leftWristY=0
rightWristX=0
rightWristY=0

function setup() {
    canvas = createCanvas(600 , 500);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide()

      poseNet = ml5.poseNet(video , modelLoaded);
      poseNet.on('pose' , gotPoses);
}

function draw() {

    image(video,0,0,600,500)
     

      if(scoreLeftWrist>0.2)
      {
       
        fill("red")
        stroke("black")
        circle(leftWristX,leftWristY,20)
       
        leftWristY = Number(leftWristY);
        remove_decimals = floor(leftWristY);
        volume = remove_decimals/500;
        song.setVolume(volume);
        document.getElementById("volume").innerHTML = "volume : " + volume;
    
      }


}

var song = ""
function preload() {
    song = loadSound("music.mp3")
}

function play()
{
song.play()
song.setVolume(1)
song.rate(1)

}

function modelLoaded() {
    console.log("model is loaded ")

}


function gotPoses(results)
{
if (results.length>0) {
    console.log(results)

     scoreLeftWrist = results[0].pose.keypoints[9].score
     console.log("score = " + scoreLeftWrist );

    leftWristX = results[0].pose.leftWrist.x
    leftWristY = results[0].pose.leftWrist.y
    console.log("Left Wrist X = " + leftWristX  + "Left Wrist Y = " + leftWristY)

    rightWristX = results[0].pose.rightWrist.x
    rightWristY = results[0].pose.rightWrist.y
    console.log("Right Wrist X = " + rightWristX + "Right Wrist Y = " + rightWristY)



}
}



