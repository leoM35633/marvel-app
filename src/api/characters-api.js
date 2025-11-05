import characters from '../data/characters.json';

// Retourne la liste complète des personnages, triable
export function getCharacters(sort = 'name', order = 'asc') {
    // work on a shallow copy
    const items = [...characters];

    const multiplier = order === 'desc' ? -1 : 1;

    const compareName = (a, b) => {
        const na = (a.name || '').toLowerCase();
        const nb = (b.name || '').toLowerCase();
        return na.localeCompare(nb) * multiplier;
    };

    const compareModified = (a, b) => {
        const da = a.modified ? Date.parse(a.modified) : 0;
        const db = b.modified ? Date.parse(b.modified) : 0;
        return (da - db) * multiplier;
    };

    if (sort === 'modified') {
        items.sort(compareModified);
    } else {
        // default sort by name
        items.sort(compareName);
    }

    return items;
}

// Retourne un personnage par son id (tolérant string/number)
export function getCharacterById(id) {
    const target = String(id);
    const character = characters.find(c => String(c.id) === target);
    if (!character) {
        throw new Error(`Character with id ${id} not found`);
    }
    return character;
}
