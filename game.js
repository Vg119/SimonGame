var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [] , rand , userclickedPattern = []; 
var level = -1,count,started = false,seq_count = -1;


$(".btn").click( function(){
      
       
    userclickedPattern.push(this.id) ;
    animatebutton(this.id);
    play(this.id);
    seq_count ++;
    if(seq_count== level)
    checkAnswer(userclickedPattern[userclickedPattern.length-1]);
   
});


$(document).keypress(function()
{
    
    nextSequence();
    $("#level-title").text("Level "+level);
    //started = true;


    

});

function nextSequence() //called everytime a level starts
{
    userclickedPattern = [];
    rand = Math.floor(Math.random()*4) ;
    randomColour = buttonColours[rand];
    gamePattern.push(randomColour);
    play(randomColour);
    animatebutton(randomColour);
    level++;
    $("#level-title").text("Level "+level);
    

}


function animatebutton(n)
{
    $("#"+n).fadeOut(100).fadeIn(100);
}

function play(n)
{
   
    var aud  = new Audio("./sounds/"+n+".mp3");
    aud.play();
}

function checkAnswer(choice) //checks answer the last time the button is clicked at a level. 
{
    seq_count = -1;
    
    
    if( choice == gamePattern[gamePattern.length-1])
   { console.log("won"+level);

   
    setTimeout(
        function()
        {
            nextSequence()
        }, 1000
    );
   

     }
    else
    {
       play("wrong");
       
       $("body").addClass("game-over");
       
       setTimeout(
        function()
        {
            $("body").removeClass("game-over");
        },200
       );

       $("h1").text("Game over!!! Press any key to resart");
       startOver();
    }
}

function startOver()
{
    level = -1;
    gamePattern = [];
}





 
















