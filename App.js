import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'
import Welcome from './components/Welcome';
import Test from './components/Test';

export default class App extends React.Component {
  render() {
    return (
        <NativeRouter>
          <View style={styles.container}>
            <Route exact path="/" component={Welcome} />
            <Route path="/test" component={Test} />
          </View>
        </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
