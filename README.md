# react-hooks-ts-tailwindcss-todos
Rebuild todo list with hooks tailwind css

https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/ 

mkdir todos && cd todos
yarn init -y

https://grant-bartlett.com/blog/react-typescript-parcel-starter-project/

yarn add  -- dev parcel-bundler

tsc --init

 {
    "compilerOptions": {
        "target": "es5",
        "module": "es2015",
        "jsx": "react",
        "moduleResolution": "node",
        "lib": [
            "dom",
            "es5",
            "es6"
        ]
    },
    "include": [
        "src/**/*"
    ]
}

make src/index.html

yarn parcel src/index.html 

yarn add react react-dom @types/react @types/react-dom --dev

https://dev.to/ism/svelte-tailwind-parcel-awesome-4891


yarn add -D tailwindcss autoprefixer @fullhuman/postcss-purgecss

yarn tailwind init

Create base styles file - src/global.pcss with the following content.
 @tailwind base;
 @tailwind components;
 @tailwind utilities;

touch postcss.config.js

Add the following lines of code to your PostCSS file:

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
      './src/**/*.jsx',
      './src/**/*.js',
      './src/**/*.tsx',
      './public/index.html'
    ],  
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  })

  module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      ...process.env.NODE_ENV === 'production' ? [purgecss] : []
    ],
  };


Finally, include the following line in the head tag in index.html.

<link rel="stylesheet" href="./global.pcss" />


Add redux and react-redux to the project

  yarn add react-redux @types/react-redux redux

  https://redux.js.org/recipes/usage-with-typescript/

  https://github.com/piotrwitek/react-redux-typescript-guide/blob/master/playground/src/store/root-reducer.ts