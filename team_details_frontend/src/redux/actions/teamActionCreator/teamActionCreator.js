import axios from "axios";
import { teamUrl } from "../../../constants/config";
import { GET_TEAM, GET_TEAM_ERROR } from "../../actionTypes";

export const getTeam = async () => {
  try {
    console.log("Inside GET TEAM");
    console.log("Team URL ", teamUrl)
    const {data} = await axios.get(teamUrl);
    console.log("data", data);
    return {type: GET_TEAM, payload: data};
  } catch (error) {
    return {type: GET_TEAM_ERROR, payload: error.message}
  }
};
