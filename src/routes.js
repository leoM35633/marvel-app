import AboutPage from './pages/AboutPage';
import CharactersPage from './pages/CharactersPage';
import ContactPage from './pages/ContactPage';
import Layout from './Layout';
import NotFoundPage from './pages/NotFoundPage';
import CharacterDetailPage from './pages/CharacterDetailPage'; // ajout du composant détail

import { getCharacters, getCharacterById } from './api/characters-api';

// routes of the application
const routes = [
{
    path: "/",
    Component: Layout,
    children: [
        {
        // main page
        index: true,
        loader: async ({ request }) => {
            // read query params from URL
            const url = new URL(request.url);
            const sort = url.searchParams.get('sort') || 'name';
            const order = url.searchParams.get('order') || 'asc';
            return { characters: await getCharacters(sort, order), sort, order };
        },
        Component: CharactersPage
        },
        {
        // détail personnage
        path: "/character/:id",
        loader: async ({ params }) => {
            return { character: await getCharacterById(params.id) };
        },
        Component: CharacterDetailPage
        },
        {
        // about page
        path: "/about",
        Component: AboutPage
        },
        {
        // contact page
        path: "/contact",
        Component: ContactPage
        },
        {
        // 404 page
        path: "*",
        Component: NotFoundPage
        }
    ],
},
]
export default routes;