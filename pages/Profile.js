import React from 'react';
import { View, Button, Text, DatePickerAndroid, Image, SectionList ,StyleSheet} from 'react-native';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 20,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
  

export default class Profile extends React.Component {

   render() {
      let pic = {
         uri: 'https://www.img.in.th/images/338e27ebbea6eea44c747e1437fa8bc7.png' 
        };
      return(   
             
         <View style={{ marginTop : 10, flex : 1,}}>

            
            <View  style={{ padding:10 ,alignItems: 'center'}}>
            <Image source={pic} style={{width: 100, height: 100}}/>  
            </View>

            <View style={styles.container}>
            <SectionList
             sections={[
            {title: 'บัญชี', data: ['ชื่อ Admin', 'เพศ', 'วันเกิด']},
            
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        </View>

            

         </View>
      );
   }
}
