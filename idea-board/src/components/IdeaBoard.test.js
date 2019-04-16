import React from 'react';
import { shallow } from 'enzyme';
import IdeaBoard from './IdeaBoard';
import Notification from './Notification';
import Idea from './Idea';

describe('IdeaBoard Component', () => {
  let ideaBoard;

  beforeEach(() => {
    global.localStorage = {
      getItem: () => {},
      setItem: () => {}
    };

    ideaBoard = shallow(<IdeaBoard />);
  });

  it('renders notification component', () => {
    const notification = ideaBoard.find(Notification);
    expect(notification.exists()).toBe(true);
  });

  it('renders a add new idea button', () => {
    const newIdeaButton = ideaBoard.find('.newIdeaButton');
    expect(newIdeaButton.exists()).toBe(true);
  });

  it('renders a sortBy select', () => {
    const sortBySelect = ideaBoard.find('#sortBySelect');
    expect(sortBySelect.exists()).toBe(true);
  });

  it('renders one idea component', () => {
    ideaBoard.setState({ideas: [
      {id: 1, title: '1', desc: '1', lastModifiedDate: ''}
      ]});

    const idea =  ideaBoard.find(Idea);
    expect(idea.exists()).toBe(true);
    expect(idea.length).toBe(1);

  });

});
