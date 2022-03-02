import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    testApi(name) {
        return apiClient.get('/testApi/' + name)
    }
}