import { defineStore } from "pinia";

export const useColorStore = defineStore({
    id: "colorStore",
    state: () => ({
        color1: '#3b032f',
        color2: '#d8f070',
        colorSideBar: '#24051d'
    })
});
