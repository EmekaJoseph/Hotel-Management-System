import { reactive } from 'vue'
const constants = {
    baseURL: 'http://localhost',//online
    // baseURL: '',
}

const values = reactive({
    theme: '#3b032f'

})

const user = reactive({
    signedIn: false,
    data: {},
})

const methods = {


}

export default {
    values,
    methods,
    constants,
    user
}