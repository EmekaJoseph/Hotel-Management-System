import { defineStore } from "pinia";

export const useColorStore = defineStore({
    id: "colorStore",
    state: () => ({
        color1: '#330329',
        color2: '#80146A',
        colorActive: '#400434',
        color3: '#1B8000',
        color4: '#0E3B03',
        colorThick: '#2c0323'
    })
});
