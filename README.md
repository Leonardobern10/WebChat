# Chat Real-Time Project

Este projeto implementa um chat em tempo real utilizando **WebSockets** para a comunicação entre clientes e servidor. Ele permite que os usuários enviem e recebam mensagens instantaneamente, com uma interface simples e funcional.

## Imagens
<div style="text-align:center;">
  <img src="images/Captura%20de%20tela%202024-11-30%20164213.png" width="300" height="250"/>
  <img src="images/Captura%20de%20tela%202024-11-30%20164322.png" width="300" height="250"/>
  <img src="images/Captura%20de%20tela%202024-11-30%20164340.png" width="300" height="250"/>
</div>

## Funcionalidades

- **Envio e recebimento de mensagens em tempo real**: As mensagens são enviadas para o servidor e distribuídas para todos os clientes conectados de forma instantânea.
- **Histórico de mensagens**: As mensagens anteriores são carregadas quando o usuário entra no chat.
- **Interface simples e responsiva**: O chat pode ser utilizado em diferentes dispositivos devido à sua interface adaptável.
- **Identificação de usuários**: Cada usuário pode se identificar com um nome de usuario para usar o chat.

## Tecnologias Utilizadas

### Frontend
- **React**: Framework utilizado para a construção da interface de usuário.
- **Styled-components**: Utilizado para estilização dos componentes de forma dinâmica e modular.
- **Socket.io**: Biblioteca para comunicação em tempo real entre cliente e servidor.

### Backend
- **Node.js**: Ambiente de execução JavaScript para o servidor.
- **Express.js**: Framework para construção de APIs RESTful.
- **Socket.io**: Biblioteca para gerenciar a comunicação em tempo real via WebSockets.

### Banco de Dados
- **MySQL**: Utilizado para armazenar os dados do chat (mensagens e usuários).

## Instalação

### Pré-requisitos

Antes de rodar o projeto, você precisa ter as seguintes ferramentas instaladas:

- **Node.js**: [Instalar Node.js](https://nodejs.org/)
- **MySQL**: [Instalar MySQL](https://www.mongodb.com/try/download/community) (ou use uma instância na nuvem)

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/chat-real-time-project.git
   ```

2. Acesse o diretório do backend:

   ```bash
   cd chat-real-time-project/backend
   ```

3. Instale as dependências do backend:

   ```bash
   npm install
   ```

4. Inicie o servidor:

   ```bash
   npm start
   ```

5. Acesse o diretório do frontend:

   ```bash
   cd ../frontend
   ```

6. Instale as dependências do frontend:

   ```bash
   npm install
   ```

7. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

8. O projeto estará disponível em [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura do Projeto

A estrutura do repositório é organizada da seguinte forma:

```
chat-real-time-project/
│
├── backend/                # Servidor Node.js com Express e WebSocket
│   ├── models/             # Modelos do banco de dados (MongoDB)
│   ├── controllers/        # Lógica de controladores para o chat
│   ├── routes/             # Definições das rotas do backend
│   └── server.js           # Inicia o servidor Express e configura os WebSockets
│
├── frontend/               # Aplicação React para o chat
│   ├── components/         # Componentes React (ex: Chat, Message)
│   ├── services/           # Lógica de interação com o backend (Sockets)
│   ├── App.js              # Componente principal do chat
│   └── index.js            # Ponto de entrada da aplicação React
│
└── README.md               # Este arquivo
```

## Como Contribuir

Se você quiser contribuir para o projeto, siga os seguintes passos:

1. Fork o repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Faça as alterações e commite-as (`git commit -am 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Crie um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Se você tiver alguma dúvida, pode me encontrar nas seguintes redes:

- Email: [leonardo.bernardo2658@gmail.com](leonardo.bernardo2658@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/leonardo-bern)

---

Desenvolvido por [Leonardo Bernardo](https://github.com/Leonardobern10)
