import React from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { connect } from 'react-redux';

import styles from "./style";
import globalStyles from "../../../styles/global-styles";
import { login, loginAsGuest } from "../../../services/auth/actions";

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        }
    }

    login = () => {
        this.props.login(this.state.email);
    }

    loginAsGuest = () => {

    }

    handleTextChange = (name, value) => {
        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        value={this.state.email}
                        autoCapitalize={'none'}
                        onChangeText={(text) => this.handleTextChange('email', text)}
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={this.state.password}
                        autoCapitalize={'none'}
                        onChangeText={(text) => this.handleTextChange('password', text)}
                    />

                    <TouchableOpacity onPress={this.login} style={[styles.button, styles.loginButton]}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <Text style={globalStyles.textCenter}>or</Text>

                <TouchableOpacity onPress={this.props.loginAsGuest} style={[styles.button, styles.loginAsGuestButton]}>
                    <Text style={styles.loginButtonText}>Login as Guest</Text>
                </TouchableOpacity>

                <Text style={globalStyles.errorText}>{this.props.error}</Text>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email) => dispatch(login(email)),
        loginAsGuest: () => dispatch(loginAsGuest()),
    };
};

const mapStateToProp = state => {
    return {
        error: state.auth.loginError
    };
}

export default connect(
    mapStateToProp,
    mapDispatchToProps
)(Login);