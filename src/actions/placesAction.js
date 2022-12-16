import {GET_PLACES, GET_PLACES_ERROR} from '../types'
import axios from 'axios'
import {baseUrls} from "../constants";

export const getPlaces = () => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:3003/places`);
        dispatch({
            type: GET_PLACES, payload: res.data
        })
    } catch (e) {
        console.log("err", e)
        dispatch({
            type: GET_PLACES_ERROR, payload: e,
        })
    }

}