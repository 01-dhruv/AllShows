import './App.css';

import React, { Component } from 'react'
import Show from './Components/Show';
import Navbar from './Components/Navbar';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Book from './Components/Book';
import About from './Components/About';





export class App extends Component {


  render() {
    return (

      <>
      <Router>
      <Navbar/>
      <div className='container my-3'>

  
      <Routes>
        <Route exact path='/' element={<Show/> } />
          <Route path='/book' element={<Book />} />
          <Route path='/about' element={<About/>} />
      </Routes>
  
  
      </div>
      </Router>
      </>

    )
  }
}

export default App;
