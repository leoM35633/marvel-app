import { Link } from "react-router";

function CharactersList({ characters = [] }) {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id} id={`idPers${character.id}`}>
          <Link to={`/character/${character.id}`}>{character.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default CharactersList;