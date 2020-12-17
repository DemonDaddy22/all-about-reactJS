/* eslint-disable eqeqeq */
export const GITHUB_BASE = 'https://github.com/DemonDaddy22';
// eslint-disable-next-line no-undef
export const BASE_URL = process.env.NODE_ENV == 'production' ? '/all-about-reactJS' : '';
export const GITHUB_API_BASE = 'https://api.github.com';
export const POKEMON_API_BASE = 'https://pokeapi.co/api/v2/pokemon/';
export const POKEMON_TYPES = Object.freeze({
    electric: { bgColor: '#f6c913', color: '#FFF' },
    grass: { bgColor: '#6ac23d', color: '#FFF' },
    water: { bgColor: '#4578ec', color: '#FFF' },
    fire: { bgColor: '#ed6d11', color: '#FFF' },
    ground: { bgColor: '#dcb44c', color: '#FFF' },
    bug: { bgColor: '#98a51c', color: '#FFF' },
    normal: { bgColor: '#9d9c63', color: '#FFF' },
    poison: { bgColor: '#913992', color: '#FFF' },
    flying: { bgColor: '#8f6feb', color: '#FFF' },
    ice: { bgColor: '#7fcece', color: '#FFF' },
    rock: { bgColor: '#a59031', color: '#FFF' },
    steel: { bgColor: '#a0a0bf', color: '#FFF' },
    fairy: { bgColor: '#e87990', color: '#FFF' },
    ghost: { bgColor: '#654e87', color: '#FFF' },
    psychic: { bgColor: '#f7366f', color: '#FFF' },
    fighting: { bgColor: '#ae2b24', color: '#FFF' },
    dark: { bgColor: '#654e40', color: '#FFF' },
    dragon: { bgColor: '#5e1cf6', color: '#FFF' },
});
export const PLACEHOLDER_POSTS_API = 'https://jsonplaceholder.typicode.com/posts';
export const RANDOM_AVATAR_API = 'https://uifaces.co/api';