const base_url = 'https://api.rawg.io/api/games';
const KEY = '?key=bd6ac120d3044251b658797fd96bd0ca';

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    return month < 10 ? `0${month}` : month
}

const getCurrenDate = () => {
    const day = new Date().getDate();
    return day < 10 ? `0${day}` : day
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrenDate();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

const popular_games = `&games=${lastYear},${currentDay}&ordering=-rating&page_size=10`;
const upcoming_games = `&games=${lastYear}&ordering=-rating&page_size=10`;
const newGames = `&games=${lastYear},${currentDate}&ordering=-released&page_size=10`;


export const popularGamerURL = () => `${base_url}${KEY}${popular_games}`;
export const upcomingGamerURL = () => `${base_url}${KEY}${upcoming_games}`;
export const newGamerURL = () => `${base_url}${KEY}${newGames}`;

export const gameDetailsURL = (game_id) => `https://api.rawg.io/api/games/${game_id}?key=bd6ac120d3044251b658797fd96bd0ca`;
export const gameScreenURL = (game_id) => `https://api.rawg.io/api/games/${game_id}/screenshots?key=bd6ac120d3044251b658797fd96bd0ca`;
