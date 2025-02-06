alert("Le script est bien chargé !");

const drawLine = ("-").repeat(40);
/************************************** Définition de variables **************************************/

const storeName = "MNS";

const nbPotion = 10;
const pricePotion = 20;
const openStore = true;

/************************************** Affichage conditionnel **************************************/
console.log(drawLine);

console.log("Version if");
if (openStore) console.log(`Bienvenue dans la boutique ${storeName} Aventurier !`);
else console.log(`La boutique ${storeName} est fermée`);
console.log(drawLine);

console.log("Version switch");
switch (openStore) {
    case true:
        console.log(`Bienvenue dans la boutique ${storeName} Aventurier !`);
        break;
    case false:
        console.log(`La boutique ${storeName} est fermée`);
        break;
    default:
        console.log("Choix inconnu");
        break;
}
console.log(drawLine);

const arrayChoice = [
    "1 : Le nom de la boutique",
    "2 : Le nom du Sorcier",
    "3 : Le prix d'une potion de soin",
    "4 : La quantité d'une potion de soin",
    "Q : Quitter"
];

// Fonction pour afficher le menu
function afficherMenu() {
    let menu = "Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔\n\n";
    for (let i = 0; i < arrayChoice.length; i++) {
        menu += arrayChoice[i] + "\n";
    }
    return menu;
}

// Fonction pour gérer le choix de l'utilisateur
function demanderChoix() {
    let choix;
    do {
        choix = prompt(afficherMenu() + "\nEntre un chiffre entre 1 et 4, ou 'Q' pour quitter :").trim().toLowerCase();

        if (choix === "q") {
            alert("👋 Au revoir, Aventurier ! Que la magie soit avec toi !");
            console.log("👋 Au revoir, Aventurier ! Que la magie soit avec toi !");
            return;
        }

        switch (parseInt(choix)) {
            case 1:
                alert("🏪 Le nom de la boutique est : 'L'Antre Mystique'.");
                console.log("🏪 Le nom de la boutique est : 'L'Antre Mystique'.");
                break;
            case 2:
                alert("🔮 Le nom du Sorcier est : 'Merlin l'Enchanteur'.");
                console.log("🔮 Le nom du Sorcier est : 'Merlin l'Enchanteur'.");
                break;
            case 3:
                alert("🧪 Le prix d'une potion de soin est de 10 pièces d'or.");
                console.log("🧪 Le prix d'une potion de soin est de 10 pièces d'or.");
                break;
            case 4:
                alert("📦 Il reste 5 potions de soin en stock.");
                console.log("📦 Il reste 5 potions de soin en stock.");
                break;
            default:
                alert("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕");
                console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕");
        }
    } while (choix !== "q"); // Répéter tant que l'utilisateur ne quitte pas
}

// Lancer le programme
demanderChoix();

