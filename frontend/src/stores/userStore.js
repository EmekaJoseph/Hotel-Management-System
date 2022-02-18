import { defineStore } from "pinia";

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        admin: {
            signedIn: (localStorage.getItem('hms-signIn') == null || localStorage.getItem('hms-signIn') == 0) ? false : true,
        },
        data: {
            name: 'Leo'
        },
    }),
    getters: {
        adminCanAccess: (state) => (state.admin.signedIn) ? true : false,
    },
    actions: {
        signIn() {
            localStorage.setItem('hms-signIn', 1)
            this.admin.signedIn = true;
        },
        signOut() {
            localStorage.setItem('hms-signIn', 0)
            this.admin.signedIn = false;
        },

    },
});
