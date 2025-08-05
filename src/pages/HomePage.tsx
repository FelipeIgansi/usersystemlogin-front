// pages/HomePage.tsx
import React from 'react';
import { User, Mail, Home, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';

export const HomePage: React.FC = () => {
  const { user, logout } = useAuth();

  return (

    <div className="container text-center container-xl min-vh-100 min-vw-100">
      <nav className="navbar bg-body-tertiary">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="col">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <Home className="me-2" /> Minha App
            </a>
          </div>

          <div className="d-flex align-items-center ms-auto">
            <div className="col text-end me-2">
              <small className="text-muted">Bem-vindo, <strong>{user?.name}</strong></small>
            </div>
            <div className="col">
              <Button variant="danger" onClick={logout}>
                <LogOut className="me-1" /> Sair
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container py-5">
        <h2 className="mb-4">Olá, {user?.name}! 👋</h2>
        <div className="row gy-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white p-2 rounded me-3">
                    <User />
                  </div>
                  <h5 className="card-title mb-0">Perfil</h5>
                </div>
                <p className="card-text">Gerencie suas informações pessoais e preferências de conta.</p>
                <ul className="list-unstyled">
                  <li><strong>Nome:</strong> {user?.name}</li>
                  <li><strong>Email:</strong> {user?.email}</li>
                  <li><strong>ID:</strong> {user?.id}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success text-white p-2 rounded me-3">
                    <Home />
                  </div>
                  <h5 className="card-title mb-0">Dashboard</h5>
                </div>
                <p className="card-text">Visualize estatísticas e informações importantes da sua conta.</p>
                <div className="p-3 bg-light rounded">
                  <small className="text-muted">Último acesso</small><br />
                  Agora
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-info text-white p-2 rounded me-3">
                    <Mail />
                  </div>
                  <h5 className="card-title mb-0">Notificações</h5>
                </div>
                <p className="card-text">Gerencie suas notificações e preferências de comunicação.</p>
                <div className="alert alert-success mb-0">Tudo em dia! ✅</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};