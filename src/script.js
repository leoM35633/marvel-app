async function getCharacters() {
  try {
    const response = await fetch('http://localhost:3000/data/characters.json');
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des personnages');
    }
    const data = await response.json();
    console.log('Personnages Marvel:', data);
  } catch (error) {
    console.error(error);
  }
}

// Appel de la fonction au chargement du script
async function getCharacters() {
  try {
    const response = await fetch('http://localhost:3000/data/characters.json');
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des personnages');
    }
    const data = await response.json();

    // Sélectionne la liste UL avec l'id "characters"
    const ul = document.getElementById('characters');
    ul.innerHTML = ""; // Vide la liste avant d'ajouter les éléments

    // Pour chaque personnage, crée un LI avec l'id et le nom
    data.forEach(character => {
      const li = document.createElement('li');
      li.id = `idPers${character.id}`;
      li.textContent = character.name;
      ul.appendChild(li);
    });
  } catch (error) {
    console.error(error);
  }
}

// Appel de la fonction au chargement du script
getCharacters();