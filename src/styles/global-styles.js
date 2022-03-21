import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    horizontalLine: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    textCenter: {
        textAlign: 'center'
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
    }
});

export default globalStyles;