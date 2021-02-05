//set up jQuery
$(document).ready(function() {
//create the object
var magic8Ball = {};
//create the array of possible answers
magic8Ball.listOfAnswers = ["perhaps", "it is upon us", "why not, queen?", "oh, 100 percent", "do not go there", "come again?", "indubitably"];
//Hide answer on page load	
$("#answer").hide();
//define the method
//object / method /    function / parameter
magic8Ball.askQuestion = function(question) 
//BEGIN askQuestion FUNCTION
{ 
	$("#answer").fadeIn(2000);
	//randomAnswer is created and set to Math.random method
	var randomAnswer = Math.random();
	//rAA is created and set to the length of the possible list of answers
	var randomAnswerArray = randomAnswer * this.listOfAnswers.length;
	
	var randomIndex = Math.floor(randomAnswerArray);
	
	var answer = this.listOfAnswers[randomIndex];
	setTimeout(
		function() {
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png").stop(true,true).hide().fadeIn(100);
		}, 500);
	
	$("#answer").text(answer);
}; //END askQuestion FUNCTION
	
//BEGIN onClick FUNCTION	
var onClick = function() 
{
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	setTimeout(
		function() {
	var question = prompt("Ask me a yes/no question!");
	$("#8ball").effect("shake");		magic8Ball.askQuestion(question);
		}, 500);
}; //END onClick FUNCTION	
	
$("#questionButton").click(onClick);

}); //END jQuery