import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        marginTop: 10
    },
    content: {
        // flex: 1,
        marginBottom: 50
    },
    title: {
        marginTop: 10,
        paddingLeft: 20,
        paddingBottom: 20,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#263238'
    },
    graphContainer: {
        margin: 20,
        marginTop: 0
    },
    graph: {
        paddingTop: 20
    },
    chart: {
        height: 300
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