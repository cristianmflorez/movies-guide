import {MOVIE_RANKING_COLORS} from './constants';

const getColorByRanking = (ranking) => MOVIE_RANKING_COLORS[parseInt(ranking)];

export default getColorByRanking;