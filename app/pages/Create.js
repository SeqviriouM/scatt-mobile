import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Route } from 'react-router-native';
import Target from '../components/Target/Target';
import User from '../components/User/User';

export default class Create extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Route exact path="/create/target" component={Target}/>
                <Route path="/create/user" component={User}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});