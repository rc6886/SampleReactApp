import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import BandColors from './BandColors';

export const toDropdownOptions = (bandColors) => {
  return Object.keys(BandColors).map(color => ({
    text: color,
    value: color,
  }));
};

const ResistanceDropdown = (props) => (
  <Dropdown
    fluid
    selection
    placeholder={props.placeholder}
    options={props.options}
  />
);

export default ResistanceDropdown;
