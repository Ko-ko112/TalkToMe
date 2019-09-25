/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View, Platform, StyleSheet, Text,Image, ScrollView, Alert,ImageBackground} from 'react-native';
import Mybutton from './components/Mybutton';
import Mytextinput from './components/Mytextinput';
import MytextinputPW from './components/MytextinputPW';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7FCCFF'
  },
  appname: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF', 
  }
});

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_sex VARCHAR(20), user_password VARCHAR(20))',
              []
            );
          }
        }
      );
    });
  }

  render() {
    
     let pic = {
      uri: 'https://www.img.in.th/images/f8e5ebe9cded5c57c7de4cc8b4bacc86.png'
     };

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#7FCCFF',
          flexDirection: 'column',
      }}>
 
       
        <View  style={styles.container}> 
        <Text style={styles.appname}>Talk To Me</Text>
        <Image source={pic} style={{width: 300, height: 300}}/>  
        </View> 

        <View style={{flex: 1}}>

            
        <Mybutton
          title="เข้าสู่ระบบ"
          customClick={() => this.props.navigation.navigate('LoginUser')}
        />
        <Mybutton
          title="สมัครสมาชิก"
          customClick={() => this.props.navigation.navigate('Register')}
        />
        <Mybutton
          title="Admin"
          customClick={() => this.props.navigation.navigate('Admin')}
        />

        </View>

        

      </View>
      
    );
  }
}
