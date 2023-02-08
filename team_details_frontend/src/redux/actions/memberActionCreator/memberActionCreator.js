import axios from "axios";
import { memberUrl } from "../../../constants/config";
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

export const addMember = async (member) => {
  const { firstname, lastname, email, role, primaryStack } = member;
  const newMember = { firstname, lastname, email, role, primaryStack };
  try {
    console.log("member", newMember);
    const data = await axios.post(`${memberUrl}/add`, newMember);
    return { type: ADD_MEMBER, payload: data };
  } catch (error) {
    return { type: ADD_MEMBER_ERROR, payload: error.message };
  }
};

export const updateMember = async (id, member) => {
  try {
    const data = await axios.put(`${memberUrl}/${id}`, member);
    return { type: UPDATE_MEMBER, payload: data };
  } catch (error) {
    return { type: UPDATE_MEMBER_ERROR, payload: error.message };
  }
};

export const deleteMember = async (id) => {
  try {
    const data = await axios.delete(`${memberUrl}/${id}`);
    return { type: DELETE_MEMBER, payload: data };
  } catch (error) {
    return { type: DELETE_MEMBER_ERROR, payload: error.message };
  }
};

export const getMember = async (id) => {
  try {
    const data = await axios.get(`${memberUrl}/${id}`);
    return { type: GET_MEMBER_DETAILS, payload: data };
  } catch (error) {
    return { type: GET_MEMBER_DETAILS_ERROR, payload: error.message };
  }
};
