import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import Item from './Item.js';
 



const Album = () => {


    return (<View style = {styles.container}>

               <Item
                image = "https://scontent.fwgc1-1.fna.fbcdn.net/v/t1.0-1/c62.0.160.160/p160x160/13932920_1661902187465018_8402234750830897329_n.jpg?_nc_cat=0&oh=a6b24972df34cc6f6d42c6575b23e726&oe=5B624738"
                 name = "Teja Kalikota" 
                 go = "https://www.facebook.com/profile.php?id=100009357591167"
                 />
               <Item image = "https://scontent.fwgc1-1.fna.fbcdn.net/v/t1.0-1/c20.0.160.160/p200x200/25158433_2138891799472392_3919727297277685853_n.jpg?_nc_cat=0&oh=5cf3e26c5933539e076e526496642b3d&oe=5B61CC9F"
                name = "Harshini Kalikota"
                 go = "https://www.facebook.com/harshu1005"
                 />
               <Item image = "https://scontent.fwgc1-1.fna.fbcdn.net/v/t1.0-9/13221501_1119110474818762_3999996776881032605_n.jpg?_nc_cat=0&oh=a73e3c2cbef511c5a63219d7c7f7eb7b&oe=5B935A70"
                name = "Shruthi Reddy" 
                go = "https://www.facebook.com/shruthi.reddy.37454"
                />
               <Item image = "https://scontent.fwgc1-1.fna.fbcdn.net/v/t1.0-1/c204.44.551.551/s160x160/12232_4428907086100_1281473904_n.jpg?_nc_cat=0&oh=e4a022cbf78970880cfb4c2af26dcc67&oe=5B98EA16"
                name = "Shravani kalikota"
                 go = "https://www.facebook.com/shraxz"/>
               <Item image = "https://scontent.fwgc1-1.fna.fbcdn.net/v/t1.0-9/21687512_10154805885880796_3980308553414466559_n.jpg?_nc_cat=0&oh=f9901c8466d24f616cb1d98c0730358c&oe=5B63016E"
                name = "Shahi Naquash"
                go = "https://www.facebook.com/shahi.naquash"
                />
               <Item image = "https://scontent.fwgc1-1.fna.fbcdn.net/v/t1.0-1/p160x160/12994403_478042695727786_5525188922273668824_n.jpg?_nc_cat=0&oh=df5716c54a347879cac309ef891e4bd4&oe=5B63843F" 
               name = "Depa Sravya Reddy"
                go = "https://www.facebook.com/depa.sravyareddy.7"
                />
               <Item image = "https://scontent.fwgc1-1.fna.fbcdn.net/v/t1.0-1/c0.20.160.160/p160x160/10570469_949383211764682_1872789558233823493_n.jpg?_nc_cat=0&oh=173d615a758eb44adaa9fb3fc29c6f9c&oe=5B636AC6"
                name = "Akhil Bhargav" 
                go = "https://www.facebook.com/kadarla.akhilbhargav"
                 />
            
            

           </View>);
}


const styles = {

    container:{

        flex : 1,

        flexDirection : 'column',

        backgroundColor : '#963f3f'
    }
}



export default Album;