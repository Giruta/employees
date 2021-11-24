import React from 'react';
import { StyledContainer, StyledRow, StyledCol } from './style.js';
import ListOfPersons from "../ListOfPersons";
// import Person from "./Person";

function Index() {
  return (
    <StyledContainer>
      <StyledRow>
        <StyledCol>
          <h2>Employees</h2>
          <StyledRow>
            <ListOfPersons />
          </StyledRow>
        </StyledCol>
        <StyledCol>
          <h2>Employees birthday</h2>
          {/*<Person />*/}
        </StyledCol>
      </StyledRow>
    </StyledContainer>
  );
}

export default Index;

//export default function Index;
//
// const API_URL = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';
// const rootElement = document.getElementById('root');
//
// rootElement.innerText = 'Loading...';
//
// fetch(API_URL)
//   .then(response => {
//     if (!response.ok) {
//       return Promise.reject(new Error('Failed load data'));
//     }
//     console.log('response = ', response);
//     console.log('response.json() = ', response.json());
//     return response.json();
//   })
//   .then(file => {
//    const employees = JSON.parse(file.content);
//    const names = employees.map(it => it.firstName).join('\n');
//    rootElement.innerText = names;
//    console.log(typeof(names));
//    console.log(names);
//   })
//  .catch(error => {
//    console.warn(error);
//    rootElement.innerText = 'Failed to load data';
//  });
//
// // export default Index;
