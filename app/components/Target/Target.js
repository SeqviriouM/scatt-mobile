import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import styles from './Target.style';

const itemsCount = 10;

export default class Target extends React.Component {
    renderItems() {
        const items = Array.from(new Array(itemsCount), () => 0);

        return items.map((item, index) => (
            <View key={`target-${index}`} style={styles.item}>
                <Text style={{textAlign: 'center'}}>Мишень</Text>
            </View>
        ));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Выберите мишень</Text>
                <ScrollView contentContainerStyle={styles.items} scrollEnabled={true}>
                    {this.renderItems()}
                </ScrollView>
                <View>
                    <Link to="/" style={styles.back}>
                        <Text style={styles.backText}>Назад</Text>
                    </Link>
                </View>
            </View>
        );
    }
}
