import { StyleSheet, Platform, Dimensions } from "react-native"

const win = Dimensions.get('window');
const ratio = win.width / 541;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171821'
    },
    imageBanner: {
        width: win.width,
        height: 362 * ratio,
        resizeMode: 'contain',
        marginBottom: 35,
    },
    movieName: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: '500',
        marginHorizontal: 24,
    },
    playButton: {
        borderRadius: 5,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 15,
        left: 24,
        right: 24,
        minHeight: 50,
        zIndex: 1,
        elevation: (Platform.OS === 'android') ? 50 : 0
    },
    contentText : {
        paddingHorizontal: 24,
        color: '#FFF'
    },
    watchNow : {
        color: "#FFF",
        fontWeight:'bold',
        fontSize:20
    }
})