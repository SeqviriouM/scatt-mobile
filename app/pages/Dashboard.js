import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route } from 'react-router-native';
import Shoot from '../components/Shoot/Shoot';
import Graph from '../components/Graph/Graph';

export default class Dashboard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Route exact path="/dashboard/shoot" component={Shoot}/>
                <Route exact path="/dashboard/graph" component={Graph}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});