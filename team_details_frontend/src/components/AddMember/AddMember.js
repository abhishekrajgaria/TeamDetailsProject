import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMember } from "../../redux/actions/memberActionCreator/memberActionCreator";

const initialMember = {
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  role: "",
  primaryStack: "",
};

const AddMember = () => {
  const { success, message } = useSelector((store) => store.addMemberReducer);
  const [member, setMember] = useState(initialMember);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickAddHandler = async () => {
    console.log("Add New Member");
    dispatch(await addMember(member));
    // navigate("/team");
  };

  useEffect(() => {
    if (success !== null) {
      setTimeout(() => {
        dispatch({ type: "RESET_ADD_MEMBER" });
        navigate("/team");
      }, 5000);
    }
  }, [navigate, success, dispatch]);

  const handleChange = (event) => {
    // console.log("event name", event.target.name);
    // console.log("event value", event.target.value);
    const tempMember = { ...member };
    tempMember[event.target.name] = event.target.value;
    // console.log("tempMember", tempMember)
    setMember(tempMember);
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
                onChange={handleChange}
              />
            </div>
            <div className="col mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastname"
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <input
              type="text"
              name="role"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Select Your Primary Stack</label>
            <select
              className="form-select"
              name="primaryStack"
              onChange={handleChange}
            >
              <option defaultValue disabled>
                Select
              </option>
              <option value="React">React</option>
              <option value="GoLang">GoLang</option>
            </select>
          </div>
          <input
            type="button"
            className="container-fluid btn btn-primary"
            onClick={clickAddHandler}
            value="Add"
          />
          {/* Add
          </input> */}
        </form>
      )}
      {success && (
        <h4 className="text-success text-cetner">
          Added Successfully, You will be redirected Team List page.
        </h4>
      )}
      {success === false && (
        <h4 className="text-danger text-center">{message}</h4>
      )}
    </div>
  );
};

export default AddMember;
