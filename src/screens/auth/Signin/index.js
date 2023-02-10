import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'

import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { styles } from "./styles";

const Signin = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const handlePress = () => {
    console.log("pres :D");
  };

  const onBack = () => {
    navigation.goBack()
  }

  const onSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader title="Sign In" onBackPress={onBack}/>
        <Input label="Email" placeholder="example@gmail.com" />
        <Input isPassword label="Password" placeholder="********" />
        <Button title="Sign In" onPress={handlePress}></Button>
        <Separator text="Or sign in with" />
        <GoogleLogin />
        <Text style={styles.footerText}>
          Don't have an account?
          <Pressable onPress={onSignUp}>
            <Text style={styles.footerLink}> Sign Up </Text>
          </Pressable>
          
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
