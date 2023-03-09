import { StyleSheet } from "react-native";

import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: colors.white,
        marginVertical: 12,
        borderRadius: 4
    },
    label: {
        color: colors.gray,
        fontSize: 12,
        marginBottom: 6
    },
    input: {
        color: colors.blue,
        fontSize: 14,
        fontWeight: '500'
    }
})