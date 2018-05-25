import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AddContact from '../AddContact';
import ListContacts from '../ListContacts';
import EditContact from '../EditContact';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/addContact' component={AddContact}/>
      <Route path='/listContact' component={ListContacts}/>
      <Route path='/editContact' component={EditContact}/>
    </Switch>
  </main>
)

export default Main
