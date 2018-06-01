import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const ResistanceDropdown = (props) => (
  <Dropdown
    fluid
    selection
    placeholder={props.placeholder}
    options={props.options}
  />
);

export default ResistanceDropdown;
