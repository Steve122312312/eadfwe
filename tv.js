Status=""
tv_image=""
object=[]

function preload(){
    tv_image =loadImage("tv.jpg")
}

function setup(){
    canvas = createCanvas(640,350)
    canvas.position(315,200)
    object_detector = ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML = "Ststus: Dectecting Objects"
}

function modelLoaded(){
    console.log("Model Loaded")
    Status = true
    object_detector.detect(tv_image,gotresults)

}
function gotresults(error,results){
    if(error){
        console.error(error)
    }
    console.log(results)


}
function draw(){
    image(tv_image,0,0,640,350)
    if(Status != ""){
        for(i = 0;i,objects.length; i++){
            document.getElementById("Status").innerHTML = "Status: Object Detected"
            fill("#fc0303")
            percent = floor(objects[i].confidence*100)
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y)
            nofill()
            stroke("fc0303")
            Rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        }
    }
}