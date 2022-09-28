import create from "zustand"
import { persist } from "zustand/middleware"

export const useDarkmodeStore = create(
    // Persist gemmer i enten local- eller sessionstorage
    persist((set) => ({
        //Gets the browsers preferred setting and sets mode to dark if accepted
        theme: window.matchMedia("(prefers-color-scheme: dark").matches ? "dark" : "light",

        setTheme: (theme) => set(() => ({ theme:theme}))
    }),{
        name: "themes",
    }
))