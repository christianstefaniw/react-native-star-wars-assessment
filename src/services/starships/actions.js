import axios from 'axios';

import { SET_ERROR, SET_STARSHIPS } from "./types";
import ApiUrls from '../../constants/api-urls';
import filterStarships from '../../helpers/filter-starships';

export function setStarships(starships) {
    return {
        type: SET_STARSHIPS,
        value: starships
    }
}

export function setError(error) {
    return {
        type: SET_ERROR,
        value: error,
    }
}

export function getStarships() {
    return async (dispatch) => {
        await axios.get(ApiUrls.STARSHIPS).then((ships) => {
            dispatch(setStarships(filterStarships(ships.data.results)));
        })
            .catch(() => {
                dispatch(setError('Failed to fetch ships'));
            });
    }
}