import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin';
import ThemeReducer from './themeReducer'
import simpleRestProvider from './mx-data-simple-rest';

import notifications from './notifications'
import collections from './collections'
import splashes from './splashes'
import stations from './stations'
import about from './about'
import map from './map'

import {Login, Layout } from './layout';
import {Dashboard} from './dashboard'

import polyglotI18nProvider from 'ra-i18n-polyglot';
import chineseMessages from './i18n/cn';

const i18nProvider = polyglotI18nProvider(locale => {
    if (locale === 'en') {
      return chineseMessages;
    }

    // Always fallback on english
    return chineseMessages;
}, 'en');

/*
const httpClient = (url, options = {}) => {
    if (!options.headers) 
    {
        options.headers = new Headers({ Accept: 'application/json' });
    }

    // add your own headers here
    options.headers.set('Content-Type', 'application/json');

  return fetchUtils.fetchJson(url, options);
};
*/

//const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/sw0zwl/museum');
//const dataProvider = simpleRestProvider('http://192.168.20.7:8000/v1');
//const dataProvider = simpleRestProvider('http://localhost:8000/v1');
const dataProvider = simpleRestProvider('https://api.hoshinominami.com:65519/v1')
const App = () => (
    <Admin 
      customReducers={{theme: ThemeReducer}}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      dashboard={Dashboard}
      layout={Layout}
      loginPage={Login}
    >
        <Resource name="splashes" {...splashes} />
        <Resource name="notifications" {...notifications} />
        <Resource name="map" {...map} />
        <Resource name="stations" {...stations} />
        <Resource name="collections" {...collections} />
        <Resource name="about" {...about} />
    </Admin>
  );

export default App;