import { Container } from '@mui/material';
import React, { Component } from 'react';
import Whetar from '../comonents/weather';

import '../css/App.css';
export class Main extends Component {
  render() {
    return (
      <>
        <div className="container_background">
          <Container>
            <Whetar />
          </Container>
        </div>
      </>
    );
  }
}

export default Main;
