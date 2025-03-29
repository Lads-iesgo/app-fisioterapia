# App de Fisioterapia

Este projeto é um aplicativo React Native desenvolvido com Expo e TypeScript, destinado a [descreva brevemente o propósito do aplicativo, por exemplo: auxiliar pacientes em seus exercícios de fisioterapia, fornecer informações sobre exercícios, etc.].

## Tecnologias Utilizadas

* **React Native:** Framework para construção de aplicativos móveis multiplataforma.
* **Expo:** Plataforma para desenvolvimento universal de aplicativos React Native.
* **TypeScript:** Superset de JavaScript que adiciona tipagem estática.
* **Node.js:** Ambiente de tempo de execução JavaScript.
* **npm (ou Yarn):** Gerenciador de pacotes JavaScript.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [https://nodejs.org/](https://nodejs.org/).

## Configuração do Projeto

1.  **Crie a pasta do projeto:**

    ```bash
    mkdir app-fisioterapia
    cd app-fisioterapia
    ```

2.  **Crie o projeto Expo com TypeScript:**

    ```bash
    npx create-expo-app . --template expo-template-blank-typescript
    ```

    * O ponto (`.`) indica que o projeto será criado dentro da pasta atual.
    * `--template expo-template-blank-typescript` configura o projeto para usar TypeScript.

3.  **Inicie o servidor Expo:**

    ```bash
    npx expo start
    ```

    Este comando inicia o servidor de desenvolvimento Expo, permitindo que você visualize o aplicativo em um emulador, simulador ou dispositivo físico.

## Executando o Aplicativo

Para executar o aplicativo novamente, siga estes passos:

1.  Navegue até o diretório do projeto:

    ```bash
    cd app-fisioterapia
    ```

2.  Inicie o servidor Expo:

    ```bash
    npx expo start
    ```

## Estrutura do Projeto

📦 MeuProjeto
 ┣ 📂 assets/            # Imagens e outros arquivos estáticos
 ┣ 📂 src/               # Código-fonte principal
 ┃ ┣ 📂 components/      # Componentes reutilizáveis
 ┃ ┣ 📂 screens/         # Telas do aplicativo
 ┃ ┣ 📂 services/        # Requisições para APIs
 ┃ ┗ 📂 styles/          # Estilos globais
 ┃ ┗ 📂 utils/           # Funções auxiliares
 ┣ 📜 App.tsx            # Arquivo principal do aplicativo
 ┣ 📜 package.json       # Dependências do projeto
 ┣ 📜 tsconfig.json      # Configuração do TypeScript
 ┗ 📜 README.md          # Documentação do projeto


