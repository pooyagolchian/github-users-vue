# Press Page GitHub Users with Vue.js 3

This project has been developed with the last version of Vue.js 3 and Vuex.

- Vue.js
- Vuex
- Javascript
- Cypress for E2E
- Prettier, ESLint, Husky
- Netlify and GithubAction for CI/CD automate testing

---

## DEMO URL GITHUB Users

- [DEMO URL](https://github-users-vue-pp.netlify.app/)

---

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your end-to-end tests

```
yarn test:e2e
```

### Lints and fixes files

```
yarn lint
```

---

---

# Code scaffolding

- I use several mythology of clean code in this frontend project.

### BEM

BEM is used for methodology with SCSS format to create reusable components for this task. I follow the structure
developed in the dummy files.

### Prettier

Using [Prettier](https://prettier.io/) for opinionated code formatter. It will take care of formatting for you. Prettier
creates an abstract syntax tree from your code and uses it to write new code formatted according to a set of rules. In
addition, I check pretty before every commit by add a pre-commit hook. For more detail check package.json, husky
section.

### Husky

Husky is used for git hook pre-commit to format all code with Prettier.

### SOLID

Regarding the `S` for `SOLID` I just tried to keep each function(component as a function as well) to just responsible
for a single task. That's why I just created a separate component for every part and also keep it simple stupid.

---

## Test with React Testing Library

`yarn test`

## Cypress E2E

`yarn cypress open`
