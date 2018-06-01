import React from 'react';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import Navbar from './Navbar';
import PageContainer from './PageContainer';
import ResistanceDropdown from './ResistanceDropdown';

const options = [
  {
    text: 'Test 1',
    value: 'Test1',
  }
];

const App = () => (
  <div>
    <Navbar />
    <PageContainer>
      <h1 className="ui header">Select the Color of Each Band</h1>
      <ResistanceDropdown placeholder="Dropdown 1" options={options} />
      <ResistanceDropdown placeholder="Dropdown 2" options={options} />
      <ResistanceDropdown placeholder="Dropdown 3" options={options} />
      <ResistanceDropdown placeholder="Dropdown 4" options={options} />
    </PageContainer>
  </div>
);

render(<App />, document.getElementById('app'));