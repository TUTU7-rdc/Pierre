// data.js
const BIBLIOTHEQUE_DATA = [
    { titre: "Les Fondements de la Foi", cat: "THÉOLOGIE", desc: "Analyse des textes anciens.", fichier: "fichiers/livre1.pdf", taille: "4.2 MB" },
    { titre: "Le Chemin de l'Éveil", cat: "MÉDITATION", desc: "Guide de prière quotidienne.", fichier: "fichiers/livre2.pdf", taille: "1.1 MB" }
];

const ENSEIGNEMENTS_DATA = [
    { 
        titre: "La Sagesse dans le Silence", 
        type: "VIDEO", 
        url: "https://www.youtube.com/embed/votre_id_video", // Lien embed
        desc: "Une série sur la méditation profonde." 
    },
    { 
        titre: "Le Pardon Libérateur", 
        type: "AUDIO", 
        url: "audios/enseignement1.mp3", // Fichier local
        desc: "Podcast sur la paix intérieure." 
    }
];

const EVENEMENTS_DATA = [
    { jour: "24", mois: "DÉC", titre: "Veillée de Noël", heure: "19:00", lieu: "Sanctuaire", cat: "Célébration" },
    { jour: "31", mois: "DÉC", titre: "Nuit de Traversée", heure: "22:00", lieu: "Esplanade", cat: "Prière" }
];