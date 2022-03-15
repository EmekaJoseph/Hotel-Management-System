import { defineStore } from "pinia";

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        admin: {
            signedIn: (localStorage.getItem('hms-signIn') == null) ? false : true,
        },
        data: {
            name: '....'
        },
    }),
    getters: {
        adminCanAccess: (state) => (state.admin.signedIn) ? true : false,
    },
    actions: {
        signIn() {
            localStorage.setItem('hms-signIn', "1")
            this.admin.signedIn = true;
        },
        signOut() {
            localStorage.removeItem('hms-signIn')
            this.admin.signedIn = false;
        },

    },
});
