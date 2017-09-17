import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import Touchable from '../../components/Touchable/Touchable';

import styles from './VideoSeeker.style';

export default class Target extends React.Component {
    renderContent() {
        return (
            <Text>
                Видеоискатель
            </Text>
        );
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Настройка видеоискателя</Text>
                <ScrollView contentContainerStyle={styles.items}>
                    {this.renderContent()}
                </ScrollView>
                <Link component={Touchable} to="/" style={styles.back}>
                    <Text style={styles.backText}>В главное меню</Text>
                </Link>
            </View>
        );
    }
}
