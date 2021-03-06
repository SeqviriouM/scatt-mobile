import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        marginTop: 10
    },
    content: {
        flex: 1,
        paddingBottom: 50
    },
    title: {
        marginTop: 10,
        paddingLeft: 20,
        paddingBottom: 20,
        fontSize: 18,
        borderBottomWidth: 2,
        borderBottomColor: '#263238'
    },
    items: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 50
    },
    item: {
        flexGrow: 1,
        width: '40%',
        height: 150,
        margin: 20,
        justifyContent: 'center',
        backgroundColor: '#fbecdf',
        borderColor: '#ffd3ae',
        borderWidth: 1,
        borderRadius: 3,
    },
    itemLink: {
        height: '100%',
        justifyContent: 'center'
    },
    itemText: {
        padding: 20,
        textAlign: 'center',
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