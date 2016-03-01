'use strict';
import React, {
  StyleSheet,
  Text,
  View,
  Navigator,
  TextInput,
} from 'react-native';

import Firebase from 'firebase';

import Button from './button.js';

const auth = new Firebase("https://<URL>.firebaseIO.com");

export default React.createClass({
  getInitialState() {
    return {
      email: '',
      password: '',
      passwordConfirmation: '',
      errorMessage: ''
    };
  },
  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>

        <Text style={styles.label}>Email:</Text>
        <TextInput
          value={this.state.email}
          onChangeText={(text) => this.setState({email: text})}
          style={styles.input} />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}
          style={styles.input} />

        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
          secureTextEntry={true}
          value={this.state.passwordConfirmation}
          onChangeText={(text) => this.setState({passwordConfirmation: text})}
          style={styles.input} />
        
        <Text style={styles.label}>{this.state.errorMessage}</Text>
        
        <Button text={'Signup'} onPress={this.onSignUpPress} />
        <Button text={'Back'} onPress={this.onBackPress} />
      </View>
    );
  },
  onSignUpPress() {
    
    if (this.state.password !== this.state.passwordConfirmation ) {
      return this.setState({errorMessage: 'Your passwords do not match'});
    }
      auth.createUser({
        email    : this.state.email,
        password : this.state.password
      }, (error, authData) => {
        if (error) {
            this.setState({errorMessage: error.message});
        } else {
            this.props.navigator.push({name: 'signin'});
        }
    });
  },
 onBackPress() {
     this.props.navigator.pop();
 }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  label: {
    fontSize: 18
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  }
});