var SpeechRecognition= window.webkitSpeechRecognition;
var Recognition= new SpeechRecognition();
function Start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}
Recognition.onresult=function run(event){
    console.log(event);
    var Content= event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    speak();
}

function speak(){
    var synth= window.speechSynthesis;
    speak_data= document.getElementById("textbox").value;
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
 Webcam.attach(camera);   
}
 Webcam.set({
    width:340,
    height: 240,
    image_format:"png",
    png_quality:100,
 });
 camera=document.getElementById("camera");
