import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from '../../../components/Header'
import ListItem from '../../../components/ListItem'
import Button from '../../../components/Button'

const Profile = ({navigation}) => {

	const onLogout = () => {
		console.log('logout is clicked')
	}

	const onSettingsPress = () => {
		navigation.navigate('Settings')
	}

	return (
		<SafeAreaView style={{flex: 1}}>
			<View style={styles.container}>
				<View style={styles.content}>
					<Header title="Profile" showLogout onLogout={onLogout} />
					<Text style={styles.name}>User name</Text>
					<Text style={styles.email}>User email</Text>
					<ListItem title="My Listings" subtitle="I shidded my pant" />
					<ListItem title="Settings" subtitle="Account, FAQ, Contact" onPress={onSettingsPress}/>
				</View>
				<Button title="Add new listing" />
			</View>
		</SafeAreaView>
	)
}
export default Profile;