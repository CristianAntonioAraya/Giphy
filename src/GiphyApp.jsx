import React from 'react'
import { Provider } from 'react-redux'
import AppRoutes from './routes/AppRoutes'
import { store } from './store/store'

const GiphyApp = () => {
    return (
        <Provider  store={store}>
            <AppRoutes/>
        </Provider>
    )
}

export default GiphyApp
