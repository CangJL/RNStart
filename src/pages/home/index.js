import React from 'react'
import {View, Text, Button,TouchableOpacity} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from '@react-navigation/native'

function Home() {
  // const {price} = useSelector(state=>state.login);
  const navigation = useNavigation();

  const toPath = () => {
    navigation.navigate('Login');
    console.log("login")
  }

  return (
    <View>
      <Text>主页界面</Text>
      <Button
        title="Go to login"
        onPress={toPath}
      />
    </View>
  )
}

export default Home
