import { StyleSheet } from "react-native";

import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 14,
        color: colors.blue,
        marginBottom: 16
    },
    image: {
        width: 100,
         height: 100,
         borderRadius: 8,
         marginRight: 8
    },
    uploadContainer: {
        width: 100,
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.gray,
        borderStyle: 'dotted',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        marginRight: 8,
        marginTop: 20
    },
    uploadCircle: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: colors.lightGray,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadPlus: {
        color: colors.white,
        fontSize: 28,
        marginTop: -4
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    imageContainer : {
        flexDirection: 'row',
        marginRight: 8
    },
    delete: {
        width: 24,
        height: 24,
        marginTop: -6,
        marginLeft: -24
    },
    textarea: {
        minHeight: 120,
        paddingTop: 16,
    }
})