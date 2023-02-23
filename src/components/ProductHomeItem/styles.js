import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    image: {
        height: 220,
        width: (width -76) / 2,
        borderRadius: 8
    },
    title: {
        color: colors.textGray,
        paddingVertical: 8
    },
    price: {
        color: colors.black,
        paddingBottom: 8
    }
})