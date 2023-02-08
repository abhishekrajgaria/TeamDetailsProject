import { GET_TEAM, GET_TEAM_ERROR } from "../../actionTypes";

export const teamReducer = (state = {team: [], message: null}, action) => {
    // console.log("action", action);
    switch(action.type){
        case GET_TEAM:
            return {
                ...state,
                team: action.payload.data,
            };
        case GET_TEAM_ERROR:
            return {
                ...state,
                message: action.payload,
            }
        default:
            return state;
    }
}