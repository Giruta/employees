import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPersons} from "../../redux/actions";
import {Loader} from "../Loader/Loader";
import Card from "../Card";

const sortArrayOfObjects = (persons) => {
  persons.sort((a, b) => {
    const nameFirst = a.firstName.toLowerCase();
    const nameSecond = b.firstName.toLowerCase()
    if (nameFirst < nameSecond)
      return -1
    if (nameFirst > nameSecond)
      return 1
    return 0
  })
  return persons;
}

const buildData = (persons) => {
  const temp = [...persons];
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z'];
  let arrayObj = [];let obj = {};let j=0;
  for (let i = 0; i < alphabet.length; i++) {
    const key = alphabet[i];
    while (temp[j] && temp[j].firstName[0].toLowerCase() === key) {
      arrayObj.push(temp[j]);
      j++;
    }
    obj[key]=arrayObj;
    arrayObj=[];
  }
  return obj;
}

const ListOPersons = () => {
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

  const personsSort = sortArrayOfObjects(persons);
  const personsObj = buildData(personsSort);

  let cards = [];
  for (const key in personsObj) {
    cards.push(<Card index={key} person={personsObj[key]} key={`${+new Date()}`}/>)
  }

  return (
    <>
      {cards}
    </>
  )
}
export default ListOPersons;
