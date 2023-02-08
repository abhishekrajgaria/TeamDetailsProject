import {
  GET_MEMBER_DETAILS,
  GET_MEMBER_DETAILS_ERROR,
  ADD_MEMBER,
  ADD_MEMBER_ERROR,
  UPDATE_MEMBER,
  UPDATE_MEMBER_ERROR,
  DELETE_MEMBER,
  DELETE_MEMBER_ERROR,
} from "../../actionTypes";

const initialMember = {
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  role: "",
  primaryStack: "",
};

export const getMemberReducer = (
  state = { member: initialMember, message: null },
  action
) => {
  console.log("action", action);
  switch (action.type) {
    case GET_MEMBER_DETAILS:
      console.log("Inside ", GET_MEMBER_DETAILS);
      return {
        ...state,
        member: action.payload.data.data,
        message: null,
      };
    case GET_MEMBER_DETAILS_ERROR:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export const addMemberReducer = (
  state = { success: null, message: null },
  action = {}
) => {
  switch (action.type) {
    case ADD_MEMBER:
      return {
        ...state,
        success: action.payload.data,
      };
    case ADD_MEMBER_ERROR:
      return {
        ...state,
        success: false,
        message: action.payload,
      };
    case "RESET_ADD_MEMBER":
      return { success: null, message: null };
    default:
      return state;
  }
};

export const updateMemberReducer = (
  state = { success: null, message: null },
  action = {}
) => {
  switch (action.type) {
    case UPDATE_MEMBER:
      console.log("action", action.payload);
      return {
        ...state,
        success: action.payload.data,
      };
    case UPDATE_MEMBER_ERROR:
      return {
        ...state,
        success: false,
        message: action.payload,
      };
    case "RESET_UPDATE_MEMBER":
      return { success: null, message: null };
    default:
      return state;
  }
};

export const deleteMemberReducer = (
  state = { success: null, message: null },
  action = {}
) => {
  switch (action.type) {
    case DELETE_MEMBER:
      return {
        ...state,
        success: action.payload.data,
      };
    case DELETE_MEMBER_ERROR:
      return {
        ...state,
        success: false,
        message: action.payload,
      };
    case "RESET_DELETE_MEMBER":
      return { success: null, message: null };
    default:
      return state;
  }
};
