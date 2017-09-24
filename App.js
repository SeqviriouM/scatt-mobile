import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Route} from 'react-router-native'

import Home from './app/pages/Home';
import Create from './app/pages/Create';
import Calibration from './app/pages/Calibration';
import Dashboard from './app/pages/Dashboard';

export default class App extends React.Component {
    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/create" component={Create}/>
                        <Route path="/calibration" component={Calibration}/>
                        <Route path="/dashboard" component={Dashboard}/>
                    </View>
                </View>
            </NativeRouter>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        paddingTop: 30,
        backgroundColor: '#333',
    },
    content: {
        flex: 1,
        backgroundColor: '#fff5e9',
        height: '100%'
    }
});
