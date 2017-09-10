import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        marginTop: 20
    },
    content: {
        flex: 1,
        paddingBottom: 0,
    },
    title: {
        marginTop: 10,
        paddingLeft: 20,
        paddingBottom: 20,
        fontSize: 18,
        borderBottomWidth: 2,
        borderBottomColor: '#3e2723'
    },
    users: {
        paddingBottom: 50
    },
    user: {
        margin: 20,
        justifyContent: 'center',
        backgroundColor: '#fbecdf',
        borderColor: '#ffd3ae',
        borderWidth: 1,
        borderRadius: 3,
    },
    userText: {
        padding: 20,
        textAlign: 'left',
        fontSize: 16
    },
    section: {
        margin: 20
    },
    sectionText: {
    
    },
    sectionControl: {
        height: 40
    },
    add: {
        position: 'absolute',
        bottom: 70,
        right: 20,
        borderRadius: 30,
        width: 60,
        height: 60,
        backgroundColor: '#c43e00',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addIcon: {
        marginTop: 2
    },
    saveUserSection: {
        width: '100%',
        height: 50,
        backgroundColor: '#c43e00'
    },
    saveUserText: {
        textAlign: 'center',
        lineHeight: 40,
        fontSize: 22,
        color: '#fff'
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