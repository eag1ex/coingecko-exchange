### Coingecko Exchange
#### - [ Developed by Eaglex ](http://eaglex.net)

#### About
React with Mobx application showing bitcoin exchanges in a paged list with view to each bitcoin product detail.

- Using coingecko api, documentation on `https://www.coingecko.com/api/documentations/v3#/`
- React stateless application
- Mobx Store
- App routing
- Mobx state handling
- Tests and Coverage provided
- React Material and Bootstrap 


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
Running tests:
- Test files are located in `./src/__tests__` and `./src/setupTests.js`
- You can access coverage from `./coverage/lcov-report/index.html`
- Performing tests requires access to `coingecko api`

```sh
/$ npm run test # only test
/$ npm run coverage # runs test with coverage
```


#### Code Hierarchy
- App
- Components
- Pages
    - Exchange

- Store
    - api `(list of available api)`
    - Mobx `(store and state manager)`
- Theme `(scss and React Material)`
- Utils


#### Api
This application consumes 2 (GET) apis: `https://api.coingecko.com/api/v3/exchanges/` and `https://api.coingecko.com/api/v3/exchanges/{id}`

- Refer to docs: `https://www.coingecko.com/api/documentations/v3#/`


#### Troubleshooting
Having issues with fetch, taking too long to load the results, in chrome on windows just run this in Command Prompt CLI:
`C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C:\temp`

#### Create-react-app readme:
To know more about `npx create-react-app my-app` please read on here:
`https://github.com/facebook/create-react-app/blob/master/README.md`


#### Configs
- Sass/scss: the `.env` file needs to be adjusted depending on your OS environment, as per instructions in: `https://create-react-app.dev/docs/adding-a-sass-stylesheet`


#### Notes
- Not tested for production as yet.


##### LICENSE
* LICENCE: CC BY-NC-ND
* SOURCE: https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode

##### Thank you

