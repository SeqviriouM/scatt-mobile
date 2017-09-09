import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'react-router-native';

export default class Welcome extends React.Component {
    buttonPress = () => {
        this.setState({count: ++this.state.count});
    };

    state = {
        count: 1
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={textStyles.baseText}>Добро пожаловать</Text>
                <View style={{marginTop: 20}}>
                    <Button title="Начать" onPress={this.buttonPress} />
                </View>
                <View style={{marginTop: 20}}>
                    <Text>{this.state.count}</Text>
                </View>
                <View style={{marginTop: 20}}>
                    <Link to="/test">
                        <Text>Тестовая страница</Text>
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
        color: '#333',
        fontSize: 22
    }
});