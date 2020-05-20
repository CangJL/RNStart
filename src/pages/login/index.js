import React from 'react'
import {View, Text, Button} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {increase, decrease} from "./loginSlice";

function Login() {
  const dispatch = useDispatch();
  const {price} = useSelector(state => state.login);
  return (
    <View>
      <Text>登录界面{price}</Text>
      <Button
        title="+"
        onPress={() => dispatch(increase())}
      />
      <Button
        title="-"
        onPress={() => dispatch(decrease())}
      />
    </View>
  )
}

export default Login
