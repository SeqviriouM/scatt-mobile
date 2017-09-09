import React from 'react';
import { Text, View, Button } from 'react-native';
import { Link } from 'react-router-native';
import styles from './User.style';

export default class User extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Выберите стрелка</Text>
                <Link to=""><Text>Назад</Text></Link>
            </View>
        );
    }
}
