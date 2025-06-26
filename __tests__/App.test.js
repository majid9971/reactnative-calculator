import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App'; // adjust if needed

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
