import { StyleSheet } from "react-native";
import AppColors from "../../../theme/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    formContainer: {
        width: '95%',
        alignSelf: 'center'
    },

    textInput: {
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 16,
        padding: 16,
        marginBottom: 12
    },

    button: {
        padding: 15,
        alignSelf: 'center',
        borderRadius: 20,
        marginVertical: 10,
    },

    login: {
        backgroundColor: AppColors.PRIMARY,
        width: '75%'
    },

    loginAsGuest: {
        backgroundColor: AppColors.SECONDARY,
        width: '50%',
    },

    loginButtonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
    }
});

export default styles;