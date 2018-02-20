//Fonction permettant la transformation du menu sur support mobile

function menuNavMobile() {
    var x = document.getElementById("menuNavMob");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

//Fonctions gérant l'affichage des compétences dans l'overlay

$("#C1").click(function(){
	$("#titre_overlay").text('Compétences (en cours d\'acquisition)');
	$("#liste_overlay").html('<li>Capacité à maquetter une application ;</li><br/><li>Capacité à concevoir une base de données ;</li><br/><li>Capacité à mettre en place une base de données ;</li><br/><li>Capacité à développer une interface utilisateur ;</li><br/><li>Capacité à développer des composants d\'accès aux données ;</li><br/></ul>');
});

$("#C2").click(function(){
	$("#titre_overlay").text('Compétences (en cours d\'acquisition)');
	$("#liste_overlay").html('<li>Capacité à développer des pages web en lien avec une base de données ;</li><br/><li>Capacité à mettre en œuvre une solution de gestion de contenu ou e-commerce ;</li><br/><li>Capacité à développer une application simple de mobilité numérique ;</li><br/><li>Capacité à utiliser l\’anglais dans son activité professionnelle en informatique ;</li><br/>');
});

$("#C3").click(function(){
	$("#titre_overlay").text('Compétences');
	$("#liste_overlay").html('<li>Capacité à organiser le travail ;</li><br/><li>Capacité à travailler de manière autonome ;</li><br/><li>Capacité à faire preuve de discrétion concernant le travail ;</li><br/>');
});

$("#C4").click(function(){
	$("#titre_overlay").text('Compétences');
	$("#liste_overlay").html('<li>Capacité à travailler en équipe ;</li><br/><li>Capacité d\'adaptation aux changements de priorité dans le travail ;</li><br/>');
});

$("#C5").click(function(){
	$("#titre_overlay").text('Compétences');
	$("#liste_overlay").html('<li>Capacité à faire preuve de rigueur dans le travail ;</li><br/><li>Savoir être ponctuel ;</li><br/><li>Savoir être consciencieux dans le travail ;</li><br/>');
});

$("#C6").click(function(){
	$("#titre_overlay").text('Compétences');
	$("#liste_overlay").html('<li>Sens du contact humain ;</li><br/>');
});

$("#C7").click(function(){
	$("#titre_overlay").text('Compétences');
	$("#liste_overlay").html('<li>Capacité à communiquer en anglais (niveau scolaire) ;</li><br/>');
});