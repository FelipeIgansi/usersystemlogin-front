// pages/RegisterPage.tsx
import React, { useState } from 'react';
import { User, Mail, Lock, UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import 'bootstrap/dist/css/bootstrap.min.css';


interface RegisterPageProps {
  onSwitchToLogin: () => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      setLoading(false);
      return;
    }

    const success = await register(name, email, password);
    if (!success) {
      setError('Erro ao criar conta. Tente novamente.');
    }
    setLoading(false);
  };

  return (


    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="card shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
              <UserPlus className="text-white" />
            </div>
            <h4 className="card-title">Criar Conta</h4>
            <p className="text-muted">Junte-se a nós hoje</p>
          </div>
          <form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Nome completo" value={name} onChange={setName} icon={<User />} required />
            <Input type="email" placeholder="Email" value={email} onChange={setEmail} icon={<Mail />} required />
            <Input type="password" placeholder="Senha" value={password} onChange={setPassword} icon={<Lock />} required />
            <Input type="password" placeholder="Confirmar senha" value={confirmPassword} onChange={setConfirmPassword} icon={<Lock />} required />
            {error && <div className="alert alert-danger">{error}</div>}
            <Button type="submit" disabled={loading} variant="primary">
              {loading ? 'Criando conta...' : 'Criar conta'}
            </Button>
          </form>
          <div className="mt-3 text-center">
            <span>Já tem uma conta? </span>
            <button type="button" className="btn btn-link p-0" onClick={onSwitchToLogin}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};