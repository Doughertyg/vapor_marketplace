import React from 'react';
import App from '../client/src/components/App.jsx';
import Enzyme, { shallow, render, mount } from 'enzyme';
import AlreadyOwnedBtns from '../client/src/components/AlreadyOwnedBtns.jsx';

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

// describe('App component', () => {
//   it('should have a component called Title', () => {
//     const wrapper = mount(<App />);
//     const test = wrapper.
//     expect(test).to.equal(true);
//   });
// });
