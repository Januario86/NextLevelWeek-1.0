# O Ecoleta é uma aplicação Web e Mobile para ajudar pessoas a encontrarem pontos de coleta para reciclagem.
<h3 align="center">
    <img alt="Logo" title="#logo" width="300px" src=".assets/home-background.svg">
    <br><br>
    
</h3>
## :rocket: Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)

## Iniciando o **Node.JS**
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

### Instalando o TS
```bash
$ npm install ts-node -D
$ npm install typescript -D
```
<br/>

### Criando arquivo de configuração TS
```bash
$ npx tsc --init
```
<br/>

### Gerando JS
```bash
$ npx ts-node <dir>
```
<br/>

### Pacote para reiniciar o server automaticamente
```bash
$ npm install ts-node-dev -D
$ npx ts-node-dev <dir>
```
<br/>

## Configurando **ts-node-dev** no package.json
### Para reiniciar automaticamente o servidor ao salvar arquivos. 
Em *package.json*:
```json
"scripts": {
  "dev": "ts-node-dev <dir>"
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
