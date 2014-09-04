window.onload = function(){


	// Collection of all squares on the board.
	var squares = document.getElementsByTagName('td');
	var turnOdd="X";
	var turnEven="O";
	function add_markX() {
		this.innerHTML = turnOdd;
	}
	function add_markO() {
		this.innerHTML = turnEven;
	}
	
	
	// The following is all ruby, must convert to JS somehow!!!
	// function winner() {
	//     if ((@board[:a1] == @p1) && (@board[:a2] == @p1) && (@board[:a3] == @p1)) ||
	//     ((@board[:b1] == @p1) && (@board[:b2] == @p1) && (@board[:b3] == @p1)) ||
	//     ((@board[:c1] == @p1) && (@board[:c2] == @p1) && (@board[:c3] == @p1)) ||
	//     ((@board[:a1] == @p1) && (@board[:b1] == @p1) && (@board[:c1] == @p1)) ||
	//     ((@board[:a2] == @p1) && (@board[:b2] == @p1) && (@board[:c2] == @p1)) ||
	//     ((@board[:a3] == @p1) && (@board[:b3] == @p1) && (@board[:c3] == @p1)) ||
	//     ((@board[:a1] == @p1) && (@board[:b2] == @p1) && (@board[:c3] == @p1)) ||
	//     ((@board[:a3] == @p1) && (@board[:b2] == @p1) && (@board[:c1] == @p1))
	//     puts "Player #{@p1} is the winner!"
	//     puts "Do you want to play again? Y or N?"
	//     i = gets.chomp.upcase
	//     if i == "Y"
	//       start_game
	//     elsif i == "N"
	//       puts "Goodbye"
	//     end
	//     elsif ((@board[:a1] == @p2) && (@board[:a2] == @p2) && (@board[:a3] == @p2)) ||
	//       ((@board[:b1] == @p2) && (@board[:b2] == @p2) && (@board[:b3] == @p2)) ||
	//       ((@board[:c1] == @p2) && (@board[:c2] == @p2) && (@board[:c3] == @p2)) ||
	//       ((@board[:a1] == @p2) && (@board[:b1] == @p2) && (@board[:b1] == @p2)) ||
	//       ((@board[:a2] == @p2) && (@board[:b2] == @p2) && (@board[:c2] == @p2)) ||
	//       ((@board[:a3] == @p2) && (@board[:b3] == @p2) && (@board[:c3] == @p2)) ||
	//       ((@board[:a1] == @p2) && (@board[:b2] == @p2) && (@board[:c3] == @p2)) ||
	//       ((@board[:a3] == @p2) && (@board[:b2] == @p2) && (@board[:c1] == @p2))
	//       puts "Player #{@p2} is the winner!"
	//       puts "Do you want to play again? Y or N?"
	//       i = gets.chomp.upcase
	//       if i == "Y"
	//         start_game
	//       elsif i == "N"
	//         puts "Goodbye"
	//       end
	//    elsif (@board[:a1] == @p1 || @board[:a1] == @p2) &&
	//       (@board[:a2] == @p1 || @board[:a2] == @p2) &&
	//      (@board[:a3] == @p1 || @board[:a3] == @p2) &&
	//      (@board[:b1] == @p1 || @board[:b1] == @p2) &&
	//      (@board[:b2] == @p1 || @board[:b2] == @p2) &&
	//      (@board[:b3] == @p1 || @board[:b3] == @p2) &&
	//      (@board[:c1] == @p1 || @board[:c1] == @p2) &&
	//      (@board[:c2] == @p1 || @board[:c2] == @p2) &&
	//      (@board[:c3] == @p1 || @board[:c3] == @p2)
	//      puts "Tie Game"
	//      puts "Do you want to play again? Y or N?"
	//      i = gets.chomp.upcase
	//      if i == "Y"
	//        start_game
	//      elsif i == "N"
	//        puts "Goodbye"
	//      end
	//     else
	//       player_turn
	//    end
	//  end
	// }

	for(var i = 0; i < squares.length; i++) {
		// When you click a square, runs the `add_mark` method.
		if (i%2==0) {
			squares[i].addEventListener("click", add_markO);
		} else {
			squares[i].addEventListener("click", add_markX);
		}
	}
}
// <td>-</td> => <td>X</td>
// <td class="marked" data-player="x" >-</td>
