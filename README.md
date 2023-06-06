# finder-pet
React + TS application for finding and adopting a pet

Deployed at https://finder-pet.netlify.app/

## Application
<img width="1427" alt="image" src="https://github.com/arturacm/finder-pet/assets/63562936/e2e6e8fd-07f1-4085-b4c3-26dfab1c76f8">
<img width="1427" alt="image" src="https://github.com/arturacm/finder-pet/assets/63562936/0593fb15-2a7e-45ea-a92d-01d3e4e642b8">
<img width="1428" alt="image" src="https://github.com/arturacm/finder-pet/assets/63562936/acc67edb-88c4-46f5-b787-73ff90217088">
<img width="376" alt="image" src="https://github.com/arturacm/finder-pet/assets/63562936/ddafeaab-fa0b-4401-a9b7-6442cd69a1ec">
<img width="376" alt="image" src="https://github.com/arturacm/finder-pet/assets/63562936/50d1a4ab-721e-466a-a611-82df5ded5fe1">
<img width="1437" alt="image" src="https://github.com/arturacm/finder-pet/assets/63562936/ea94cf9a-e924-4742-82bf-8657ac54fde0">
<img width="920" alt="image" src="https://github.com/arturacm/finder-pet/assets/63562936/bb053798-654e-4b41-b02d-3af5b9c38227">




## Technologies

Frontend application with:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)
- [React Hook From](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Redux](https://redux-toolkit.js.org/)

- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [EsLint](https://eslint.org/)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Husky](https://typicode.github.io/husky/)
- [Supabase](https://supabase.com/)

- [Commitlint](https://commitlint.js.org/#/)
- [Vite](https://vitejs.dev/)
- [React-router-dom V6](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [yarn](https://classic.yarnpkg.com/lang/en/)
- [nvm](https://github.com/nvm-sh/nvm)

## Backend
On the curent version of this project, the backend is partially being mocked but it is using Supabase for initial Auth.
You can eather create a simple supabase project for handling credentials or you can use this one.
Note that the project **WONT START** without the propper `.env` credentials.

## Credentials
You can login on the [deployed website](https://finder-pet.netlify.app/) using the credentials:
```
email: admin@admin.com
password: admin123
```


## Getting started

1. Clone the repository <br>
   (Recommended) Use nvm for changing your node version to the same one used in the project by running:
   ```
   nvm use
   ```
2. Install the dependencies. (Recommended use of [yarn](https://classic.yarnpkg.com/lang/en/))
   ```
   yarn install
   ```
3. Setup Envs. 
   ```
   cp .env.example .env
   ```
   Make sure to fill in the values of the secrets like it was mentioned in the **Backend section**
4. Run the project with

   ```
   yarn dev
   ```

   Your project should be running in the `localhost:5173` (vite's default)
