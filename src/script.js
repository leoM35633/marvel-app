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
getCharacters();