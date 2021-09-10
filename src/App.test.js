import { render, screen } from '@testing-library/react';
import App from './components/App';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from './components/Header';
import JuiceControl from './components/JuiceControl';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from "enzyme";
import React from 'react';
import '@testing-library/jest-dom'



Enzyme.configure({ adapter: new Adapter() });

const renderer = new ShallowRenderer();
renderer.render(<App />);
const result = renderer.getRenderOutput();

expect(result.props.children).toEqual([<Header />, <JuiceControl />]);

test('renders homepage', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hummingbird/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const welcome = <Header/>;
  expect(wrapper.contains(welcome)).toEqual(true);
});