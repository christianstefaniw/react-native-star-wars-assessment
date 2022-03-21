import React from 'react';
import { Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux'

import store from '../../redux/store';

import Login from '../../screens/auth/login/login';
import Pilots from '../../screens/pilots/pilots';

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <Scene key="root">
                    <Scene key='login' component={Login} title="Login" initial={true} />
                    <Scene key='pilots' component={Pilots} title="Pilots" />
                </Scene>
            </Router>
        </Provider>
    )
}