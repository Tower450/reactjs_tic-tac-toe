import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Square(props) {
    return (
      <button className="square" onClick={() => props.onClick()}>
        {props.value}
      </button>
    );

}

export default Square;
