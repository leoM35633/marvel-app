import characters from '../data/characters.json';

// Retourne la liste complète des personnages
export async function getCharacters() {
    // Simule un appel asynchrone
    return characters;
}

// Retourne un personnage par son id
export async function getCharacterById(id) {
    // On suppose que chaque personnage a un champ 'id'
    return characters.find(character => character.id === id);
}
