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


}

export default {
    values,
    methods,
    constants,
    user,
    color
}