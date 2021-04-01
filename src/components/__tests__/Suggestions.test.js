import React from 'react';
import { shallow } from 'enzyme';

import Suggestions from '../Suggestions';

const mockSuggestions = [
  {
    name: 'Manchester Airport',
    placeKey: '1',
    placeType: 'A',
    iata: 'MAN',
    city: 'Manchester',
    region: 'Greater Manchester',
    country: 'United Kingdom'
  },
];

describe('<Suggestions />', () => {
  it('should render', () => {
    expect(shallow(<Suggestions suggestions={mockSuggestions} />)).toMatchSnapshot();
  });

  it('should render no results found', () => {
    const mockNoSuggestions = [{ name: 'No results found' }];
    const wrapper = shallow(<Suggestions suggestions={mockNoSuggestions} />);

    expect(wrapper.find('.suggestion__no-results').exists()).toBeTruthy();
  });
});
