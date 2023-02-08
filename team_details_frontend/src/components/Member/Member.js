import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  getMember,
  deleteMember,
} from "../../redux/actions/memberActionCreator/memberActionCreator";

const Member = () => {
  const { member, message } = useSelector((store) => store.getMemberReducer);
  const { success, deleteMessage } = useSelector(
    (store) => store.deleteMemberReducer
  );
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    return async () => {
      dispatch(await getMember(id));
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (success !== null) {
      setTimeout(() => {
        dispatch({ type: "RESET_DELETE_MEMBER" });
        navigate("/team");
      }, 5000);
    }
  }, [navigate, success, dispatch, id]);

  const clickEditHandler = () => {
    navigate("/member/" + id + "/edit");
  };

  const clickDeleteHandler = async () => {
    dispatch(await deleteMember(id));
    // navigate("/team");
  };

  return (
    <div className="container">
      {success === null && (
        <>
          {message !== null && <h4 className="text-center text-danger">{message}</h4>}
          {message === null && (
            <>
              <div className="row">
                <div className="col">
                  <h4>{`${member.firstname} ${member.lastname}`}</h4>
                </div>
                <div className="col text-end">
                  <button
                    className={"btn btn-primary"}
                    onClick={clickEditHandler}
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                    className={"btn btn-danger"}
                    onClick={clickDeleteHandler}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p>employee id : {id}</p>
              <p>role: {member.role}</p>
              <p>primary-stack: {member.primaryStack}</p>
              <p>email: {member.email}</p>
            </>
          )}
        </>
      )}
      {success && (
        <h4 className="text-success text-cetner">
          Deleted Successfully, You will be redirected Teams List page.
        </h4>
      )}
      {success === false && (
        <h4 className="text-danger text-center">{deleteMessage}</h4>
      )}
    </div>
  );
};

export default Member;
