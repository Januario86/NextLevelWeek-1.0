# Ecoleta -  This is a web and mobile application to get find a  recycled points of collect
<h3 align="center">
    <img alt="Logo" title="#logo" width="300px" src="assets/home-background.svg">
    <br><br>
    
</h3>
## :rocket: Tecnologies usage in the project

- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)

## start project **Node.JS**

```bash
$ npm init -y
$ npm install express
```
<br/>

## Configuration and Using **TypeScript**
```bash
$ npm install @types/express -D
```
<br/>

### Install of TypeScript
```bash
$ npm install ts-node -D
$ npm install typescript -D
```
<br/>

### TypeScript
```bash
$ npx tsc --init
```
<br/>

## Config **ts-node-dev** no package.json
### automatic restart server at save updates
Em *package.json*:
```json
"scripts": {
  "dev": "ts-node-dev --ignore node_modules src/server.ts"
  "knex:migrate":"knex migrate:latest --knexfile knexfile.ts migrate:latest"
}
```
```bash
$ npm run dev
# ou
$ yarn dev
```
<br/>

## Start project React
```bash
$ npx create-react-app web --template=typescript
```
<br/>

## Install Knex and sqlite3 database
```bash
$ npm install knex
$ npm install sqlite3
```
<br/>

## Execute Knex Migrations
```bash

$ npx knex migrate:lastest --knexfile <nameFile.ts> migrate:latest
```
<br/>

## Fonts de Icons
```bash
$ npm install react-icons
```
<br/>

## Routes
```bash
$ npm install react-router-dom -D
```
<br/>

## Maps
```bash
$ npm install leaflet react-leaflet

<br/>
