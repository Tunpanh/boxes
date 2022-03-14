import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: ['A', 'B', 'C', 'D'],
    };
  }

handleButtonClick(orderChange, text, index) {
  let boxes = this.state.boxes;
  let tempIndex = index + orderChange;

  let temp = boxes[tempIndex];
  boxes[index] = temp;
  boxes[tempIndex] = text;

  this.setState({
    boxes: boxes
  });
}

  renderBox(text, index) {
    let lessThanButtonClassName = 'less-than-button'; 
    let greaterThanButtonClassName = 'greater-than-button'; 

    if (index === 0) {
      lessThanButtonClassName += ' first-box';
    }
    
    if (index === (this.state.boxes.length - 1)) {
      greaterThanButtonClassName += ' last-box';
    }

    return (<div className={`Box box-${text}`}>
      <div className='box-text'>{text}</div>
      <div className='box-buttons'>
        <div className={lessThanButtonClassName} onClick={this.handleButtonClick.bind(this, -1, text, index)}>{"<"}</div>
        <div className={greaterThanButtonClassName} onClick={this.handleButtonClick.bind(this, 1, text, index)}>{">"}</div>
      </div>
    </div>);
  }

  render() {
    const boxes = this.state.boxes;
    return (
      <div className="App container">
        {boxes.map((item, index) => this.renderBox(item, index))}
      </div>
    );
  }
}

export default App;
