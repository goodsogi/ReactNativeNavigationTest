import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';


export default class ScreenB extends Component {
   
   
    render() {
            
          return (
   <View style={styles.container}/>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});

