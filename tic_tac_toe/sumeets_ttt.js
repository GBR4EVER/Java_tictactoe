window.onload = function(){
	
	// 
	var squares = document.getElementsByTagName('td');
	var newGame = game(player("X", "player1"), player("O", "player2"));
	
	function player(mark_character, score_element_id){
		var score = 0;
		
		return {
			winGame: function(){
				score++;
				alert("Player " + mark_character + " wins!");
				document.getElementById(score_element_id).innerHTML = score;
			},
			getScore: score,
			mark: mark_character
		}
	}
	
	function game(playerX, playerO){
		var turns = 0;
		return {
			currentPlayer: function(){
				return ((turns % 2) === 0) ? playerX : playerO;
			},
			advanceTurn: function(){
				turns++;
				return turns;
			},
			getTurns: turns,
			hasWinner: function(){
				// Obviously incomplete win detection. Only considers a win in the first column.
				// But you get the picture.
				if (squares[0].innerHTML != "-" &&
				squares[0].innerHTML === squares[3].innerHTML &&
				squares[3].innerHTML === squares[6].innerHTML) {
					return true;
				}
				else{
					return false;
				}
			},
			isCatsGame: function(){
				if (turns === 9){
					alert("TIE! Play better.");
					return true;
				}
				else{
					return false;
				}
			},
			resetGame: function(){
				turns = 0;
				for(var i = 0; i < squares.length; i++) {
					squares[i].innerHTML = "-";
				}
			}
		}
	}
	
	function add_mark(){
		this.innerHTML = newGame.currentPlayer().mark;
		if (newGame.hasWinner()) {
			newGame.currentPlayer().winGame();
			newGame.resetGame();
		}
		else{
			newGame.advanceTurn();
			if (newGame.isCatsGame()) {
				newGame.resetGame();
			}
		}
	}
	
	for(var i = 0; i < squares.length; i++) {
		// When you click a square, runs the `add_mark` method.
		squares[i].addEventListener("click", add_mark);
	}
}