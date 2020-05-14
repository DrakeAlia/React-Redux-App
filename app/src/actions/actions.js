import axios from 'axios'; 

// three action types our exported for use by the reducer
export const FETCH_SHOW_START = 'FETCH_SHOW_START'; 
export const FETCH_SHOW_SUCCESS = 'FETCH_SHOW_SUCCESS';
export const FETCH_SHOW_FAIL = 'FETCH_SHOW_FAIL';

// getTVShow fetches data from the api and dispatches the action creator for use by the TVCard component
export const getTVShow = () => dispatch => { 
    const generateNumber = (min, max) => { 
        let num = 1;
        num = Math.floor(Math.random()*(max-min+1)+min);
        return num;
    }

    console.log(random);
    dispatch({ type: FETCH_SHOW_START });
    axios
        .get(`https://api.themoviedb.org/discover/movie?sort_by=popularity.desc`)
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_SHOW_SUCCESS, payload: res.data});
        })
        .catch(err => { dispatch({ type: FETCH_SHOW_FAIL, payload: err })});
}