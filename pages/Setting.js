/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View, StyleSheet, Text, Picker, Switch, ScrollView } from 'react-native';


 
export default class Mainmenu extends React.Component {
    state = {department: ''}
    updateDepartment = (department) => {
       this.setState({ department: department })
    }

    constructor() {
        super();
        this.state = {
           switch1Value: false,
        }
     }
  
     toggleSwitch1 = (value) => {
        this.setState({switch1Value: value})
     }
  
  render() {
    return (
        
        <View>
        <Picker selectedValue = {this.state.department} onValueChange = {this.updateDepartment}>
           <Picker.Item label = "ภาษาไทย" value = "ภาษาไทย" />
           <Picker.Item label = "English" value = "English" />
           <Picker.Item label = "Other" value = "...." />
        </Picker>
        <Text style = {styles.text}>{this.state.department}</Text>
    
        <View style={{flex: 1, alignItems: 'flex-start'}}>
        <Text style={{fontSize:25}}>การแจ้งเตือน</Text>
        <Switch onValueChange = {this.toggleSwitch1} value = {this.state.switch1Value}/>
         </View>
     </View>
    );
    
  }
}   

const styles = StyleSheet.create({
    text: {
       fontSize: 30,
       alignSelf: 'flex-start',
       color: 'red'
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
 })
 
 
 



