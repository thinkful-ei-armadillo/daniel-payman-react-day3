import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import HelloWorld from './HelloWorld';

describe('HelloWorld component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HelloWorld />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<HelloWorld name="helloWorld"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});