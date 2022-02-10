import { reactive } from 'vue'
const constants = {
    baseURL: 'http://localhost',//online
    // baseURL: '',
}

const values = reactive({

})

const color = reactive({
    c1: '#3b032f',
    c2: '#d8f070'
})

const user = reactive({
    signedIn: true,
    data: {
        name: 'Leo'
    },
})

const methods = {
    emailIsValid: (email) => {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email)
    },
}

export default {
    values,
    methods,
    constants,
    user,
    color
}