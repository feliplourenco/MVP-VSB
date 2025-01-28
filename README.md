
# Recriando o Notion com React

O Notion é um aplicativo de produtividade e anotações que oferece ferramentas organizacionais, incluindo gerenciamento de tarefas, rastreamento de projetos, listas de tarefas, favoritos e muito mais.

Hoje você vai poder ver na prática como criar um projeto clone do Notion utilizando React. E o melhor: vamos deixar a funcionalidade de edição funcionando. 


## Autores

- [@renanalencar](https://www.github.com/renanalencar)
- [@rocketseat](https://www.github.com/rocketseat)

## Referência

 - [Recriando o Notion com React (editor funcionando!)](https://www.youtube.com/live/-SDxID3BS4I?si=and59TTF1yf6jRvV)
 - [Hypercolor](https://hypercolor.dev/)
 - [CodeBlockLowlight extension](https://tiptap.dev/docs/editor/extensions/nodes/code-block-lowlight)
 - [lowlight](https://www.npmjs.com/package/lowlight)
 - [BubbleMenu extension](https://tiptap.dev/docs/editor/extensions/functionality/bubble-menu)
 - [FloatingMenu extension](https://tiptap.dev/docs/editor/extensions/functionality/floatingmenu)
 - [Radix](https://www.radix-ui.com/)
 - [cmdk](https://cmdk.paco.me/)
 - [Liveblocks](https://liveblocks.io/)
 - [Liveblocks](https://liveblocks.io/)
 - [Supabase](https://supabase.com/docs)
 - [Yjs](https://yjs.dev/)
 - [Upstash](https://upstash.com/)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
