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

// export const popularGamerURL = () => `https://api.rawg.io/api/games?key=bd6ac120d3044251b658797fd96bd0ca&dates=2019-09-01,2019-09-30&platforms=18,1,7`;
export const gameDetailsURL = (game_id) => `https://api.rawg.io/api/games/${game_id}?key=bd6ac120d3044251b658797fd96bd0ca`;
// export const gameDetailsURL = (game_id) => `${base_url}${KEY}games/${game_id}`