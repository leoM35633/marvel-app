import { describe, expect, test } from '@jest/globals'
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NumberOfCharacters from './NumberOfCharacters';

describe('NumberOfCharacters component', () => {

    test('renders "There is no character" when characters array is empty', () => {
        render(<NumberOfCharacters characters={[]} />);
        expect(screen.getByText('There is no character')).toBeInTheDocument();
    });

    test('renders "There is 1 character" when characters array has one character', () => {
        const characters = ['Character 1'];
        render(<NumberOfCharacters characters={characters} />);
        expect(screen.getByText('There is 1 character')).toBeInTheDocument();
    });
    test('renders "There is no character" when no characters are provided', () => {
        render(<NumberOfCharacters />);
        // screen.debug();
        expect(screen.getByText('There is no character')).toBeInTheDocument();
    });
    test('renders "There is 2 characters" (singular) when characters array has one character', () => {
        const characters = ['Spider-Man', 'Thor'];
        render(<NumberOfCharacters characters={characters} />);
        expect(screen.getByText('There are 2 characters')).toBeInTheDocument();
    });

});