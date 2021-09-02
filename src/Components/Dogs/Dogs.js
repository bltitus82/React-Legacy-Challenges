import React from 'react';
import {Container} from 'reactstrap';
import DogFetch from './DogIndex';
 
const Dogs = () => {

  return (
    <Container className="App">
        <DogFetch />
    </Container>
  );

}
 
export default Dogs;
