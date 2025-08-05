// App.tsx
import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { HomePage } from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';


const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'login' | 'register'>('login');
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status"></div>
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  if (user) {
    return <HomePage />;
  }

   return currentPage === 'login' ? <LoginPage onSwitchToRegister={() => 
    setCurrentPage('register')} /> : <RegisterPage onSwitchToLogin={() => 
    setCurrentPage('login')} />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;