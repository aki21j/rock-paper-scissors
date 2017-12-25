function computerPlay(){
	var compIndex = Math.floor(Math.random() * 3);
	var compSelection = ['Rock', 'Paper', 'Scissor'];
	return compSelection[compIndex]; 
}

function playRound(playerSelection ,computerSelection ){
	playerSelection = prompt("Rock, paper or scissor?").toLowerCase();
	computerSelection = computerPlay().toLowerCase();
	// console.log("Comp " + computerSelection);
	// console.log("Player " + playerSelection);
	if(playerSelection == 'rock'){
		if(computerSelection == 'scissor')
			return 'wins'
		else if(computerSelection == 'paper')
			return 'loses'
		else return 'tie'
	}
	else if(playerSelection == 'scissor'){
		if(computerSelection == 'paper')
			return 'wins'
		else if(computerSelection == 'rock')
			return 'loses'
		else return 'tie'
	}
	else if(playerSelection == 'paper'){
		if(computerSelection == 'rock')
			return 'wins'
		else if(computerSelection == 'scissor')
			return 'loses'
		else return 'tie'
	}

}

function game(){
	var player = 0;
	var computer = 0;
	var i = 0;
	for(i = 0;i < 5; i++){
		var result = playRound();
		if(result == 'wins'){
			player++;
		}else if(result == 'loses')
			computer++;
	}
	if(player > computer){
		console.log("Congrats!You Won " + player + " - " + computer);
	}else if(player < computer){
		console.log("Boo!You Lose " + player + " - " + computer);
	}else if(player == computer){
		console.log("TIE " + player + " - " + computer);
	}
	// console.log(result);
}