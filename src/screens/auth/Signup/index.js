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

const Signup = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const handlePress = () => {
    console.log("pres :D");
  };

  const onBack = () => {
    navigation.goBack()
  }

  const onSignIn = () => {
    navigation.navigate('Signin')
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader title="Sign Up" onBackPress={onBack} onPress={handlePress} />
        <Input label="Name" placeholder="John Doe" />
        <Input label="Email" placeholder="example@gmail.com" />
        <Input isPassword label="Password" placeholder="********" />
        <View style={styles.agreeRow}>
          <Checkbox checked={checked} onCheck={setChecked} />
          <Text style={styles.agreeText}>
            I agree with the <Text style={styles.bold}>Terms of Service</Text>
          </Text>
        </View>
        <Button title="Sign Up" onPress={handlePress}></Button>
        <Separator text="Or sign up with" />
        <GoogleLogin />
        <Text style={styles.footerText}>
          Already have an account?
          <Pressable onPress={onSignIn}>
            <Text style={styles.footerLink}> Sign In </Text>
          </Pressable>
          
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
