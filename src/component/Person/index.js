import React from "react";
import {StyledCard} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {fetchPersons, notActive, active} from "../../redux/actions";

const handleChange = (e) => {
  console.log('e = ', e.target.value);

}

const Person = ({ person }) => {
  console.log('person = ', person);
  const dispatch = useDispatch();
  const active = useSelector(state => state.app.active)
  return (
    <StyledCard className='styledCard'>
      <h3 className='card-title'>{person.firstName + ' ' + person.lastName}</h3>
      <form className='form'>
          <input 
            type="radio"
            id="active"
            name="activity"
            value="active"
            onChange={() => dispatch(active())}
          />
          <label htmlFor="active">active</label>
          <br></br>
          <input
            type="radio"
            id="not-active"
            name="activity"
            value="not-active"
            onChange={() => dispatch(notActive())}
            defaultChecked
          />
          <label htmlFor="not-active">not active</label>
      </form>
    </StyledCard>
  )
}
export default Person;
