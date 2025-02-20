import { StrictMode } from 'react';

import '@fontsource-variable/inter';
import '@fontsource-variable/inter/wght-italic.css';

import ReactDOM from 'react-dom/client';
import 'style.css';
import { Route, Switch } from 'wouter';

import Layout from './Layout';
import Aedi from './aedi/Aedi';
import Cgi from './cgi/Cgi';
import Home from './home/Home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Layout>
      <Switch>
        <Route path="/aedi">
          <Aedi />
        </Route>
        <Route path="/cgi">
          <Cgi />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Layout>
  </StrictMode>,
);
