### Coingecko Exchange
#### - [ Developed by Eaglex ](http://eaglex.net)

#### About

You create your a bucket with any number of tasks, all actions connected to rest api end points

- App page routing support
- Connected to real api end points
- Stateless application
- Mobx Store


#### Install 
Build in `Node.js 12.0.0` and `NPM 6.9.0` in strict mode, maybe supported on higher but not tested

```sh
/$ npm i 
```


#### Start
Opens in http://localhost:3000/

```sh
/$ npm start
```

#### Stack
Application stack: `React v16, Mobx v6, es6, MVC, React Material (configurable), Bootstrap (configurable), x-utils-es, Javascript`


#### Tests
First you need to install test:tools, run `npm run test:tools:install`



#### Code Hierarchy
- App

- Pages
    - Home

- Store
    - api `(list of available api)`
    - Mobx `(store and state manager)`
- Theme `(scss and React Material)`
- Utils


#### Api
Refer to : `https://www.coingecko.com/api/documentations/v3#/`



#### Troubleshooting
Having issues with fetch, taking too long to load the results, in chrome on windows just run this in Command Prompt CLI:
`C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:\temp`

#### Create-react-app readme:
To know more about `npx create-react-app my-app` please read on here:
`https://github.com/facebook/create-react-app/blob/master/README.md`


#### Configs
- Sass/scss: the `.env` file needs to be adjusted depending on your OS environment, as per instructions in: `https://create-react-app.dev/docs/adding-a-sass-stylesheet`


#### Developer Notes


#### Tests


#### TODO




##### LICENSE
* LICENCE: CC BY-NC-ND
* SOURCE: https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode


##### Thank you

