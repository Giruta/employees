import React from "react";
import StyledBlock from "./style";
import Person from "../Person";

const Card = ({ index, person }) => {
  // const key = Object.keys(card)[0];
  // const arr = card.key;
  const key = index.toUpperCase();
  const arr = person;
  console.log('key = ', key);
  console.log('arr = ', arr);

  let people = [];
  arr.map(item => {
    people.push(<Person person={item} key={item.id}/>);
  })

  return (
    <StyledBlock>
      <h3>{key}</h3>
      {people}
    })
    </StyledBlock>
  )
}
export default Card;
