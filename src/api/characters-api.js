import characters from '../data/characters.json';

// Retourne la liste complète des personnages
export function getCharacters() {
    // Retourne directement le tableau
    return characters;
}

// Retourne un personnage par son id
export function getCharacterById(id) {
    // On suppose que chaque personnage a un champ 'id'
    return characters.find(character => character.id === id);
}
