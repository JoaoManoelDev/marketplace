import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  return (
    <View>
      <Text>Login</Text>

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  )
}
