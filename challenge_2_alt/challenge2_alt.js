/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a 
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 * 
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 * 
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

 var oneShootCount = 0;
 var oneScore = 0;
 var twoShootCount = 0;
 var twoScore = 0;
 var resetCount = 0;
 var oneShotRes = 0;
 var twoShotRes = 0;
 

 $(function(){

	$("#teamone-shoot").on('click', function(){ 
		calcShotOne();
		displayTeamOne();
	})
	
	$("#teamtwo-shoot").on('click', function(){
		calcShotTwo();
		displayTeamTwo();
	})
	
	$("#reset").on('click', function() {
		reset();
		displayTeamOne();
		displayTeamTwo();
		displayResetCount();
	})
	
	$("#simulate100").on('click', function(){
		for (i = 0; i < 100; i++) {
			calcShotOne();
			calcShotTwo();
		}
		displayTeamOne();
		displayTeamTwo();
	})

	$("#simulate1000").on('click', function(){
		for (i = 0; i < 1000; i++) {
			calcShotOne();
			calcShotTwo();
		}
		displayTeamOne();
		displayTeamTwo();
	})
	
	$("#simulate10000").on('click', function(){
		for (i = 0; i < 10000; i++) {
			calcShotOne();
			calcShotTwo();
		}
		displayTeamOne();
		displayTeamTwo();
	})
	
	$("#simulateTons").on('click', function() {
		for (i = 0; i < 100000000; i++) {
			calcShotOne();
			calcShotTwo();
		}
		displayTeamOne();
		displayTeamTwo();
	})
 })
 
 function calcShotOne() {
	 oneShotRes = Math.random();
		if (oneShotRes > .85) {
			oneShootCount++;
			oneScore++;
		} else {
			oneShootCount++;
		}
 }
 
 function calcShotTwo() {
	 twoShotRes = Math.random()
		if (twoShotRes > .92) {
			twoShootCount++;
			twoScore++;
		} else {
			twoShootCount++;
		}
 }
 
 function displayTeamOne() {
	 $("#teamone-numshots").text(oneShootCount);
	$("#teamone-numhits").text(oneScore);
 }
 
 function displayTeamTwo() {
	 $("#teamtwo-numshots").text(twoShootCount);
	$("#teamtwo-numhits").text(twoScore);
 }
 
 function reset() {
	 resetCount++;
	 oneShootCount = 0;
	 oneScore = 0;
	 twoShootCount = 0;
	 twoScore = 0;
 }
 
 function displayResetCount() {
	 $("#num-resets").text(resetCount);
 }
 