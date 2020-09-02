
import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialState = {

    searchField: ''
}


// redux uses actions, reducers and store objects to implement state changes


export const searchRobots = (state=initialState, action={}) => {


    switch(action.type) {

        case CHANGE_SEARCH_FIELD:

            return Object.assign({}, state, { searchField: action.payload })

            //same as above, object destructuring or object spread
            //return {...state,searchField:action.payload}

            default:
                return state;
    }

}