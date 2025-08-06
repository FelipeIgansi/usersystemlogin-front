# 💻 Frontend – Sistema de Autenticação de Usuários (React + TypeScript)

Este projeto é o frontend de uma aplicação de autenticação de usuários, desenvolvido com **React**, utilizando **TypeScript** e empacotado com **Vite** para performance e simplicidade.

A aplicação oferece telas funcionais para:

- Cadastro de novo usuário
- Login
- Reset de senha
- Tela inicial (home) após autenticação

---

## ⚙️ Tecnologias e ferramentas utilizadas

- React 18+
- TypeScript
- Vite
- React Router
- Context API
- Bootstrap

---

## 🧱 Organização e boas práticas

O projeto está estruturado com foco em legibilidade, escalabilidade e separação de responsabilidades:

src/
- components/ Componentes reutilizáveis
- context/ Contextos globais (ex: AuthContext)
- interfaces/ Interfaces e tipagens de dados
- pages/ Páginas principais (Login, Cadastro, Home, etc)
- services/ Serviços de comunicação com a API
- types/ Tipos globais reutilizáveis
- App.tsx
- main.tsx


Outras boas práticas aplicadas:

- Navegação protegida para rotas privadas
- Armazenamento de token de autenticação com segurança
- Tipagem forte com TypeScript
- Código limpo, comentado e modularizado

---

## 🚀 Como executar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/FelipeIgansi/usersystemlogin-front.git
   cd nome-do-repositorio (usersystemlogin-front)

Instale as dependências:

    npm install

Execute a aplicação:

    npm run dev

Acesse no navegador:

    http://localhost:5173

📚 Telas e fluxos disponíveis

    /register – Tela de cadastro de usuário

    /login – Tela de login

    /resetpassword – Tela de recuperação de senha

    /home – Página inicial após login (rota protegida)

🔐 Integração com a API

A aplicação consome a API desenvolvida em Spring Boot.

    O token JWT é armazenado em localStorage ou sessionStorage, e enviado automaticamente em cada requisição autenticada.

    As rotas privadas só são acessíveis se o usuário estiver autenticado.


✅ Teste rápido com usuário padrão

Para facilitar os testes, você pode utilizar o usuário padrão criado automaticamente pela API:

    E-mail: user@teste.com

    Senha: 123456789
