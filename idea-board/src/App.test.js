import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import IdeaBoard from './components/IdeaBoard';

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should have App-header class', () => {
    const appHeader = wrapper.find('.App-header');
    expect(appHeader.exists()).toBe(true);
  });

  it('should have h1 tag when app is loaded', () => {
    const h1 = wrapper.find('h1');
    expect(h1.exists()).toBe(true);
    expect(h1.text()).toEqual("Idea Board");
  });

  it('should have h1 tag with text IdeaBoard', () => {
    const h1 = wrapper.find('h1');
    expect(h1.text()).toEqual("Idea Board");
  });

  it('should load IdeaBoard Component when app is loaded', () => {
    const ideaBoard = wrapper.find(IdeaBoard);
    expect(ideaBoard.exists()).toBe(true);
  });

});
