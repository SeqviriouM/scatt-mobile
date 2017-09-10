import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        marginTop: 20
    },
    content: {
        flex: 1,
        paddingBottom: 50
        // margin: 20,
    },
    title: {
        marginLeft: 20,
        marginBottom: 20,
        fontSize: 16
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