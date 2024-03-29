import React from 'react';
import { shallow } from 'enzyme';

import Textarea from './Textarea';

describe('<Textarea/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Textarea name="test" placeholder="Test" />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
