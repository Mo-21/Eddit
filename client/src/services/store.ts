import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

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

const useAuth = create<UserDetailsStore>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user: user })),
  removeUser: () => set(() => ({ user: null })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("User Store", useAuth);
}

export default useAuth;
