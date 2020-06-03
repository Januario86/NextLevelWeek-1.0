# Ecoleta -  é uma aplicação que auxilia pessoas a encontrarem pontos de coleta para reciclagem. 
<h3 align="center">
    <img alt="Logo" title="#logo" width="300px" src="assets/home-background.svg">
    <br><br>
    
</h3>
##:rocket: Abaixo temos as Tecnologias Utilizadas no Projeto

- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)

## Como iniciar o **Node.JS**
### Para iniciar um projeto node utilizar:
```bash
$ npm init -y
$ npm install express
```
<br/>

## Configurando e Utilizando **TypeScript**
### Tipagem para o *express*
```bash
$ npm install @types/express -D
```
**Obs:** "-D" para dependência de desenvolvimento! 
<br/>

### Instalando o TypeScript
```bash
$ npm install ts-node -D
$ npm install typescript -D
```
<br/>

### Criando arquivo de configuração TypeScript
```bash
$ npx tsc --init
```
<br/>

## Configurando **ts-node-dev** no package.json
### Para reiniciar automaticamente o servidor ao salvar arquivos. 
Em *package.json*:
```json
"scripts": {
  "dev": "ts-node-dev src/server.ts"
}
```
```bash
$ npm run dev
# ou
$ yarn dev
```
<br/>

## Iniciando projeto React
```bash
$ npx create-react-app web --template=typescript
```
##Instalando o Knex para banco de dados
````bash
$ npm install knex
