import { Text, TouchableOpacity, View } from "react-native";

import { UseRegisterViewModel } from "./use-register-view-model";
import { useUserStore } from "../../../../shared/stores/user-store";

export function RegisterView(props: UseRegisterViewModel) {
  const { user, logout } = useUserStore()

  const { handleSubmitRegister } = props

  return (
    <View className="flex-1 items-center justify-center">
      <Text>User: {user?.name}</Text>

      <TouchableOpacity onPress={handleSubmitRegister}>
        <Text>Submit</Text>
      </TouchableOpacity>

      {user?.id && <TouchableOpacity onPress={logout} className="bg-red-500 rounded-md text-white p-2">
        <Text>Logout</Text>
      </TouchableOpacity>}
    </View>
  )
}
