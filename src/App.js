import './App.css';
import React, {Fragment} from 'react';
import PublicRouter from './routes/PublicRouter';
import AuthProvider from './auth/AuthProvider';

function App() {
  return (
      <AuthProvider>
           <PublicRouter/>
      </AuthProvider>
  );
}

export default App;
