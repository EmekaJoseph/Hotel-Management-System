import { defineStore } from "pinia";

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        signedIn: true,
        data: {
            name: 'Leo'
        },
        isAdmin: false
    }),
    //   getters: {
    //     doubleCount: (state) => state.counter * 2,
    //   },
    actions: {
        signOut() {
            this.signedIn = false;
        },
    },
});
