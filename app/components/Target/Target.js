import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import Touchable from '../../components/Touchable/Touchable';

import styles from './Target.style';

const targets = [
    '10м Мишень для пневматического пистолета',
    '10м Мишень для пневматической винтовки',
    '25/50 Мишень для малокалиберного пистолета',
    '50м Мишень для малокалиберной винтовки',
    '25м Грудная мишень № 4',
    '50ft NRA/USA-50 Rifle Target',
    '50ft NRA Official Smallbore Rifle Target 4 Position (NRA A-17)',
    '58yds NRA Official Smallbore Rifle Target Prone (NRA A-27)',
    '50yds NRA Official Smallbore Rifle Target (NRA A-23/5)',
    '50ft NRA Official Pistol Target Slow Fire (NRA b-2)',
    '50yds NRA B-6 Pistol 22 cal',
    '25yds Official Pistol Target Slow Fire (NRA B-16)',
];

export default class Target extends React.Component {
    renderItems() {
        return targets.map((item, index) => (
            <View key={`target-${index}`} style={styles.item}>
                <Link component={Touchable} to="/create/user" style={styles.itemLink}>
                    <Text style={styles.itemText}>{item}</Text>
                </Link>
            </View>
        ));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Выберите мишень</Text>
                <ScrollView contentContainerStyle={styles.items}>
                    {this.renderItems()}
                </ScrollView>
                <Link component={Touchable} to="/" style={styles.back}>
                    <Text style={styles.backText}>Назад</Text>
                </Link>
            </View>
        );
    }
}
