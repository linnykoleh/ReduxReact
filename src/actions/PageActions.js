/**
 * Created by dp-ptcstd-34 on 10/5/2016.
 */

import { SET_YEAR } from '../constants/Page'

export function setYear(year) {
    return {
        type: SET_YEAR,
        payload: year
    }
}