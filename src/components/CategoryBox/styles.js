import { StyleSheet } from "react-native";

import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: colors.gray
    },
    image: {
        height: 32,
        width: 32
    },
    imageContainer: {
        backgroundColor: colors.lightGray,
        padding: 8,
        borderRadius: 4,
        marginBottom: 8
    }
})