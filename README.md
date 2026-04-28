<div align="center">

<img alt="mundo-pet" src="/public/logo.svg" />

# 🐾 Mundo Pet

*Sistema de agendamento para Pet Shop, do zero ao deploy.*

<img src="https://img.shields.io/github/last-commit/joschonarth/mundo-pet?style=default&logo=git&logoColor=white&color=9282fa&labelColor=27272a" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/joschonarth/mundo-pet?style=default&color=9282fa&labelColor=27272a" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/joschonarth/mundo-pet?style=default&color=9282fa&labelColor=27272a" alt="repo-language-count">
<a href="https://mundo-pet.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/vercel-deployed-brightgreen?style=default&logo=vercel&logoColor=white&color=9282fa&labelColor=27272a" alt="vercel">
</a>

---

📃 [Sobre](#-sobre)&nbsp;&nbsp;•&nbsp;&nbsp;
🛠️ [Tecnologias](#️-tecnologias)&nbsp;&nbsp;•&nbsp;&nbsp;
✨ [Funcionalidades](#-funcionalidades)&nbsp;&nbsp;•&nbsp;&nbsp;
🚀 [Como rodar](#-como-rodar)&nbsp;&nbsp;

</div>

---

<a href="https://mundo-pet.vercel.app" target="_blank">
  <img width="1348" height="677" alt="mundo-pet" src="" />
</a>

---

## 📃 Sobre

O **Mundo Pet** é um sistema web de agendamento para Pet Shop, desenvolvido com **Next.js** e **App Router**. O projeto explora na prática o uso de **Server Actions** para criar, editar e deletar agendamentos, combinando **React Server Components** e **Client Components** de forma inteligente. A validação de formulários é feita com **React Hook Form** e **Zod**, e os dados são sempre mantidos atualizados via `revalidatePath` no server side. O banco de dados é gerenciado com **Prisma** e **PostgreSQL**.

---

## 🛠️ Tecnologias

- ⚡ **[Next.js](https://nextjs.org/)** — Framework React com App Router, Server Actions e SSR.
- ⚛️ **[React](https://react.dev/)** — Biblioteca para construção de interfaces declarativas.
- 🟦 **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática e segurança em tempo de desenvolvimento.
- 🎨 **[Tailwind CSS](https://tailwindcss.com/)** — Estilização utilitária direto no JSX.
- 🧩 **[shadcn/ui](https://ui.shadcn.com/)** — Componentes acessíveis e estilizáveis com Radix UI.
- 🗃️ **[Prisma](https://www.prisma.io/)** — ORM moderno para acesso e manipulação do banco de dados.
- 🐘 **[PostgreSQL](https://www.postgresql.org/)** — Banco de dados relacional robusto e confiável.
- 📋 **[React Hook Form](https://react-hook-form.com/)** — Gerenciamento de formulários performático.
- 🛡️ **[Zod](https://zod.dev/)** — Validação e parsing de schemas com inferência de tipos.
- 📅 **[React Day Picker](https://react-day-picker.js.org/)** — Componente de calendário robusto e customizável.
- 📆 **[date-fns](https://date-fns.org/)** — Manipulação e formatação de datas.
- 🔔 **[Sonner](https://sonner.emilkowal.ski/)** — Notificações toast elegantes para o React.
- 🎭 **[react-imask](https://imask.js.org/)** — Máscara de inputs para campos como telefone.
- 🔀 **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** — Resolução inteligente de conflitos entre classes Tailwind.
- 🎯 **[class-variance-authority](https://cva.style/)** — Criação de variantes de componentes com tipagem.
- 🛠️ **[Biome](https://biomejs.dev/)** — Linter e formatter rápido para JavaScript/TypeScript.
- ✅ **[Ultracite](https://ultracite.dev/)** — Ferramenta de qualidade de código com regras opinadas.

---

## ✨ Funcionalidades

- [x] 📝 Agendamento de consultas com formulário completo
- [x] 🐾 Campos para nome do tutor, nome do pet, telefone e descrição do serviço
- [x] 📅 Seleção de data via calendário interativo
- [x] 🕐 Seleção de horário com períodos segregados em manhã, tarde e noite
- [x] 📋 Visualização da agenda com consultas marcadas
- [x] 🗓️ Navegação entre dias para agendamentos passados e futuros
- [x] ✏️ Edição e exclusão de agendamentos via Server Actions
- [x] 🛡️ Validação de formulários com React Hook Form e Zod
- [x] 🔄 Revalidação de cache no server side com `revalidatePath`

---

## 🚀 Como rodar

### 📋 Pré-requisitos

- 🟩 [Node.js 18+](https://nodejs.org/)
- 🐳 [Docker](https://www.docker.com/)

### 🔧 Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/joschonarth/mundo-pet.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd mundo-pet
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Configure as variáveis de ambiente copiando o arquivo de exemplo:

    ```bash
    cp .env.example .env
    ```

    Em seguida, abra o arquivo `.env` e preencha as variáveis com as credenciais do seu banco de dados:

    ```env
    DATABASE_URL="postgresql://docker:docker@localhost:5432/petshop?schema=public"
    ```

5. Suba o container do PostgreSQL com o Docker:

    ```bash
    docker-compose up -d
    ```

6. Execute as migrations do banco de dados:

    ```bash
    npx prisma migrate dev
    ```

### ▶️ Execução

```bash
# Inicia o servidor de desenvolvimento
npm run dev
```

Acesse **[http://localhost:3000](http://localhost:3000)** no navegador.

### 🏗️ Build de produção

```bash
# Gera o build otimizado
npm run build

# Inicia o servidor de produção
npm run start
```

---

## 🔍 Qualidade de Código

O projeto utiliza **Biome** via **Ultracite** para garantir um código limpo e padronizado.

```bash
# Verifica erros de lint e formatação
npm run check

# Corrige automaticamente os erros encontrados
npm run fix
```

---

## ⭐ Apoie este Projeto

Se curtiu o projeto, deixe uma ⭐ aqui no GitHub — isso ajuda muito!

---

<div align="center">

Feito com ♥ por **[João Otávio Schonarth](https://github.com/joschonarth)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joschonarth)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:joschonarth@gmail.com)

</div>
