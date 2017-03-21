$(document).ready(function(){
	function colorChange(lien, couleur, shadow){
		$(lien).hover(function(){
			$("#design-top").css("background-color", couleur);
			$(".login-btn").css("background-color", couleur);
			$(".navbar").css("background-color", couleur);
			$(".navbar").css("box-shadow", shadow);
		});
	};

	colorChange ("#accueil", "#B5B1B3", "0 0 4rem #B5B1B3 inset , 0 0 2rem black inset, 0 0 2rem black");
	colorChange ("#actus", "#009839", "0 0 4rem #009839 inset , 0 0 2rem black inset, 0 0 2rem black");
	colorChange ("#contact", "#A8007F", "0 0 4rem #A8007F inset , 0 0 2rem black inset, 0 0 2rem black");
	colorChange ("#classement", "#006D37", "0 0 4rem #006D37 inset , 0 0 2rem black inset, 0 0 2rem black");
	colorChange ("#basket-planet", "#740083", "0 0 4rem #740083 inset , 0 0 2rem black inset, 0 0 2rem black");
	colorChange ("#calendrier", "#7FCD10", "0 0 4rem #7FCD10 inset , 0 0 2rem black inset, 0 0 2rem black");
	colorChange ("#inscription", "#9445A0", "0 0 4rem #9445A0 inset , 0 0 2rem black inset, 0 0 2rem black");
});

