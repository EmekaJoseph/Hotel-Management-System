<template>
    <div>
        <div class="thForm">
            <div class="col-10 col-lg-3">
                <div class="card p-4 shadow-sm">
                    <span class="text-center fw-bold mb-2">
                        <img src="@/assets/house34_logo1.png" width="130" />
                    </span>
                    <small class="text-center fw-bold text-muted mb-2">Admin</small>
                    <form>
                        <div class="row gy-3">
                            <div class="col-md-12">
                                <div
                                    class="alert alert-danger small my-1 p-2 border-0"
                                    v-if="formError.msg"
                                    v-html="formError.msg"
                                ></div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-floating">
                                    <input
                                        v-model="form.username"
                                        type="text"
                                        class="form-control form-control"
                                        id="floatUserName"
                                        placeholder="username"
                                    />
                                    <label for="floatUserName">username:</label>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-floating passF">
                                    <input
                                        :type="pw.type"
                                        v-model="form.password"
                                        class="form-control form-control"
                                        id="floatpassw"
                                        placeholder="password"
                                    />
                                    <span @click="pw.toggle()">
                                        <i v-if="(pw.type == 'password')" class="bi bi-eye-slash"></i>
                                        <i v-else class="bi bi-eye"></i>
                                    </span>
                                    <label for="floatpassw">password:</label>
                                </div>
                            </div>
                            <div class="col-md-12 mt-4">
                                <button
                                    type="submit"
                                    @click.prevent="loginUser"
                                    class="btn btn-lg w-100 customBtn"
                                >Login</button>
                            </div>
                            <span class="forgot text-center small mt-4">
                                <a href="#">
                                    Forgot
                                    Password?
                                </a>
                            </span>
                        </div>
                    </form>
                </div>
                <div class="text-center mt-3">
                    <router-link class="text-decoration-none text-warning" to="/">Main site</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { LoginFormInterface } from '@/types'

const cols: any = inject("customColors");
const { color1, color2 } = cols
const user = useUserStore()
const router = useRouter();


const pw = reactive({
    type: 'password',
    toggle: () => { pw.type = pw.type === 'password' ? 'text' : 'password' }
})

// const errMsg = ref('')

const initialFormState: LoginFormInterface = {
    username: '',
    password: '',
    err: {
        msg: '',
        username: false,
        password: false,
    },
}


const form = reactive({ ...initialFormState });
const formError = reactive({ ...initialFormState.err });

function resetForm() {
    Object.assign(form, initialFormState);
}
function resetFormError() {
    Object.assign(formError, initialFormState.err);
}

function loginUser() {
    if (form.username.length == 0) {
        formError.msg = '<i class="bi bi-exclamation-circle"></i>&nbsp;Enter a name'
        return false
    }
    else if (form.password.length == 0) {
        formError.msg = '<i class="bi bi-exclamation-circle"></i>&nbsp;Enter a password biko'
        return false
    }
    else {
        router.replace({ name: 'Dashboard' })
        formError.msg = ''
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
    background-color: v-bind(color1);
}

/* .card {
    background-color: transparent;
} */

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