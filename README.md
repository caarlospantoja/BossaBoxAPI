# BossaBoxAPI
## Testes de API do desafio BossaBox

O framework utilizado para implementação deste desafio foram:
- Jest: Framework que possibilita a escrita e execução de testes automatizados;
- Supertest: Framework que possibilita execução de requisições HTTP e visualizar as respostas.
- JavaScript: Linguagem de desenvolvimento

## Configuração de Ambiente
** Verifique se já existe o Node.js instalado em sua máquina **

Após fazer o clone do projeto, navegue até a pasta ..\__test__ e execute os seguintes comandos para instalação das depedências:
- npm install jest @types/jest -D
- npm install jest @types/jest ts-jest -D
- npx jest --init
- npm install supertest --save-dev
- npm install -D ts-node
- npm i

No arquivo package.json gerado, verifique se o script "test": "jest" foi criado, caso não, adicione esta dependencia.

# Executando os testes

Para executar os testes que estão no arquivo ..\__test__\index.test.js execute o comando:
- npm run test