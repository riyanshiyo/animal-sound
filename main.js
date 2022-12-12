function gotResults (error, results) {
    if (error) {
    console.error(error);
    } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1; random_number_b = Math.floor(Math.random() * 255)+ 1;
    document.getElementById("result_label").innerHTML = 'I hear - '+      
    results[0].label;
     document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
    (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+", "+random_number_g+","+random_number_r+")";
    document.getElementById("result confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")" ;

    img =document.getElementById('cow'); 
img1 = document.getElementById('dog');
img2= document.getElementById('tiger');
img3 = document.getElementById('cat');

    if (results[0].label == "dog") {
        img.src= 'dog.jpg'; 
        img1.src= 'cow.jpg'; 
        img2.src = 'tige.jpg';
        img3.src ='cat.png'; 
        } 
        else if (results[0].label == "cat") {
        img.src = 'dog.jpg';
        img1.src ='cow.jpg';
        img2.src = 'tige.jpg';
        img3.src ='cat.png'; }
         else if (results[0].label=="tiger") { 
        
        img.src = 'dog.jpg';
        img1.src ='cow.jpg';
        img2.src= 'tige.jpg';
        img3.src ='cat.png'
        }else{
        img.src= 'dog.jpg';
        img1.src = 'cow.jpg';
img2.src = 'tige.jpg';
img3.src ='cat.png';
}
}
}