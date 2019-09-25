
import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';
import Mainmenu from './pages/Mainmenu';
import Question from './pages/Question';
import Result from './pages/Result';
import Setting from './pages/Setting';
import Web from './pages/Web';
import Admin from './pages/Admin';
import WebExam from './pages/WebExam';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import LoginUser from './pages/LoginUser';

const App = createStackNavigator({

  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: '',
      headerStyle: { backgroundColor: '#7FCCFF' },
      headerTintColor: '#ffffff',
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'View All User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Update User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Delete User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Mainmenu: {
    screen: Mainmenu,
    navigationOptions: {
      title: 'Main menu',
      headerStyle: { backgroundColor: '#7FCCFF' },
      headerTintColor: '#ffffff',
    },
  },
  Question: {
    screen: Question,
    navigationOptions: {
      title: 'Q And A',
      headerStyle: { backgroundColor: '#7FCCFF' },
      headerTintColor: '#ffffff',
    },
  },
  Result: {
    screen: Result,
    navigationOptions: {
      title: 'บันทึกผลสรุป',
      headerStyle: { backgroundColor: '#7FCCFF' },
      headerTintColor: '#ffffff',
    },
  },
  Setting: {
    screen: Setting,
    navigationOptions: {
      title: 'การตั้งค่า',
      headerStyle: { backgroundColor: '#7FCCFF' },
      headerTintColor: '#ffffff',
    },
  },
  Web: {
    screen: Web,
    navigationOptions: {
      title: 'ฟังเพลง',
      headerStyle: { backgroundColor: '#7FCCFF' },
      headerTintColor: '#ffffff',
    },
  },
  Admin: {
    screen: Admin,
    navigationOptions: {
      title: 'Admin',
      headerStyle: { backgroundColor: '#7FCCFF' },
      headerTintColor: '#ffffff',
    },
  },
  WebExam: {
    screen: WebExam,
    navigationOptions: {
      title: 'แบบทดสอบ',
      headerStyle: { backgroundColor: '#7FCCFF' },
      headerTintColor: '#ffffff',
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
      headerStyle: { backgroundColor: '#7FCCFF' },
      headerTintColor: '#ffffff',
    },
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      title: 'Talk To Me',
      headerStyle: { backgroundColor: '#7FCCFF' },
      headerTintColor: '#ffffff',
    },
  },
  LoginUser: {
    screen: LoginUser,
    navigationOptions: {
      title: 'Login',
      headerStyle: { backgroundColor: '#7FCCFF' },
      headerTintColor: '#ffffff',
    }
  },
});

//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(App);