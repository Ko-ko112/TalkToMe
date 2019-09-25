/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View, Platform, StyleSheet, Text,Image, KeyboardAvoidingView, Alert, ScrollView } from 'react-native';
import Mybutton from './components/Mybutton';



const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7FCCFF'
  },
  QHead: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#000000', 
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1'
 }

});
 
export default class Question extends React.Component {

state = {
      names: [
         {'name': 'คำถาม1', 'id': 1},
         {'name': 'คำถาม2', 'id': 2},
         {'name': 'คำถาม3', 'id': 3},
         {'name': 'คำถาม4', 'id': 4},
         {'name': 'คำถาม5', 'id': 5},
         {'name': 'คำถาม6', 'id': 6},
      ]
   }


  render() {
      let pic = {
      uri: 'https://sv1.picz.in.th/images/2019/08/14/ZfoT3J.png'
     };
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#white',
          flexDirection: 'column',
        }}>
    <ScrollView>
        <View  style={{ padding:10 ,alignItems: 'center'}}>
        <Text style={styles.QHead}>คำถามที่พบบ่อย?</Text>
        <Image source={pic} style={{width: 150, height: 150}}/>  
        </View> 

        <View>
               {
                  this.state.names.map((item, index) => (
                        <Text key = {item.id} style = {styles.item}>{item.name}</Text>                     
                  ))
               }
            
         </View>

         <View  style={{ padding:10 ,alignItems: 'center'}}>
        <Mybutton
          title="ลองทำแบบทดสอบ"
          customClick={() => this.props.navigation.navigate('WebExam')} 
        />
        </View> 

       </ScrollView>
      </View>
    );
  }
}
