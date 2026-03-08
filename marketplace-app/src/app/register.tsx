import { View } from "react-native";
import { RegisterView } from "../features/auth/screens/register/register-view";
import { useRegisterViewModel } from "../features/auth/screens/register/use-register-view-model";

export default function RegisterPage() {
  const registerViewModel = useRegisterViewModel();
  
  return (
    <View className="flex-1 items-center justify-center">
      <RegisterView  { ...registerViewModel }/>
    </View>
  )
}