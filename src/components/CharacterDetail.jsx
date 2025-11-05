import React from "react";

export default function CharacterDetail({ character }) {
    if (!character) {
        return <div>No character</div>;
    }

    const { name, description, modified, thumbnail } = character;
    const imageUrl =
        thumbnail && thumbnail.path && thumbnail.extension
            ? `${thumbnail.path}.${thumbnail.extension}`
            : null;

    return (
        <div>
            <h3>{name}</h3>
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={name}
                />
            )}
            <p><strong>Description :</strong> {description || "Aucune description."}</p>
            <p><strong>Modifié le :</strong> {modified}</p>
        </div>
    );
}