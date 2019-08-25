import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Body from "./components/body"
import Sidebar from "./components/sidebar"


function App() {
  return (

    <Grid celled className="h-100vh m-0">
      <Grid.Row>
        <Grid.Column className="p-0" width={3}>
          <Sidebar />
        </Grid.Column>
        <Grid.Column width={13}>

          <Body />


        </Grid.Column>
      </Grid.Row>

    </Grid>

  );
}

export default App;
