function NumberOfCharacters({ characters = [] }) {
  return (
    <p>
      {characters.length > 0
        ? `There is ${characters.length} character${characters.length > 1 ? 's' : ''}`
        : 'There is no character'}
    </p>
  );
}

export default NumberOfCharacters;