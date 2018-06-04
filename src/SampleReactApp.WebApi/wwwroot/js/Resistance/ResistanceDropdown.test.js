import React from 'react';
import { shallow } from 'enzyme';

import ResistanceDropdown from './ResistanceDropdown';

describe('Resistance Dropdown', () => {
  const props = {
    placeholder: 'Dropdown 1',
    options: [
      {
        text: 'Value 1',
        value: 'Value1',
      },
      {
        text: 'Value 2',
        value: 'Value2',
      },
    ],
  };

  const dropdown = <ResistanceDropdown {...props} />;

  it('Should Render Dropdown', () => {
    const wrapper = shallow(dropdown);
    expect(wrapper).toMatchSnapshot();
  });
});