import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserDetailsStore {
  user: UserInStore | null;
  setUser: (user: UserInStore) => void;
  removeUser: () => void;
}

interface UserInStore {
  id: number;
  email: string;
  username: string;
  avatar: string | null;
  createdAt: string;
}

const useAuth = create<UserDetailsStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set(() => ({ user: user })),
      removeUser: () => set(() => ({ user: null })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("User Store", useAuth);
}

export default useAuth;
