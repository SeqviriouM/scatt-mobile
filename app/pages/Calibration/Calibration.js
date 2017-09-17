import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route } from 'react-router-native';
import VideoFinder from '../../components/VideoFinder/VideoFinder';

export default class Calibration extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Route exact path="/calibration/video" component={VideoFinder}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});