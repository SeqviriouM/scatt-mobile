import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

export default class Test extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={textStyles.baseText}>Тестовая страница</Text>
                <View style={{marginTop: 20}}>
                    <Link to="/">
                        <Text>Назад</Text>
                    </Link>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const textStyles = StyleSheet.create({
    baseText: {
        color: '#089',
        fontSize: 22
    }
});