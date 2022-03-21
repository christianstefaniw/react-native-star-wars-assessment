import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { Actions } from 'react-native-router-flux';

const LoadAccount = WrappedComponent => {
    return class extends React.Component {
        async componentDidMount() {
            if (!AsyncStorage.getItem('email'))
                return;
            Actions.pilots();
        }

        render() {
            return (
                <>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }
}

export default LoadAccount;