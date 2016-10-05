/**
 * Created by dp-ptcstd-34 on 10/5/2016.
 */

import { SET_YEAR } from '../constants/Page';

const initialState = {
    year: 2016,
    photos: []
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case SET_YEAR:
            return Object.assign({}, state, {year: action.payload});
        default:
            return state;
    }
}