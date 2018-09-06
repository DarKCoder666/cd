import { GET_BUILDINGS_DATA, GET_BUILDING_DATA } from './types';

export const fetchBuildings = () => dispatch => {
    dispatch({
        type: GET_BUILDINGS_DATA
    })
}

export const fetchBuilding = (lot) => dispatch => {
    dispatch({
        type: GET_BUILDING_DATA,
        payload: {lot}
    })
}