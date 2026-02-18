function calculerOracle() {
var scores = {
savoir: 0, tech: 0, sante: 0, energie: 0,
agro: 0, urbain: 0, finance: 0, defense: 0
};

const coefficients = {
  tech: 0.67,
  savoir: 0.80,
  finance: 1.00,
  sante: 1.00,
  agro: 1.33,
  urbain: 1.33,
  defense: 1.33,
  energie: 1.33,
};

var chineActive = false;

for (var i = 1; i <= 12; i++) {
var radio = document.querySelector('input[name="q' + i + '"]:checked');
if (radio) {
var val = radio.value;if (scores[val] !== undefined) {
scores[val] = scores[val] + coefficients[val];
}

if (i === 8 && val === "oui") {
chineActive = true;
}
}
}

var mention = document.getElementById("mention").value;
var budgetRadio = document.querySelector('input[name="q12"]:checked');

if (mention === "" || !budgetRadio) {
alert("Oups ! L'Oracle a besoin de ta mention et de ton budget pour conclure.");
return;
}

var estPrive = (budgetRadio.value === "prive");

var meilleurEco = "tech";
var maxPoints = -1;

for (var eco in scores) {
if (scores[eco] > maxPoints) {
maxPoints = scores[eco];
meilleurEco = eco;
}
}

var infos = {
tech: ["👩‍💻 Digital Tech & IA 🤖💻", "UM6P, ENSIAS, ENSA", "Harbin, Tsinghua", "L'algorithme ne doit jamais remplacer le jugement critique. Apprends à coder avec éthique pour que la machine reste au service de l'humain."],
sante: ["👩‍⚕️ Santé & Bio-Tech 🧬🏥", "FMP, UM6SS, UIASS", "Fudan, Zhejiang", "La technologie va transformer ton métier de soignant. Apprends à collaborer avec les machines de diagnostic pour augmenter ta précision médicale."],
savoir: ["👩‍🏫 Savoir & Recherche 🧪🎓", "ENS, Facultés, CNRST", "Peking University", "La transmission du savoir est le moteur de l'évolution. Apprends à vulgariser des concepts complexes pour inspirer la génération suivante."],
energie: ["👩‍🔧 Énergie & Industrie ⚡🚀", "EMI, ENSAM, EHTP", "Xi’an Jiaotong", "La transition écologique est le plus grand défi de notre siècle. Apprends à dompter les nouvelles énergies pour bâtir une industrie décarbonée."],
agro: ["👩‍🌾 Terre & Agro-Tech 🌿🚜", "IAV, ENAM, UM6P", "China Agricultural", "La sécurité alimentaire mondiale repose sur l'innovation. Apprends à fusionner la biologie et la technologie pour nourrir la planète durablement."],
urbain: ["👷 Architecture & Urbain 🏗️🏙️", "ENA, UIR, EAC", "Tongji University", "La ville de demain sera un organisme vivant et connecté. Apprends à concevoir des espaces qui respectent l'environnement tout en étant intelligents."],
finance: ["👩‍💼 Finance & Data 📊💎", "ISCAE, ENCG, INSEA", "Shanghai Jiao Tong", "La donnée est le nouvel or noir de l'économie mondiale. Apprends à traduire les chiffres en décisions stratégiques pour stabiliser les marchés."],
defense: ["👩‍✈️ Défense & Gouvernance 🛡️🎖️", "ERA, ARM, ERN", "Renmin University", "La sécurité nationale se joue désormais dans le cyber-espace. Apprends à diriger avec discipline pour protéger les infrastructures critiques de l'État."]
};

var listeEcoles = infos[meilleurEco][1];
if (estPrive) {
if (meilleurEco === "tech") listeEcoles += ", UIR, EMSI";
if (meilleurEco === "sante") listeEcoles += ", UM6SS, UIASS";
if (meilleurEco === "finance") listeEcoles += ", ESCA, HEM";
}

var strategie = "";
if (mention === "tb") {
strategie = "Voie d'excellence (Maroc ou International).";
} else if (mention === "bien") {
strategie = "Grandes écoles nationales (Concours).";
} else {
strategie = "Passerelles, FST ou Certifications.";
}

var zone = document.getElementById("resultat");
var testZone = document.getElementById("etape-test");

testZone.classList.add("hidden");
zone.classList.remove("hidden"); 

var htmlFinal = "<h2>🔮 Ton Oracle O²</h2>";
htmlFinal += "<p><strong>Écosystème :</strong> " + infos[meilleurEco][0] + "</p>";
htmlFinal += "<p><strong>Maroc :</strong> " + listeEcoles + " 🇲🇦</p>";

if (chineActive) {
htmlFinal += "<p><strong>Chine :</strong> " + infos[meilleurEco][2] + " 🇨🇳</p>";
}

htmlFinal += "<p><strong>Stratégie :</strong> " + strategie + "</p>";
htmlFinal += '<div class="warning">💡 ' + infos[meilleurEco][3] + '</div>';
htmlFinal += '<div class="debug">Analyse terminée <=> Le parcours n\'est jamais figé <=> L\'avenir reste à construire.</div>';
htmlFinal += '<br><div class="center"><button onclick="location.reload()">Recommencer</button></div>';

zone.innerHTML = htmlFinal;
}