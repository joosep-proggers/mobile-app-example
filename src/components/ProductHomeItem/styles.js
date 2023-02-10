import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8
    },
    image: {
        height: 32,
        width: 32,
        borderRadius: 8
    },
    title: {
        color: colors.textGray
    },
    price: {
        color: colors.black
    }
})