import React from 'react';
import { StyleSheet, Text, View, AccessibilityInfo,ScrollView } from 'react-native';
import Header from './components/Header.js';
import Album from './components/Album.js';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
         <View>
           <Header text = "My Friends List"/>
           <Album/>
           
          </View>
        </ScrollView>
    );
  }
}
