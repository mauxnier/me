//Typewriter
(function($) {
	var aiMsg = ["Bonjour et bienvenue !", "Je m'appelle Killian Monnier.", "Je suis étudiant. 🎓", "Je suis développeur. 💻", "Bienvenue"];
    var num = 0;
    
	$(document).ready(function() {
		var inputAI = $("#reg_ai");
		
		aiMSGLoop(aiMsg);
		function aiMSGLoop(wordArray) {
			// store new element so AI knows where to write
			var newElement = $("<h1></h1>").appendTo(inputAI);
			//my type writer uses object function so no need to code 
			//long function every time
			newElement.writeText(wordArray[num]).then(function() {
				setTimeout(function(){ 
					newElement
					.removeText(wordArray[num])
					.then(function() {
					aiMSGLoop(wordArray);
						
				});
					 }, 2500);
            });
            num++;
            if (num == wordArray.length()-1) num = 0;
		}
	});
	//AI Text typer
	$.fn.writeText = function(content) {
		var elem = this;
		elem.addClass("typewriter");
		return new Promise(function(resolve, reject) {
			var contentArray = content.split(""),
				current = 0;
			var rand = 90;
			setInterval(function() {
				rand = Math.round(Math.random() * (300 + 1050));
				if (current < contentArray.length) {
					elem.text(elem.text() + contentArray[current++]);
				} else {
					resolve();
				}
			}, rand);
		});
	};
	//AI Text Typer backspace
	$.fn.removeText = function(content) {
		var elem = this;
		return new Promise(function(resolve, reject) {
			var contentArray = content.split("");
			var current = 0;
			setInterval(function() {
				if (current < contentArray.length) {
					elem.text(elem.text().slice(0, -1));
					current++;
				} else {
					elem.remove();
					resolve();
				}
			}, 70);
		});
	};
})(jQuery);