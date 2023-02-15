import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeam } from "../../redux/actions/teamActionCreator/teamActionCreator";
import MemberCard from "../MemberCard/MemberCard";

const Team = () => {
  const { team, message } = useSelector((store) => store.teamReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    return async () => {
      dispatch(await getTeam());
    };
  }, [dispatch]);

  return (
    <div className="container text-center">
      <div className="col justify-content-center">
        {message !== null && <h4 className="text-center">{message}</h4>}
        {team.length === 0 && message === null && <h4>Found No Team Member</h4>}
        <div style={{ marginLeft: "39%" }}>
          {team.length > 0 && (
            <>
              <h4>Team List</h4>
              {team.map((member) => (
                <MemberCard
                  key={member.id}
                  id={member.id}
                  firstname={member.firstname}
                  lastname={member.lastname}
                  role={member.role}
                  primaryStack={member.primaryStack}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
