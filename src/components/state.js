import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let user = (set) => ({
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark })),
});

const post = (set) => ({
  repo: "",
  setRepo: (repo) => set({ repo }),
});

user = devtools(user);
user = persist(user, { name: "user_settings" });

export const useUserStore = create(user);
export const usePostStore = create(post);
