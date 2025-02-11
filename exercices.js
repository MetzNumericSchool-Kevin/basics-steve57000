const drawLine = ("-").repeat(40);
/************************************** Définition de variables **************************************/

const storeName = "MNS";
let nbPotion = 10;
const pricePotion = 20;
const openStore = true;
const wizard = "Archibald"

// L'argent de l'aventurier
let myMoney = 100;

/************************************** Affichage conditionnel **************************************/
console.log(drawLine);

console.log("Version if");
if (openStore) console.log(`Bienvenue dans la boutique ${storeName} Aventurier !`);
else console.log(`La boutique ${storeName} est fermée`);
console.log(drawLine);

/************************************** Affichage conditionnel switch **************************************/
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
        console.log(afficherMenu());
        choix = prompt(afficherMenu() + "\nEntre un chiffre entre 1 et 4, ou 'Q' pour quitter :").trim().toLowerCase();
        if (choix === "q") {
            console.log("👋 Au revoir, Aventurier ! Que la magie soit avec toi !");
            alert("👋 Au revoir, Aventurier ! Que la magie soit avec toi !");
            return;
        }

        switch (parseInt(choix)) {
            case 1:
                console.log(`🏪 Le nom de la boutique est : ${storeName}.`);
                alert(`🏪 Le nom de la boutique est : ${storeName}.`);
                break;
            case 2:
                console.log(`🔮 Le nom du Sorcier est : ${wizard}.`);
                alert(`🔮 Le nom du Sorcier est : ${wizard}.`);
                break;
            case 3:
                console.log(`🧪 Le prix d'une potion de soin est de ${pricePotion} pièces d'or.`);
                alert(`🧪 Le prix d'une potion de soin est de ${pricePotion} pièces d'or.`);
                break;
            case 4:
                console.log(`📦 Il reste ${nbPotion} potions de soin en stock.`);
                alert(`📦 Il reste ${nbPotion} potions de soin en stock.`);
                break;
            default:
                console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕");
                alert("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕");
        }
    } while (choix !== "q"); // Répéter tant que l'utilisateur ne quitte pas
}

// Lancer le programme
demanderChoix();

/************************************** Achat de potions **************************************/
function acheterPotion() {
    while (nbPotion > 0 && myMoney > pricePotion) {
        let quantityPotion;
        do {
            quantityPotion = parseInt(prompt(`Combien de potions de soin souhaitez-vous acheter ? (Stock disponible : ${nbPotion})`));

            if (isNaN(quantityPotion) || quantityPotion <= 0 || quantityPotion > nbPotion) {
                console.log(`❌ Veuillez entrer un nombre valide entre 1 et ${nbPotion}.`)
                alert(`❌ Veuillez entrer un nombre valide entre 1 et ${nbPotion}.`);
            }
            if (myMoney <= pricePotion) {
                console.log(`❌ Vous n'avez pas assez d'argent.`)
                alert(`❌ Vous n'avez pas assez d'argent.`);
            }
        } while (isNaN(quantityPotion) || quantityPotion <= 0 || quantityPotion > nbPotion || myMoney < pricePotion);

        // Calcul du prix total
        const priceTotal = quantityPotion * pricePotion;
        console.log(`💰 Prix de ${quantityPotion} potions de soins : ${priceTotal} 🪙 mon cher Aventurier. 💸`);
        alert(`💰 Prix de ${quantityPotion} potions de soins : ${priceTotal} 🪙 mon cher Aventurier. 💸`);

        // Mise à jour du stock
        nbPotion -= quantityPotion;
        myMoney -= priceTotal;

        console.log(`Il vous reste ${myMoney}💰`);
        alert(`Il vous reste ${myMoney}💰`);
        // Vérification du stock restant
        if (nbPotion > 0) {
            let continu = prompt(`Il reste ${nbPotion} potions en stock. Souhaitez-vous en acheter d'autres ? (Oui / Non)`).trim().toLowerCase();
            if (continu !== "oui" && continu !== "o") {
                console.log("Merci pour votre achat, aventurier ! À bientôt !");
                alert("Merci pour votre achat, aventurier ! À bientôt !");
                break;
            }
        }
        if (myMoney < pricePotion && myMoney <= 0) {
            console.log(`Désolé, vous n'avez plus assez d'argent, vous avez actuellement ${myMoney}`);
            alert(`Désolé, vous n'avez plus assez d'argent, vous avez actuellement ${myMoney}`);
        } else {
            console.log("😢 Désolé, toutes les potions sont vendues !");
            alert("😢 Désolé, toutes les potions sont vendues !");
        }
    }
}

// Lancer l'achat de potions
acheterPotion();

/************************************** Bourse de l'Aventurier **************************************/



