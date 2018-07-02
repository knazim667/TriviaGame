var count = 30;  

var unAnswerd = 0;
var correctAnswerd = 0;
var wrongAnswerd = 0;
    

$(document).ready(function() {
    
    
    
// Hide the Mid Container and End Container
    
    $("#mid_container").hide();
    $("#end_container").hide();


//$("#start").on("click", function(event) {
    
   
    $("#start").on("click", function() {
       
      //after on click function need the start container Hide and Mid container Show
        
        $("#start_container").hide(); 
        $("#mid_container").show();
        
    //Start CountDown 
        startCountdown();
        return;
    });
    
    
    //CountDown Function
    
    function countdown(){
        
        count--;
    //countDown need to show on html
        
        $("#time").html("Time Remaining: " + count + " Seconds");
        
    //before or after when click on done button 
        
        $("#Done").on("click" , function() {
    
        count = 0;
        return;
                                       
        });
    
    //finish the game after the timer reaches 0
                      
        if(count == -1){
            
            timeUp();
            
            $("#mid_container").hide();
        }
        
    }
                      
    function startCountdown () {
        
        setInterval(countdown, 1000);
    }

    //Function need to be run when the timer is up
    
    function timeUp(){
        
    
       //checked the value of radio input
        
        var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		
        
        
    //counting the wrong ,correct and unanswerd
    
    
        
    
        if(Q1 == " John and Mary "){
            
            correctAnswerd++;
         
        }
        else if(Q1 == undefined){
            unAnswerd++;
        }
        else {
            wrongAnswerd++;
        }
        console.log(wrongAnswerd);
        console.log(correctAnswerd);
        
        if(Q2 == " in the 19th century "){
            
            correctAnswerd++;
         
        }
        else if(Q2 == undefined){
            unAnswerd++;
        }
        else{
            wrongAnswerd++;
        }
        
        console.log(wrongAnswerd);
        console.log(correctAnswerd);
        
        if(Q3 == "Buttermilk"){
            
            correctAnswerd++;
         
        }
        else if(Q3 == undefined){
            unAnswerd++;
        }
        else{
            wrongAnswerd++;
        }
        
        console.log(wrongAnswerd);
        console.log(correctAnswerd);
        if(Q4 == " a four-story Georgian-style home in Missour "){
            
            correctAnswerd++;
         
        }else if(Q4 == undefined){
            unAnswerd++;
        }else{
            wrongAnswerd++;
        }
        
        console.log(wrongAnswerd);
        console.log(correctAnswerd);
        if(Q5 == "compact disk player"){
            
            correctAnswerd++;
         
        }else if(Q5 == undefined){
            unAnswerd++;
        }else{
            wrongAnswerd++;
        }
        
        console.log(wrongAnswerd);
        console.log(correctAnswerd);
        if(Q6 == "Byron Nelson"){
            
            correctAnswerd++;
         
        }else if(Q6 == undefined){
            unAnswerd++;
        }else{
            wrongAnswerd++;
        }
        
        console.log(wrongAnswerd);
        console.log(correctAnswerd);
        
        //after answer are validated, display the score results
        
        $("#correctAnswerd").html("Correct Answerd: " + correctAnswerd);
        $("#WrongAnswerd").html("Wrong Answerd: " + wrongAnswerd);
        $("#unAnswerd").html("UnAnswerd : " + unAnswerd);
    
        
        $("#end_container").show();
        
    }
   
    
});
    
