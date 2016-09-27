// We only need to import the modules necessary for initial render
import RootLayout from '../layouts/RootLayout'
import CoreLayout from '../layouts/CoreLayout'
import Root from './Root'
// import CounterRoute from './Counter'
import LoginRoute from './Login'
import UserRoute from './User'
import NotFound from './NotFound'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: RootLayout,
  indexRoute: { component: Root },
  childRoutes: [
    LoginRoute(store),
    {
      path: '/',
      component: CoreLayout,
      // indexRoute: Root,
      childRoutes: [
        // CounterRoute(store),
        UserRoute(store)
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes