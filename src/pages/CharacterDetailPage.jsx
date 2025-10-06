import React from "react";
import { useLoaderData } from "react-router";
import CharacterDetail from "../components/CharacterDetail";

export default function CharacterDetailPage() {
    const { character } = useLoaderData();

    return (
        <div>
            <h2>Détail du personnage</h2>
            <CharacterDetail character={character} />
        </div>
    );
}
