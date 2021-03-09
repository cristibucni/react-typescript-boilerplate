# React Typescript Boilerplate

React Typescript Boilerplate is designed to serve as a way of speeding up the process of setting up new React projects.

## Installation

Use the package manager [yarn](https://yarnpkg.com/getting-started) to install.

```bash
yarn install
```

## Starting

#### Development

```bash
yarn start
```

#### Production

```bash
yarn start:prod
```


## Configuration

* React
* Typescript
* Redux
* React-redux
* Redux-thunk
* Axios
* i18n
* React-JSS
* Webpack
* Babel

## Usage
#### Folder Structure
* **components** serves as reusable, small, stateless components
* **containers** serves as stateful modules
* **assets** serves as the root of any custom icons/images/fonts added to the project
* **i18n** serves as the root of any locales and translations added to the project
* **store** serves as redux configuration as well as root of actions/reducers/types
* **utils** serves as the root of any app-wide used module with no dependencies on containers/components
* **services** serves as the root of any api service used throughout the application

#### Naming conventions
* Folders inside **containers** should be **PascalCase**
* Folders inside **components** should be **kebab-case**
* Any module's main file should be named **index.tsx**
* Any styling file should be named **styles.js**

### Imports
Imports should be split into the following categories:
1. React and 3rd party modules
2. Actions, types, utils
3. User created modules/components
4. Icons, images
5. Styles files

* Imports from any given subcategory should be alphabetically sorted
* Subcategories should have a line break after the last import from a given subcategory
* Any 3rd party CSS should be imported inside **app/styles.js**

#### Theming
All themes should be put inside **containers/Themes/** and mimic the configuration of default theme main.js.

#### Services
Any back-end application connected to this application should have its own service inside **services** folder and mimic the configuration of the default service.

## License
MIT License