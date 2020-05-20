import React from 'react'
import {View,Text} from 'react-native'
import {useDispatch,useSelector} from "react-redux";

function Welcome() {
  // const {price} = useSelector(state=>state.login);
  return (
    <View>
      <Text>欢迎界面</Text>
    </View>
  )
}

export default Welcome
