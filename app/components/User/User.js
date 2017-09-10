import React from 'react';
import { Text, View, Button } from 'react-native';
import { Link } from 'react-router-native';
import styles from './User.style';

export default class User extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Выберите стрелка</Text>
                </View>
                <Link to="/create/target" style={styles.back}>
                    <Text style={styles.backText}>Назад</Text>
                </Link>
            </View>
        );
    }
}
