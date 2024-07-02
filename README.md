# Aplicação de Atividades

Esta aplicação é um projeto React que permite aos usuários visualizar uma lista de atividades. Ela utiliza o Axios para fazer requisições HTTP, gerenciando estados com o React Hooks.

## Funcionalidades

- **Visualização de Atividades**: Os usuários podem visualizar as atividades disponíveis, que são buscadas de um backend através de uma API.
- **Estado de Carregamento**: Enquanto as atividades estão sendo carregadas, um estado de carregamento é exibido.
- **Gerenciamento de Erros**: A aplicação é capaz de gerenciar e exibir erros que podem ocorrer durante a busca de atividades.
- **Controle de Interface**: A interface permite a interação com elementos como inputs e checkboxes para filtrar ou modificar as atividades exibidas.

## Tecnologias Utilizadas

- **React**: Para a construção da interface do usuário (conceitos como useState, eventos, useEffect, Props, consumo de api). 
- **Axios**: Para realizar requisições HTTP ao backend (GET, POST, PUT e DELETE) 
- **CSS**: Para estilização dos componentes (Cada componente teve seu CSS organizado na sua pasta). 
- **Spring boot**: Para a construção do diagrama do sistema, definindo o banco de dados e as regras do sistema (Criação por camada MVC com a definição dos métodos GET, POST, PUT e DELETE). 
  
## Estrutura do Projeto

- `Atividades.jsx`: Componente principal que renderiza a lista de atividades e gerencia o estado da aplicação.
- `inputAtividade/Input.jsx`: Componente de criação de atividades.
- `alert/AlertaPersonalizado.jsx`: Componente para exibir alertas ou mensagens de erro.
- `assets/Atividade.css`: Arquivo de estilos CSS para a estilização dos componentes.

## Como Executar

1. Clone o repositório para sua máquina local.
2. Navegue até a pasta do projeto e instale as dependências com `npm install`.
3. Execute a aplicação com `npm start`. A aplicação estará disponível em `http://localhost:3000`.


## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes. 
