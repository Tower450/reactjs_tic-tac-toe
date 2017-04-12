import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square'

class Board extends React.Component {

  renderSquare(i) {
    console.log(this.props.squares[i]);
    return <Square  value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }
  render() {

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }

}

export default Board;
