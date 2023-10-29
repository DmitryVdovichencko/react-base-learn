import React from 'react';
import ReactDOM from 'react-dom/client';

import AppLayout from './AppLayout';
import { AuthProvider } from './features/auth/AuthProvider';
import AppRouter from './AppRouter/AppRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </AuthProvider>
  </React.StrictMode>
);
