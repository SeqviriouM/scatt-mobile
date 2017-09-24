import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        marginTop: 10
    },
    content: {
        flex: 1,
        paddingBottom: 25
    },
    scroll: {
        flex: 1
    },
    title: {
        marginTop: 10,
        paddingLeft: 20,
        paddingBottom: 20,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#263238'
    },
    target: {
        height: 200,
        maxWidth: 400,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: '#263238'
    },
    targetText: {
        color: '#fff',
        fontSize: 36
    },
    settings: {
        borderBottomWidth: 1,
        borderBottomColor: '#263238'
    },
    settingsIcon: {
        position: 'absolute',
        top: 7,
        right: 10
    },
    checkbox: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    checkboxText: {
        color: '#333'
    },
    slider: {
        padding: 20
    },
    sliderText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "500",
        color: '#333'
    },
    back: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        backgroundColor: '#795548'
    },
    backText: {
        textAlign: 'center',
        lineHeight: 40,
        fontSize: 22,
        color: '#fff'
    }
});