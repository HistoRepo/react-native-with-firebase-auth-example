import React, {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default React.createClass({
   render() {
       return (
         <View style={styles.container}>
            <Text>Welcome</Text>
         </View>  
       );
   } 
});

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
   } 
});