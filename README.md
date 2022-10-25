# Podcaster
This is a web application made in ReactJS to listen to the top 100 most listened podcasts in us.

### Build modes.

First of all install the dependencies using: `npm install`
As specified in the test there are two ways to excecute this project:

  - Development mode.
    This will server non minimized assets. Execute:
    `npm run dev`
  
  - Production mode.
    This will server all the assets minimized. Execute:
    `npm run prod`



### Tecnologies.

- Vite.
  An modern alternative to webpack and parcel. It offers an optimized way to bundle your application which results in an amazingly fast
  deployments.

  Check out more here: [Vite](https://vitejs.dev/)

- Standard. 
  It is a common practise to use a lintern in your developments. I choose standard and that it is because
  something they say in the docs:
  "Adopting standard style means ranking the importance of code clarity and community conventions higher than personal style. This might not make sense for 100% of projects and development cultures, however open source can be a hostile place for newbies. Setting up clear, automated contributor expectations makes a project healthier."

  Check out more here: [standardJS](https://standardjs.com/)

- Tailwind.
  It is a utility-first framework packed with CSS classes. I choose tailwind in small applications due to its easy installation proccess 
  and learning curve. It also comes with a config file which you can customize following your product design lines.

  Check out more here: [TailwindCSS](https://tailwindcss.com/docs/installation)

- React-Router.
  The most extended library for react routes. It helps you make your application SPA.

  Check out more here: [React-Router](https://reactrouter.com/en/main/start/overview)

- React-Query.
  Which is a modern library that comes with cache handling out of the box. I used it to handle the data retrieve on the server side and I
  combined it with React Context to handle the data that comes from the client side. This is a great approach for small projects like this.

  Check out more here: [React-Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)

- PropTypes.
  Due to the project dimension I decided to go with JavaScript but as the good practises always mention it is important to use default props and proptypes in your project for run-time issues on it.

- Playwright.
  This part is not included in the test but I decided to add a common e2e test that tests the main functionallities of the project.

  Check out more here: [Playwright](https://playwright.dev/docs/intro)


### Improvements.

- e2e tests: There is a simple end to end test that checks the functionallity of the project.
  It navigates throught it and checks if everything is loading correctly.

- Responsive design: As an UX & UI I do appreciate when interfaces respond properly to each device sizes.
  The application can be run design properly in mobile, tablets and desktop.
  I used figma for the responsive design. I mix flex and grid throught the project just to show how they can 
  be combined perfectly.

- Errors: This is not specifically an improvement but every request and every possible error are handled inside the project. They will be printed out in the console as an error level.

- GitHub Actions: I added a simple github action that get executed each time someone create a pull request or merge to main branch.
This action is in charge to:
  1. Linter the code.
  2. Execute e2e tests.

- Develop to free production server: I used vercel platform to deploy the application. Please keep in mind that this production version is not stable.
  Check it out here: [Non stable prod server](https://podcaster-ten.vercel.app/)