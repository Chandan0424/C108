function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    //classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zjMARzZNz/model.json",modelLoaded);
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/K-um7t_9n/model.json",modelLoaded);
}
function modelLoaded(){
    console.log("MODEL IS LOADED!!")
    classifier.classify(gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255);
        g=Math.floor(Math.random()*255);
        b=Math.floor(Math.random()*255);
        
        label=results[0].label;
        document.getElementById("label").innerHTML="I can hear "+label;
        confidence=(results[0].confidence*100).toFixed(2)
        console.log(confidence);
        document.getElementById("confidence").innerHTML="Accuracy "+confidence+"%";
        document.getElementById("label").style.color="rbg("+r+","+g+","+b+")";
        document.getElementById("confidence").style.color="rbg("+r+","+g+","+b+")";

        img1=document.getElementById("alien_1");
        img2=document.getElementById("alien_2");
        img3=document.getElementById("alien_3");
        img4=document.getElementById("alien_4");

        if(label=="Clap"){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
        else if(label=="Snap"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
        else if(label=="Barking"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
            img4.src="aliens-04.png";
        }
        else{
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.gif";
        }

    }
}