import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';
  
import Nodelist from './nodelist';

if (typeof window !== 'undefined') {
    // ReactDOM.render(<Nodelist />, document.getElementById('root'));
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
          <QueryClientProvider client={new QueryClient()}>
            <Nodelist />
          </QueryClientProvider>
        </React.StrictMode>
      );
}