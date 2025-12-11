# 🏥 Clínica Faz de Conta

Este repositório contém o código-fonte do sistema da **Clínica Faz de Conta**, um projeto desenvolvido para gerenciamento de pacientes, consultas e informações administrativas da clínica.

---

## 🚀 Tecnologias utilizadas
- **React + TypeScript** — interface e lógica do front-end  
- **Vite** — build rápido e otimizado  
- **TailwindCSS / shadcn/ui** — estilização dos componentes  
- **Supabase** — autenticação e banco de dados  
- **Lucide Icons** — ícones utilizados na interface  
- **Vercel** — deploy do projeto  

---

## ⚙️ Funcionalidades principais
- Cadastro e login de usuários com Supabase Auth  
- Listagem e gerenciamento de pacientes  
- Agendamento de consultas  
- Edição e exclusão de registros  
- Dashboard com informações da clínica  
- Integração com WhatsApp para captação de leads  

---

## 💻 Como rodar o projeto localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/msconrado/clinica-faz-de-conta.git
   cd clinica-faz-de-conta
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Crie o arquivo `.env.local`** na raiz do projeto:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=URL_DO_SEU_SUPABASE
   NEXT_PUBLIC_SUPABASE_ANON_KEY=SUA_CHAVE_ANON
   ```

4. **Rode o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

5. O projeto estará disponível em:
   ```
   http://localhost:5173
   ```

---

## 📁 Estrutura principal do projeto
```
src/
 ├─ components/       # Componentes reutilizáveis (botões, cards, modais, etc.)
 ├─ constants/        # Constantes globais (links, números da clínica, textos fixos)
 ├─ hooks/            # Hooks customizados de estado ou lógica de UI
 ├─ lib/              # Configurações e integrações (ex: Supabase, APIs externas)
 ├─ pages/            # Páginas principais do projeto (rotas)
 ├─ services/         # Regras de negócio e comunicação com APIs
 ├─ App.tsx           # Componente raiz do aplicativo
 ├─ main.tsx          # Ponto de entrada da aplicação
 ├─ index.css         # Estilos globais
 ├─ fonts.css         # Configuração das fontes usadas
 └─ vite-env.d.ts     # Tipagens do ambiente Vite/TypeScript
```

---

## 🧩 Boas práticas para quem for contribuir
- Use nomes claros para commits (`feat:`, `fix:`, `refactor:`, etc.)
- Sempre crie branches separadas para novas features
- Rode `npm run lint` antes de abrir PRs
- Mantenha a estrutura e o padrão de componentes do projeto

---

## 👨‍⚕️ Autor
**Matheus Souza** — [@msconrado](https://github.com/msconrado)
