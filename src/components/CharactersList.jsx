function CharactersList({ characters }) {
  console.log('CharactersList component rendered with characters:', characters); // Ajout du log
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id} id={`idPers${character.id}`}>
          {character.name}
        </li>
      ))}
    </ul>
  );
}

export default CharactersList;