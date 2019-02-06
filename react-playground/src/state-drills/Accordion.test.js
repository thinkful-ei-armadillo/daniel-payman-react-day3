import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Accordion from './Accordion';
import state from '../state';

describe('Accordion component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


//   The component renders an empty li when the sections prop is not supplied
  it('renders the no-prop UI as expected', () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

// The component renders no sections as active by default
  it('renders no sections as active by default', () => {
    const wrapper = shallow(<Accordion sections={state.sections} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  })

// The component opens a clicked section
  it('opens section on click', () => {
    const wrapper = shallow(<Accordion sections={state.sections} />);
    wrapper.find('button').at(0).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot();
  })

// The component only opens the last section when multiple sections have been clicked.
it('opens section on click', () => {
  const wrapper = shallow(<Accordion sections={state.sections} />);
  wrapper.find('button').at(0).simulate('click')
  wrapper.find('button').at(1).simulate('click')
  expect(toJson(wrapper)).toMatchSnapshot();
})

});