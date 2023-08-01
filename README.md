## Technical
Library is using in project:

| Name | Version | Port |Note |
| ------ | ------ | ------ | ------ |
| NestJS | 8.1.1 | 4000 | |

## How to run
1. Clone project
2. Run command: `npm install`
3. Run command: `npm start`
4. Open browser with url: `http://localhost:4000/`

## How to install NestJS
- Create
    + Create with npm: `npm install -g @nestjs/cli`
    + Create with yarn: `yarn global add @nestjs/cli`
- Import to use
    + Add component to use: `import { Module } from '@nestjs/common';`
- add folder use npm
    + npm add module: `nest g module <name>`
    + npm add controller: `nest g controller <name>`
    + npm add service: `nest g service <name>`
- More information: [NestJS](https://docs.nestjs.com/)

## app.enableCors();
- Add to main.ts file to allow cors: `app.enableCors();`
- Description: it will allow all cors request from all domain to access api
- More information: [NestJS](https://docs.nestjs.com/)



