import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { Actions } from 'react-native-router-flux';

const LoadAccount = WrappedComponent => {
    return class extends React.Component {
        async componentDidMount() {
            console.log(await AsyncStorage.getItem('email'));
            if ((await AsyncStorage.getItem('email')) === null)
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