import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getMember,
  updateMember,
} from "../../redux/actions/memberActionCreator/memberActionCreator";

const EditMember = () => {
  const { success, message } = useSelector(
    (store) => store.updateMemberReducer
  );
  const { member } = useSelector((store) => store.getMemberReducer);
  const [newMember, setNewMember] = useState(member);
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    return async () => {
      dispatch(await getMember(id));
    };
  }, [dispatch, id]);

  useEffect(() => {
    setNewMember(member);
  }, [member]);

  useEffect(() => {
    if (success !== null) {
      setTimeout(() => {
        dispatch({ type: "RESET_UPDATE_MEMBER" });
        navigate(`/member/${id}`);
      }, 5000);
    }
  }, [navigate, success, dispatch, id]);

  const changeHandler = (event) => {
    console.log("event", event.target.name, event.target.value);
    const tempMember = { ...newMember };
    tempMember[event.target.name] = event.target.value;
    setNewMember(tempMember);
  };

  const saveHandler = async () => {
    dispatch(await updateMember(id, newMember));
  };

  const cancelHandler = () => {
    navigate(`/member/${id}`);
  };

  return (
    <div className="container" style={{ width: "32rem" }}>
      {success == null && (
        <form>
          <div className="row">
            <div className="col mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstname"
                className="form-control"
                value={newMember.firstname}
                onChange={changeHandler}
              />
            </div>
            <div className="col mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastname"
                className="form-control"
                value={newMember.lastname}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={newMember.email}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <input
              type="text"
              name="role"
              className="form-control"
              value={newMember.role}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Select Your Primary Stack</label>
            <select
              className="form-select"
              name="primaryStack"
              value={newMember.primaryStack}
              onChange={changeHandler}
            >
              <option defaultValue disabled>
                Select
              </option>
              <option value="React">React</option>
              <option value="GoLang">GoLang</option>
            </select>
          </div>
          <div className="row">
            <div className="col">
              <button
                type="submit"
                className="container-fluid btn btn-danger"
                onClick={cancelHandler}
              >
                Cancel
              </button>
            </div>

            <div className="col">
              <input
                type="button"
                className="container-fluid btn btn-primary"
                onClick={saveHandler}
                value="Save"
              />
            </div>
          </div>
        </form>
      )}
      {success && (
        <h4 className="text-success text-cetner">
          Updated Successfully, You will be redirected Member Details page.
        </h4>
      )}
      {success === false && (
        <h4 className="text-danger text-center">{message}</h4>
      )}
    </div>
  );
};

export default EditMember;
