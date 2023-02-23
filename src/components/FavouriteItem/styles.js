import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        paddingVertical: 16,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 10,
        marginRight: 20
    },
    title: {
        color: colors.textGray,
        paddingVertical: 8
    },
    price: {
        color: colors.black,
        paddingBottom: 8
    },
    content: {
        flex: 1
    },
    icon: {
        height: 24,
        width: 24,
    }
})