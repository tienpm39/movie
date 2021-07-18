import { StyleSheet } from "react-native"
import * as Utils from '@utils';
export default StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#171821',
        justifyContent: 'center'
    },
    heading: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: "600",
        marginHorizontal: 24,
        marginVertical: 20
    },
    movieItem: {
        width: Utils.scaleWithPixel(135),
        height: Utils.scaleWithPixel(160),
    },
    movieName : {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },
    subName : {
        color: '#F5F5F5'
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 40,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: '600',
    },
    modalText: {
        fontSize: 18,
        color: '#555',
        marginTop: 14,
        textAlign: 'center',
        marginBottom: 10,
    },
})