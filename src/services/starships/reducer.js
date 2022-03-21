import { SET_STARSHIPS } from "./types";

export default function starshipReducer(state = [], action) {
    switch (action.type) {
        case SET_STARSHIPS: 
            return {
                ...state,
                allShips: action.value
            }
        default:
            return state;
    }
}