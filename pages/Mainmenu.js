/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import Mybutton from './components/Mybutton';


export default class Mainmenu extends React.Component {
  constructor() {
    super()
    this.state = {
      showME: true
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        showME: false
      })
    }, 4000)
  }

  render() {
    return (
      <View >
        {
          this.state.showME ?
            <ActivityIndicator size="large" color="#ff0000" />
            :
            <View>
              <Text style={styles.headerText}>การใช้งาน.</Text>
              <Mybutton
                title="สนทนา"
                customClick={() => this.props.navigation.navigate('Chat')}
              />
              <Mybutton
                title="คำถามที่พบบ่อย"
                customClick={() => this.props.navigation.navigate('Question')}
              />
              <Mybutton
                title="บันทึกผลสรุป"
                customClick={() => this.props.navigation.navigate('Result')}
              />
              <Mybutton
                title="ข้อมูลส่วนตัว"
                customClick={() => this.props.navigation.navigate('Profile')}
              />
              <Mybutton
                title="การตั้งค่า"
                customClick={() => this.props.navigation.navigate('Setting')}
              />
            </View>
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
});
