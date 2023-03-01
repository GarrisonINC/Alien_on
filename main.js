// https://teachablemachine.withgoogle.com/models/xDFQiQ_gX/
function start_classification() {
navigator.mediaDevices.getUserMedia({audio:true})
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/xDFQiQ_gX/model.json",modelReady)
}

function modelReady(){
   classifier.classify(gotResults) 
}

function gotResults(error,results){
    console.log(results);
}