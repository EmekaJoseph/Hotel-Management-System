import { defineStore } from "pinia";

export const useAPIStore = defineStore({
    id: "api",
    state: () => ({
        baseURL: 'http://localhost',//online
        // baseURL: '',
    }),
});
