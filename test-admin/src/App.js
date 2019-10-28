import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UserList } from './users';
import { Admin, Resource, ListGuesser } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/sw0zwl/museum');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={ListGuesser} />
        </Admin>
  );

export default App;
