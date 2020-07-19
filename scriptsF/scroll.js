var i =0;
var images = [];
var time = 6000;

images[0] = "images/img1.jpg";
images[1] = "images/img2.jpg";
images[2] = "images/img3.png";

var nbtn = document.getElementById("Next");
var pbtn = document.getElementById("Prev");




nbtn.onclick = function ()
{        

     if(i<images.length-1)
        {
             i++;
           document.slide.src = images[i];
                       

        }
    else
    {
        document.slide.src = images[0];
        i=0;
    }
    
    console.log(i);
}
    

pbtn.onclick = function ()
{
        if(i<images.length)
        {
           
             i--;
           document.slide.src = images[i];
                       

        }
    if(i<0)
    {
        document.slide.src = images[2];
        i=2;
    }
    
    console.log(i);
}
    

function changeImg()
{
 document.slide.src = images[i];
    if(i<images.length-1)
        {
            i++;
        }
    else
        {
            
            i=0;
        }
    
    setTimeout("changeImg()",time);
}

window.onload = changeImg;

