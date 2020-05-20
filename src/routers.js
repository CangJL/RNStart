import React from "react";
import Welcome from "./pages/welcome"
import Login from "./pages/login"
import Home from "./pages/home"
import Settings from "./pages/settings"
import Mine from "./pages/mine"
import Community from "./pages/community"
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default function Routers() {
  const Tab = createBottomTabNavigator();
  const RootStack = createStackNavigator();
  const HomeStack = createStackNavigator();

  const [welcomeShow,setWelcomeShow] = React.useState(true)

  const HomeStackScreen = ()=>{
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="首页" component={Home} />
        {/* other screens */}
      </HomeStack.Navigator>
    );
  }

  const CommunityStack = createStackNavigator();
  const CommunityStackScreen = ()=>{
    return (
      <CommunityStack.Navigator>
        <CommunityStack.Screen name="社区" component={Community} />
        {/* other screens */}
      </CommunityStack.Navigator>
    );
  }

  const MineStack = createStackNavigator();
  const MineStackScreen = ()=>{
    return (
      <MineStack.Navigator>
        <MineStack.Screen name="我的" component={Mine} />
        {/* other screens */}
      </MineStack.Navigator>
    );
  }

  const HomeTabs = ()=>{
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="HomeTab"
          component={HomeStackScreen}
          options={{
            tabBarLabel: '首页' ,
          }}
        />
        <Tab.Screen name="CommunityTab" component={CommunityStackScreen} options={{ tabBarLabel: '社区' }}/>
        <Tab.Screen
          name="MineTab" component={MineStackScreen}
          options={{
            tabBarLabel: '我的' ,
            tabBarIcon:({focused,color,size})=>{
              const iconName = `${focused ? 'user' : 'user'}`;
              return (
                <SimpleLineIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
          }}/>
      </Tab.Navigator>
    );
  }

  React.useEffect(()=>{
    setTimeout(()=>{
      setWelcomeShow(false);
    },1000);
  },[])

  return (
    <RootStack.Navigator>
      {
        welcomeShow ?
          <RootStack.Screen name="Welcome" component={Welcome}/>
          :
          <React.Fragment>
            <RootStack.Screen name="HomeTabs" component={HomeTabs} options={{headerShown:false}}/>
            <RootStack.Screen name="Login" component={Login}/>
            <RootStack.Screen name="Settings" component={Settings}/>
          </React.Fragment>
      }
    </RootStack.Navigator>
  );
}
