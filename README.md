## Getting Started

- npm install --save-dev sass
- npm install bootstrap
- npm run dev
- Open [http://localhost:3000](http://localhost:3000). You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
- Firstly import bootstrap bundled scss and js in pages/_app.js
- Found an issue with importing bootstrap js files and found the fix to use the useEffect hook to require the bootstrap js files in _app.js. ["https://blog.logrocket.com/handling-bootstrap-integration-next-js/"]. This error is due to the document object not being available untill the page loads due to next.js server side rendering by default feature.
- Change globals to scss file in and update pages/_app.js import
- Add sass partials for rating, thankyou and main.
- import partials into globals. use rules go first!
- When importing a google font make sure to add to the end '&display:swap'. So the browser displays a font whilst this font is being loaded!
- Create components/index/ and add all components needed!
- Dont need home.module.css as we are not using modules in this project.
- Need a state in main component to be able to change to the thankyou component! This is passed down with props so child components can change the value to re-render the main - component and change to the thankyou component! We also need a state variable for the selectdRating that gets passed from the rating component to the main component!
rating component doesnt need to rerender so we use a normal variable here.
- From here we can just style our components using the partials we have setup!
- I try to prioritize using bootstrap classes first though.
- To get the responsiveness i use bootstrap breakpoints and media queries at the same breakpoints in my partials!
- Use of display:swap in google font to ensure lighthouse 






[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
