import React from "react";
import { Card } from "../card-component/card";
import "./034 card-list.styles.css";

export const CardList = (props) => {
  return <div className="card-list">
       {props.monster.map((monster) => (
          <Card key={monster.id} monster = {monster}/>
        ))}
  </div>
};
