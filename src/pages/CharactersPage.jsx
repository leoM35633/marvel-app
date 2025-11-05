import React, { useEffect, useState } from "react";
import CharactersList from "../components/CharactersList";
import NumberOfCharacters from "../components/NumberOfCharacters";
import { useLoaderData, useNavigate } from "react-router";

const CharactersPage = () => {
    document.title = "Characters | Marvel App";
    const { characters, sort: initialSort = 'name', order: initialOrder = 'asc' } = useLoaderData();
    const navigate = useNavigate();

    const [sort, setSort] = useState(initialSort);
    const [order, setOrder] = useState(initialOrder);

    useEffect(() => {
        setSort(initialSort);
        setOrder(initialOrder);
    }, [initialSort, initialOrder]);

    const updateUrl = (newSort, newOrder) => {
        const qs = `?sort=${encodeURIComponent(newSort)}&order=${encodeURIComponent(newOrder)}`;
        navigate(qs, { replace: false });
    };

    const onSortChange = (e) => {
        const newSort = e.target.value;
        setSort(newSort);
        updateUrl(newSort, order);
    };

    const onOrderChange = (e) => {
        const newOrder = e.target.value;
        setOrder(newOrder);
        updateUrl(sort, newOrder);
    };

    return (
        <>
            <h2>Marvel Characters</h2>

            <div>
                <label>
                    Sort by:&nbsp;
                    <select value={sort} onChange={onSortChange}>
                        <option value="name">Name</option>
                        <option value="modified">Date modified</option>
                    </select>
                </label>
                &nbsp;&nbsp;
                <label>
                    Order:&nbsp;
                    <select value={order} onChange={onOrderChange}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </label>
            </div>

            <br />

            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;