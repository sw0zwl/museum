import React from 'react';
import { Route } from 'react-router';
import logo from './logo.svg';
import './App.css';
import { UserList } from './users';
import { Admin, Resource, ListGuesser } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';

import { Login, Layout } from './layout';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/sw0zwl/museum');
const App = () => (
    <Admin 
      appLayout={Layout}
      dataProvider={dataProvider}>
        <Resource name="users" options={{label: '首页导览'}} list={ListGuesser} />
        <Resource name="posts" options={{ label: '藏品管理' }} list={ListGuesser} />
        <Resource name="products" options={{ label: '关于设置' }} list={ListGuesser} />
    </Admin>
  );

export default App;