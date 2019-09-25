/*Screen to register the user*/
import React from 'react';
import { View, YellowBox, ScrollView, KeyboardAvoidingView, Alert, } from 'react-native';
import Mytextinput from './components/Mytextinput';
import MytextinputPW from './components/MytextinputPW';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });


export default class LoginUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_contact: '',
      user_password: '',
      
    };
  }
  
  login_user = () => {
    var that = this;
    const {user_contact} =this.state;
    console.log(this.state.user_contact);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_user where user_contact = ?',
        [user_contact],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len',len);
          if (len > 0) {
            console.log(results.rows.item(0).user_contact);
            Alert.alert(
              'Success',
              'You are Login Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () =>
                    that.props.navigation.navigate('Mainmenu'),
                },
              ],
              { cancelable: false }
            );
            
          }else{
            alert('No user found');
            this.setState({ 
              user_contact:'',
            });
          }
        }
      );
    });
  };

  /*
  test_login_user = () => {
    var that = this;
    const { user_contact } = this.state;
    const { user_password } = this.state;
    //alert(user_name, user_lastname, user_contact, user_address, user_bod);

      
        if (user_contact) {
            if (user_password) {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO table_user (user_contact, user_password) VALUES (?,?)',
              [user_contact, user_password],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'You are Login Successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('Mainmenu'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  alert('Login Failed');
                  }
                
              }
            );
          });
        } else {
          alert('Please fill Password');
        }
        
    } else {
      alert('Please fill Contact Number');
    }
  }
  */
  

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="Enter User Contact"
              style={{ padding:10 }}
              onChangeText={user_contact => this.setState({ user_contact })}
            />
            <MytextinputPW
              placeholder="Enter User password"
              style={{ padding:10 }}
              onChangeText={user_password => this.setState({ user_password })}
            />
          <Mybutton
              title="Login"
              customClick={this.login_user.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}


