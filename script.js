function playGuess2() {
    var answer = parseInt(Math.random() * 100);
	var playerNum = 1;

	while (true) {
		var userAnswer = prompt("Ходит игрок № " + playerNum + ". Введите число от 0 до 100. Для выхода введите q");
		if (userAnswer == "q") {
			break;
		}
		userAnswer = parseInt(userAnswer);
		if (userAnswer > answer) {
			alert("Ваш ответ слишком большой");
		} else if (userAnswer < answer) {
			alert("Ваш ответ слишком маленький");
		} else if (userAnswer == answer) {
			alert("Вы угадали! Победил игрок № " + playerNum);
			break;
		} else {
			alert("Необходимо ввести число!");
		}

		if (playerNum == 1) {
			playerNum = 2;
		} else {
			playerNum = 1;
		}
	}
}
function playGuess(){
		var answer = parseInt ( Math.random () * 100 );
			var attempt = 1 ;
			var attemptsCount = 7 ;
			
			while (attempt <= attemptsCount) {
				var userAnswer = prompt ("Угадайте число от 0 до 100, у вас 7 попыток. Попытка № " + attempt);
				userAnswer = parseInt (userAnswer);
					if ( userAnswer > answer) {
					alert ("Ваш ответ слишком большой.");
					} else if ( userAnswer < answer) {
					alert ("Ваш ответ слишком маленький.");
					} else if (userAnswer == answer) {
					alert ( "Вы угадали!" );
					break ;
					} else {
					alert ("Необходимо ввести число!");
					}
				attempt++;
			}
			if ( attempt > attemptsCount) {
				alert ( "К сожалению вы не угадали. Было загадано число: " + answer);
				}
}