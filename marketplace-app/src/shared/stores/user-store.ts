import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { IUser } from "../../features/users/interfaces/user";

interface SetSessionData {
  userData: IUser;
  token: string;
  refreshToken: string;
}

interface UpdateTokensData {
  token: string;
  refreshToken: string;
}

interface UserStore {
  user: IUser | null;
  token: string | null;
  refreshToken: string | null;

  setSession: (sessionData: SetSessionData) => void;
  updateTokens: (tokensData: UpdateTokensData) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      refreshToken: null,

      setSession: (sessionData) =>
        set({
          user: sessionData.userData,
          token: sessionData.token,
          refreshToken: sessionData.refreshToken,
        }),

      updateTokens: (tokensData) =>
        set({
          token: tokensData.token,
          refreshToken: tokensData.refreshToken,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
          refreshToken: null,
        }),
    }),
  
    {
      name: "marketplace-user-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);