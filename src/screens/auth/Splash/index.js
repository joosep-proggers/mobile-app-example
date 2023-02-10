import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";

const Splash = ({navigation}) => {

  const onSignUp = () => {
    navigation.navigate('Signup');
  };

  const onSignIn = () => {
    navigation.navigate('Signin')
  }

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../../assets/splash-image.png")}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All You Need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <Button title="Sign Up" onPress={onSignUp}></Button>
      <Pressable onPress={onSignIn}>
        <Text style={styles.signInButton}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
