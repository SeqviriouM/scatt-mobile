import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native'
import Home from './app/pages/Home/Home';
import Create from './app/pages/Create/Create';

export default class App extends React.Component {
    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/create" component={Create}/>
                </View>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff5e9',
        height: '100%'
    },
});
