import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { observable, computed, autorun } from 'mobx';

class OuterClickExample extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Fragment>
        <div class="switch">
      		<div class="light"></div>
      		<button id="switch-btn">켜기</button>
      	</div>
      	<hr />
      	<div class="counter">
      		<h1>0</h1>
      		<button id="plus-btn">+</button>
      		<button id="minus-btn">-</button>
      	</div>
      </Fragment>
    );
  }
}
// ========================================

ReactDOM.render(
  <OuterClickExample />,
  document.getElementById('root')
);
