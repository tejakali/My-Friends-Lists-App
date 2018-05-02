
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) =>
{

    return (  <View style = {styles.container}>
          <Text style = {styles.text}>{props.text}</Text>
      </View>);
}


const styles = StyleSheet.create({
    container: {
    
     backgroundColor: '#848484',
     height: 60,
     paddingTop:15,
     alignItems: 'center',
     borderColor: '#4c4b4b',
     borderBottomWidth: 2,
     justifyContent: 'center',
     elevation: 2,
     position: 'relative'
    }
    ,
    text : {
      fontSize: 25,
      color: '#fff'

    }
  
   
  }
  );

  export default Header;