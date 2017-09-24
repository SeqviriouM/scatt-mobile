import React from 'react';
import { Text, View, ScrollView} from 'react-native';
import { Link } from 'react-router-native';

import Touchable from '../../components/Touchable/Touchable';

import styles from './Shoot.style';


export default class Shoot extends React.Component {
    renderContent() {
        return (
            <View>
                <Text>
                    Выстрел
                </Text>
            </View>
        );
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Дашборд</Text>
                <ScrollView contentContainerStyle={styles.content}>
                    {this.renderContent()}
                </ScrollView>
                <Link component={Touchable} to="/calibration/video" style={styles.back}>
                    <Text style={styles.backText}>Назад</Text>
                </Link>
            </View>
        );
    }
}
