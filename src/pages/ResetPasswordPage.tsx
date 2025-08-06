// pages/ResetPasswordPage.tsx
import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Link, useNavigate } from 'react-router-dom';


export const ResetPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const success = await resetPassword(email, token, password);

      if (!success) {
        setError('Email ou senha incorretos');
      } else {
        navigate('/');
      }
    } catch (error) {
      setError('Erro ao fazer login. Tente novamente.');
    }
    finally {
      setLoading(false);
    }
  };



  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="card shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
              <User className="text-white" />
            </div>
            <h4 className="card-title">Entrar</h4>
            <p className="text-muted">Acesse sua conta</p>
          </div>
          <form onSubmit={handleSubmit}>
            <Input type="email" placeholder="Email" value={email} onChange={setEmail} icon={<Mail />} required />
            <Input type="text" placeholder="Token de acesso" value={token} onChange={setToken} icon={<Lock />} required />
            <Input type="password" placeholder="Nova Senha" value={password} onChange={setPassword} icon={<Lock />} required />
            {error && <div className="alert alert-danger">{error}</div>}
            <Button type="submit" disabled={loading} variant="primary">
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>
          <div className="mt-3 text-center">
            <span>Já tem uma conta? </span>
            <Link to="/login" className="btn btn-link p-0">
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};