import React, { Component } from 'react';
import Main from './page/Main';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lastday from './comonents/Lastday';

import './css/App.css';

export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/days" element={<Lastday />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
