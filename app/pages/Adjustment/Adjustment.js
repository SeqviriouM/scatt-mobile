import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route } from 'react-router-native';
import VideoSeeker from '../../components/VideoSeeker/VideoSeeker';

export default class Adjustment extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Route exact path="/adjustment" component={VideoSeeker}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});