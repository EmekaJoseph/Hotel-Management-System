<template>
    <div class="container mainPage">
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-4">
                <div class="card p-4 border-0 shadow-sm">
                    <h3 class="text-center fw-bold mb-3">Admin Login</h3>
                    <form>
                        <div class="row gy-3">
                            <span class="text-danger small text-center" v-html="errMsg"></span>
                            <div class="col-md-12">
                                <div class="form-floating">
                                    <input v-model="form.username" type="text" class="form-control form-control"
                                        id="floatUserName" placeholder="username">
                                    <label for="floatUserName">username:</label>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-floating passF">
                                    <input :type="pw.type" v-model="form.password" class="form-control form-control"
                                        id="floatpassw" placeholder="password">
                                    <span @click="pw.toggle()">
                                        <i v-if="(pw.type == 'password')" class="bi bi-eye-slash"></i>
                                        <i v-else class="bi bi-eye"></i>
                                    </span>
                                    <label for="floatpassw">password:</label>

                                </div>
                            </div>
                            <div class="col-md-12 mt-5">
                                <button type="submit" @click.prevent="loginUser"
                                    class="btn btn-lg w-100 customBtn">Login</button>
                            </div>
                            <span class="forgot text-center"><a class="text-decoration-none" href="#">Forgot
                                    Password?</a></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive, ref } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useColorStore } from '@/stores/colorStore.js'
    const { color1, color2 } = storeToRefs(useColorStore())

    import { useRouter } from 'vue-router'
    const router = useRouter()


    const pw = reactive({
        type: 'password',
        toggle: () => { pw.type = pw.type === 'password' ? 'text' : 'password' }
    })

    const errMsg = ref('')

    const form = reactive({
        username: '',
        password: ''
    })

    function loginUser() {
        if (form.username.length == 0) {
            errMsg.value = 'Enter a name'
            return false
        }
        else if (form.password.length == 0) {
            errMsg.value = 'Enter a password biko'
            return false
        }
        else {
            router.push({
                name: 'Admin-Dashboard',
            })
            errMsg.value = ''
        }
    }

</script>

<style scoped>
    .mainPage {
        margin-top: 100px;
    }

    .customBtn {
        background-color: v-bind(color1);
        color: #fff;
    }

    .customBtn:hover {
        color: v-bind(color2);
        background-color: #5a0948;
    }

    .form-control {
        border: none;
        border-radius: 0px;
        border-bottom: 1px solid #eee;
    }

    .passF i {
        position: absolute;
        margin-top: 21px;
        margin-right: 10px;
        right: 0;
        top: 0;
        font-size: 20px;
        cursor: pointer;
    }
</style>