import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    // onUploadProgress: function (progressEvent) {
    //     const { loaded, total } = progressEvent;
    //     let precentage = Math.floor((loaded * 100) / total);
    //     console.log(precentage);
    //     if (precentage < 100) {
    //         console.log(precentage);
    //     }
    // },

    // onDownloadProgress: function (progressEvent) {
    //   use progressEvent 
    // },
})


export default {
    testApi(name) {
        return apiClient.get('/testApi/' + name)
    }
}