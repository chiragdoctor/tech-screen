import React from 'react';
import { mount } from 'enzyme';
import Idea from './Idea';


describe('Idea Component', () => {
  let idea;
  const mockIdea = {id: 1, title: '1', desc: '1', lastModifiedDate: ''};
  beforeEach(() => {
    idea = mount(<Idea idea={mockIdea} />);
    idea.instance().title = () => {};
  });

  it('should render and form', () => {
    const form = idea.find('form');
    expect(form.exists()).toBe(true);
  });

  it('should render card', function () {
    const card = idea.find('.card');
    expect(card.exists()).toBe(true);
    expect(card.length).toEqual(1);
  });

   it('should render card-title', function () {
     const cardTitle = idea.find('.card-title');
     expect(cardTitle.exists()).toBe(true);
     expect(cardTitle.length).toEqual(1);
   });

   it('should render card-body', function () {
     const cardBody = idea.find('.card-body');
     expect(cardBody.exists()).toBe(true);
     expect(cardBody.length).toEqual(1);
   });

   it('should render delete button on card', function () {
     const deleteButton = idea.find('.deleteButton');
     expect(deleteButton.exists()).toBe(true);
     expect(deleteButton.length).toEqual(1);
   });

  it('should render a input box for title', function () {
    const input = idea.find('.card-title');
    expect(input.exists()).toBe(true);
    expect(input.length).toEqual(1);
  });

  it('should render a textarea for description', function () {
    const textarea = idea.find('.card-text');
    expect(textarea.exists()).toBe(true);
    expect(textarea.length).toEqual(1);
  });

  it('should render a countdown indicator', function () {
    const countdown = idea.find('.countdown');
    expect(countdown.exists()).toBe(true);
    expect(countdown.length).toEqual(1);
  });

  it('should render a string with lastModified date', function () {
    const lastModified = idea.find('.lastModified');
    expect(lastModified.exists()).toBe(true);
    expect(lastModified.length).toEqual(1);
  });

});
