import React from "react";
import {  useNavigate } from "react-router-dom";

const MemberCard = (props) => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/member/" + props.id);
  }

  return (
    <div
      className="card"
      style={{ width: "15rem", marginBottom: "1rem", cursor:"pointer" }}
      onClick={clickHandler}
    >
      <div className="card-header">
        <h4>{`${props.firstname} ${props.lastname}`}</h4>
      </div>
      <div className="card-body">
        <h6>{props.role}</h6>
        <h6>{props.primaryStack}</h6>
      </div>
    </div>
  );
};

export default MemberCard;
