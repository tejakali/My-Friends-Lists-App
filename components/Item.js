


import React from 'react';
import { StyleSheet, Text, View,Image , Linking } from 'react-native';





const Item = (props) => {

    const src = props.image;

    return (<View style = {styles.text} >
           
              
               <View>
                   <Image 
                        style={{width: 70, height: 70 , borderRadius : 40}}
                         source={{uri: src }}
              
                      />
               </View>

              <View 
               style = {styles.nameContainer}>
                <Text
                 style = {styles.name}
                 >{props.name}
                 
                </Text>

              </View>

          <View style = {styles.goContainer}>
               <View
                  style = {styles.goButton}
                     > 
                     <Text
                      style = {styles.go}
                      onPress= {() => Linking.openURL(props.go)}
                      >
                        Go!
                     </Text>
               </View>
          </View>
            
         </View>);
}





const styles = StyleSheet.create({
    
    text : {
    
       flexDirection: 'row',
       backgroundColor : '#ddc3c3',
       height: 80,
       marginTop: 5,
       alignItems: 'center'
     
    },

    nameContainer : {
       
             marginLeft : 40

    },
    name : {

        fontSize : 15,
        fontWeight : "900"
    },
    goContainer : {
     flex:1,
     height:80,
     flexDirection: 'row',
     alignItems : 'center',
     justifyContent: 'flex-end',



    },
    goButton : {
         width : 100,
         height: 40,
         padding : 20,
         backgroundColor:"#686767",
         justifyContent: 'center',
         alignItems: 'center',
         marginRight : 5,
         borderWidth : 2,
         borderRadius : 5,
         borderColor : "#3d3b3b"


    },
    go : {

        color : "#fff",
        fontSize : 20,
        fontWeight : "900",
      
    } 

  
   
  });

  export default Item;


