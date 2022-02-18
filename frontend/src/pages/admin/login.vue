<template>
    <div class="container">
        <div class="thForm">
            <div class="col-12 col-lg-4 p-2">
                <div class="card p-3 border-0 shadow">
                    <h3 class="text-center fw-bold mb-3">Admin Login</h3>
                    <form>
                        <div class="row gy-3">
                            <span class="text-danger small text-center" v-html="form.errMsg"></span>
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
                            <span class="forgot text-center small mt-4"><a href="#">Forgot
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

    import { useUserStore } from '@/stores/userStore.js'
    const user = useUserStore()

    import { useRouter } from 'vue-router'
    const router = useRouter()


    const pw = reactive({
        type: 'password',
        toggle: () => { pw.type = pw.type === 'password' ? 'text' : 'password' }
    })

    // const errMsg = ref('')

    const form = reactive({
        username: '',
        password: '',

        errMsg: ''
    })

    function loginUser() {
        if (form.username.length == 0) {
            form.errMsg = 'Enter a name'
            return false
        }
        else if (form.password.length == 0) {
            form.errMsg = 'Enter a password biko'
            return false
        }
        else {
            router.push({ name: 'Admin-Dashboard' })
            form.errMsg = ''
            user.signIn()
        }
    }

</script>

<style scoped>
    .thForm {
        min-height: 100vh;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
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

    .forgot a {
        text-decoration: none;
        color: v-bind(color1);
        font-weight: bold;
    }

    .forgot a:hover {
        color: rgb(216, 71, 71);
    }
</style>