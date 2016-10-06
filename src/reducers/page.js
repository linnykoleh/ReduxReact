/**
 * Created by dp-ptcstd-34 on 10/5/2016.
 */

import { SET_YEAR } from '../constants/Page';
import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../constants/Page'

const initialState = {
    year: 2016,
    photos: [],
    fetching: false
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case SET_YEAR:
            return Object.assign({}, state, {year: action.payload, fetching: false});

        case GET_PHOTOS_REQUEST:
            return Object.assign({}, state, {year: action.payload, fetching: true });

        case GET_PHOTOS_SUCCESS:
            return Object.assign({}, state, {photos: action.payload, fetching: false });
        default:
            return state;
    }
}