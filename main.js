function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/j5czTuRFB/model.json' , modelReady);
}

function modelReady()
{
    classifier.classify(gotResult);
}
function gotResult(error,result){
    if(error){
        console.error(error)
    } else{
        console.log(result);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;


        document.getElementById("result_label").innerHTML = 'I can hear -'+
        result[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy -'+
        (result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      img = document.getElementById('alien1');
      imgl = document.getElemetById('alien2');
      img2 = document.getElemetById('alien3');
      img3 = document.getElemetById('alien4');
      
      if (results[0].label=="slow clapping"){
          img.src =   'aliens-01.gif'
          img1.src =  'aliens-02.png'
          img2.src =  'aliens-03.png'
          img4.src =  'aliens-04.png'
        
      } else if (results[0].label=="Background Noise"){
          img.src =   'aliens-01.png'
          img1.src =  'aliens-02.gif'
          img2.src =  'aliens-03.png'
          img4.src =  'aliens-04.png'
      
    }else if (results[0].label=="Sand"){
        img.src =   'aliens-01.png'
        img1.src =  'aliens-02.png'
        img2.src =  'aliens-03.gif'
        img4.src =  'aliens-04.png'
}else if (results[0].label=="fast clap"){
          img.src =   'aliens-01.png'
          img1.src =  'aliens-02.png'
          img2.src =  'aliens-03.png'
          img4.src =  'aliens-04.gif'
}
    }
}
