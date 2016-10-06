/**
 * Created by dp-ptcstd-34 on 10/5/2016.
 */

import { SET_YEAR } from '../constants/Page'
import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from'../constants/Page'

export function setYearAction(year) {
    return {
        type: SET_YEAR,
        payload: year
    }
}

export function getPhotos(year) {
    return (dispatch) => {

        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: year
        });

        setTimeout(() => {
            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: [1, 2, 3, 4, 5]
            })
        }, 2000);


        /**
         Вместо "setTimeout" в реальной жизне нужно будет отправить запрос на сервер и когда он исполниться
         сделать  dispatch с новы типом.
         Это достигается за счет добавления "applyMiddleware" в "configureStore"
         при создании стора "createStore(rootReducer, initialState, applyMiddleware(thunk, logger))"

        $.ajax(url)
            .success(
                dispatch({
                    type: GET_PHOTOS_SUCCESS,
                    payload: response.photos
                })
            )
            .error(
                dispatch({
                    type: GET_PHOTOS_FAILURE,
                    payload: response.error,
                    error: true
                })
            )*/
    }
}