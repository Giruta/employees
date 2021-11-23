import React from "react";
import Person from '../Person/Person';
import {useDispatch, useSelector} from "react-redux";
import {fetchPersons} from "../../redux/actions";
import {Loader} from "../Loader/Loader";

export default () => {
  const dispatch = useDispatch()
  const persons = useSelector(state => state.persons.fetchedPersons)
  const loading = useSelector(state => state.app.loading)

  if (loading) {
    return <Loader />
  }

  if (!persons.length) {
    return <button
      className='btn btn-primary'
      onClick={() => dispatch(fetchPersons())}
    >Download</button>
  }
  return persons.map(person => <Person person={person} key={person.id}/>)
}
