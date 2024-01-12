# Flexdrive Admin Frontend - Based on Material UI & Next.js Pages Router example

## How to use

Install it and run:

```bash
npm install
npm run dev
```

## The idea behind the example

**Note:** This example is set up to use the Next.js Pages Router.
As of Next.js 13.4, the newer App Router pattern is stable.
We recommend starting new projects with the [Material UI with Next.js (App Router) example](https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs) unless you need (or prefer) the Pages Router.

The project uses [Next.js](https://github.com/vercel/next.js), which is a framework for server-rendered React apps.
It includes `@mui/material` and its peer dependencies, including [Emotion](https://emotion.sh/docs/introduction), the default style engine in Material UI v5.
If you prefer, you can [use styled-components instead](https://mui.com/material-ui/guides/interoperability/#styled-components).

## The Link component

The [example folder](https://github.com/mui/material-ui/tree/HEAD/examples/material-ui-nextjs-pages-router) provides an adapter for the use of [Next.js's Link component](https://nextjs.org/docs/pages/api-reference/components/link) with Material UI.
More information [in the documentation](https://mui.com/material-ui/guides/routing/#next-js-pages-router).


## Others

Material UI does not have a good Navbar. It is better to implement a new one by yourself based on the AppBar and Menu. 
Eventhough, the Navbar is poor to experience.

Forms in Material UI have strange problems on arranging. The demo code works different from the official tutorials.

The `queryClient` cannot work well in this example. Although I tried various methods to attach QueryClientProvider to my App.
