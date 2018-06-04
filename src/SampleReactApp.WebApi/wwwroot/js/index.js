import React from 'react';
import { render } from 'react-dom';
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import Navbar from './Navbar';
import PageContainer from './PageContainer';
import ResistanceDropdown from './Resistance/ResistanceDropdown';

const options = [
  {
    text: 'Test 1',
    value: 'Test1',
  },
  {
    text: 'Test 2',
    value: 'Test2',
  }
];

const App = () => (
  <div>
    <Navbar />
    <PageContainer>
      <h1 className="ui header">
        Select the Color of Each Band
      </h1>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <ResistanceDropdown placeholder="Band 1" options={options} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <ResistanceDropdown placeholder="Band 2" options={options} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <ResistanceDropdown placeholder="Band 3" options={options} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <ResistanceDropdown placeholder="Band 4" options={options} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </PageContainer>
  </div>
);

render(<App />, document.getElementById('app'));