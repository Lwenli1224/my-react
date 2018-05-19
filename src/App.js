import React, { Component } from 'react';
import './App.css';

const slide = 'animated slideInRight'

class App extends Component {
  state = {
    listOne: [1, 2, 3],
    listFour: [1, 2, 3],
    listFourSide: [],
  }

  changeOne() {
    this.setState({
      showOne: true,
      listOne: [3, 2, 1],
    })
  }

  changeTwo() {
    this.setState({
      showTwo: true,
    })
  }

  changeThree() {
    this.setState({
      showThree: true,
    })
  }

  changeFour() {
    this.setState({
      showFour: true,
      listFour: ['x', 'y', 'z'],
      listFourSide: ['x', 'y', 'z'],
    })
  }

  renderOne() {
    const { listOne, showOne } = this.state
    return <div>{!showOne ?
      <div>
        {listOne.map(item => <div key={item} className={slide}>{item}</div>)}
      </div> :
      <div>
        {listOne.map(item => <div key={item} className={slide}>{item}</div>)}
      </div>
    }
      <button onClick={e => this.changeOne()}>change</button>
    </div>
  }

  renderTwo() {
    const { listTwo, showTwo } = this.state
    return <div>
      {!showTwo ?
        <div>
          <div className={slide}>1</div>
          <div className={slide}>2</div>
          <div className={slide}>3</div>
        </div> : <div>
          <h2 className={slide}>h2</h2>
          <div className={slide}>1</div>
          <div className={slide}>2</div>
          <div className={slide}>3</div>
        </div>}
      <button onClick={e => this.changeTwo()}>change</button>
    </div>
  }

  renderThree() {
    const { showThree } = this.state
    return <div>
      {!showThree ?
        <div>
          <div className={slide} key="1">1</div>
          <div className={slide} key="2">2</div>
          <div className={slide} key="3">3</div>
        </div> : <div>
          <h2 className={slide}>h2</h2>
          <div className={slide} key="1">1</div>
          <div className={slide} key="2">2</div>
          <div className={slide} key="3">3</div>
        </div>}
      <button onClick={e => this.changeThree()}>change</button>
    </div>
  }

  renderFour() {
    const { listFour, showFour, listFourSide } = this.state
    return <div>
      {!showFour ?
        <div>
          {listFour.map(item => <div key={item} className={slide}>{item}</div>)}
          <div className={slide} key="x">x</div>
          <div className={slide} key="y">y</div>
          <div className={slide} key="z">z</div>
          {listFourSide.map(item => <div key={item} className={slide}>{item}</div>)}
        </div> : <div>
          {listFour.map(item => <div key={item} className={slide}>{item}</div>)}
          <div className={slide} key="x">x</div>
          <div className={slide} key="y">y</div>
          <div className={slide} key="z">z</div>
          {listFourSide.map(item => <div key={item} className={slide}>{item}</div>)}
        </div>}
      <button onClick={e => this.changeFour()}>change</button>
    </div>
  }

  render() {
    return <div className="App">
      {this.renderOne()}
      {this.renderTwo()}
      {this.renderThree()}
      {this.renderFour()}
    </div>
  }
}

export default App;
