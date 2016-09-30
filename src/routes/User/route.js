
// import routeCreator from '../../creator/route'


// const container = require('./container').default
// const reducer = require('./reducer').default


// export default routeCreator('user', container, reducer)


import { injectReducer } from '../../store/reducers'


const module = 'user'


export default store => ({
    path: module,
    /*  Async getComponent is only invoked when route matches   */
    getComponent(nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
            and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
                dependencies for bundling   */
            const container = require('./container').default
            const reducer = require('./reducer').default

            /*  Add the reducer to the store on key 'counter'  */
            injectReducer(store, { key: module, reducer })

            /*  Return getComponent   */
            cb(null, container)

            /* Webpack named bundle   */
        }, 'user')
    }
})
