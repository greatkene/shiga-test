import { UserProfile } from "@types";
import { create } from "zustand";

interface UserStore {
  isLoading: boolean;
  userProfile: UserProfile | null;
  setUserProfile: (UserProfile: UserProfile) => void;
  setLoading: (loading: boolean) => void;
}

export const useUser = create<UserStore>((set) => ({
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
  userProfile: null,
  setUserProfile: (profile) => set({ userProfile: profile }),
}));
