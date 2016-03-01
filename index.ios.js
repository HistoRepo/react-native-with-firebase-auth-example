'use strict';
import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import Firebase from 'firebase';

import Signup from './signup.js';
import Signin from './signin.js';
import Dashboard from './dashboard.js';

var ROUTES = {
  signup: Signup,
  signin: Signin,
  dashboard: Dashboard
};
    
var firebaseauth = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name]; 
    return <Component route={route} navigator={navigator} />;
  },
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
        />
    );
  }
});

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('firebaseauth', () => firebaseauth);
