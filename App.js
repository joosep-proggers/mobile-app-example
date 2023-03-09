import React, { useEffect } from "react";
import { Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import Signin from "./src/screens/auth/Signin"

import Home from "./src/screens/app/Home";
import Favorites from "./src/screens/app/Favorites";
import Profile from "./src/screens/app/Profile";
import Settings from "./src/screens/app/Settings"

import * as auth from './auth.json'
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { colors } from "./src/utils/colors";
import ProductDetails from "./src/screens/app/ProductDetails";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const isSignedIn = true

const ProfileStack = () => {
  return(
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false }} />
        <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let icon;

        if(route.name === "Home"){
          icon = focused
          ? require("./src/assets/tabs/home-active.png")
          : require("./src/assets/tabs/home.png")
        } else if (route.name === "Favorites") {
          icon = focused
          ? require("./src/assets/tabs/favorites-active.png")
          : require("./src/assets/tabs/favorites.png")
        } else if (route.name === "ProfileStack") {
          icon = focused
          ? require("./src/assets/tabs/profile-active.png")
          : require("./src/assets/tabs/profile.png")
        }

        return <Image style={{width:24, height:24}} source={icon} />
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {borderTopColor: colors.lightGray}
    })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  )
}

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
      webClientId: auth.WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: auth.IOS_CLIENT_ID,
    });
  }, []);

  const theme = {
    colors: {
      background: colors.white
    },
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {
            isSignedIn ? (
              <>
                <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown: false}} />
              </>
            ) : (
              <>
                <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
                <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
                <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
              </>
            
            )
          }
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider> 
  );
};
export default App;
