import { combineReducers, createStore } from "redux";
import { teamReducer } from "./teamReducer/teamReducer";
import {
  getMemberReducer,
  addMemberReducer,
  updateMemberReducer,
  deleteMemberReducer,
} from "./memberReducer/memberReducer";

const combineReducer = combineReducers({
  teamReducer,
  getMemberReducer,
  addMemberReducer,
  updateMemberReducer,
  deleteMemberReducer,
});

const reducerStore = createStore(combineReducer);
export default reducerStore;
