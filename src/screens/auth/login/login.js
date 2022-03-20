import React from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";

import styles from "./style";
import globalStyles from "../../../styles/global-styles";

class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <TextInput style={styles.textInput} placeholder="Email" />
                    <TextInput style={styles.textInput} placeholder="Password" />

                    <TouchableOpacity style={[styles.button, styles.login]}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <Text style={globalStyles.textCenter}>or</Text>

                <TouchableOpacity style={[styles.button, styles.loginAsGuest]}>
                        <Text style={styles.loginButtonText}>Login as Guest</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

export default Login;