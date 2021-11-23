import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 960px;
  margin: 20px auto 0;
  background-color: #80808021;
  padding: 10px;
`
const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const StyledCol = styled.div`
  max-width: 100%;
  padding: 5px;
  position: relative;
  width: 100%;
  min-height: 1px;
  flex-grow: 1;
  flex-basis: 0;
`

export { StyledContainer, StyledRow, StyledCol };
