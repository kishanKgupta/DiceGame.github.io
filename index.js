//alert("working");
  /*if (randomNumber1 === 0)
   {
    document.querySelector(".img1").setAttribute(URL = "./images/dice6.png")
     
   }
   */
var randomNumber1 = Math.floor(Math.random() * 6)+ 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";  

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);
 


var randomNumber2 = Math.floor(Math.random() * 6)+ 1;

var randomDiceImage1 = "dice" + randomNumber2 + ".png";  

var randomImageSource1 = "images/" + randomDiceImage1;

var image2 =document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource1);

if (randomNumber1 > randomNumber2)
{
    var a = document.querySelector("h1");
    a.innerHTML = "Win Player1 <p>🏆</p>";
}
else if(randomNumber1 < randomNumber2){
     var a = document.querySelector("h1");
    a.innerHTML = "Win Player2 <p>🏆</p>";
}
else
{
    var a = document.querySelector("h1");
    a.innerHTML = "Draw <p>🤝</p>";

}
