import React from 'react';
import { shallow } from 'enzyme';

import SearchBox from '../SearchBox';

describe('<SearchBox />', () => {
  it('should render', () => {
    expect(shallow(<SearchBox />)).toMatchSnapshot();
  });
});
