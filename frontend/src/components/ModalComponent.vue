<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="signInModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="signInModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="container">
                        <!-- <div class="col-md-12"> -->
                        <div class="p-3">
                            <ul class="nav nav-pills nav-fill justify-content-center">
                                <li class="nav-item">
                                    <a class="nav-link" @click.prevent="form.showing = 1"
                                        :class="{'active': (form.showing == 1)}" href="#">Sign In</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" @click.prevent="form.showing = 2"
                                        :class="{'active': (form.showing == 2)}" href="#">Register</a>
                                </li>
                            </ul>
                        </div>


                        <div v-show="form.showing == 1" class="modal-body">
                            lorem
                            Lorem ipsum dolor..
                            <div class="row justify-content-center mt-3">
                                <div class="p-2">
                                    <fieldset class="border rounded-3 p-3">
                                        <legend class="float-none w-auto px-3 small fw-bold">Log In</legend>
                                        <form class="row gy-3">
                                            <div class="col-md-12">
                                                <div class="form-floating">
                                                    <input type="email" v-model="form.login.email" id="floatingEmail"
                                                        class="form-control" placeholder="Email address">
                                                    <label for="floatingEmail">Email address:</label>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-floating">
                                                    <input type="password" v-model="form.login.password"
                                                        id="floatingPass" class="form-control" placeholder="Password">
                                                    <label for="floatingPass">Password:</label>
                                                </div>
                                            </div>

                                            <div class="col-md-12 mt-5">
                                                <button v-if="!form.connecting" @click.prevent="signInUser"
                                                    class="customBtn btn btn-lg w-100">
                                                    Sign In
                                                </button>
                                                <button v-else class="customBtn btn w-100" disabled>
                                                    <div class="spinner-border" role="status">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>
                                                </button>
                                            </div>
                                        </form>
                                    </fieldset>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <button ref="closeBtn" type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                        </div>


                        <div v-show="form.showing == 2" class="modal-body">
                            Lorem ipsum dolor sit amet.
                            <div class="row justify-content-center mt-3">
                                <div class="p-2">
                                    <fieldset class="border rounded-3 p-3">
                                        <legend class="float-none w-auto px-3 small fw-bold">Register</legend>
                                        <form class="row gy-3">
                                            <div class="col-md-12">
                                                <input type="text" class="form-control form-control-lg"
                                                    placeholder="email..">
                                            </div>
                                            <div class="col-md-12">
                                                <input type="text" class="form-control form-control-lg"
                                                    placeholder="phone number">
                                            </div>
                                            <div class="col-md-12">
                                                <input type="password" class="form-control form-control-lg"
                                                    placeholder="password..">
                                            </div>
                                            <div class="col-md-12">
                                                <input type="password" class="form-control form-control-lg"
                                                    placeholder="repeat password..">
                                            </div>

                                            <div class="col-md-12 mt-5">
                                                <button @click.prevent class="customBtn btn btn-lg w-100">
                                                    Register
                                                </button>
                                            </div>
                                        </form>
                                    </fieldset>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                        </div>
                        <!-- </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { inject, ref, reactive, onMounted } from 'vue'

    onMounted(() => {
        form.login.email = ''
        form.login.password = ''
    })

    import { storeToRefs } from 'pinia'
    import { useColorStore } from '@/stores/colorStore.js'
    const { color1, color2 } = storeToRefs(useColorStore())

    const form = reactive({
        showing: 1,
        connecting: false,


        login: {
            email: '',
            password: ''
        }
    })

    const closeBtn = ref(null)

    function signInUser() {
        form.connecting = true
        setTimeout(() => {
            closeBtn.value.click()
            form.connecting = false
        }, 3000);
    }

</script>

<style scoped>
    .nav-link {
        color: #000;
        font-weight: bold;
    }

    .nav-link:hover {
        color: v-bind(color1);

    }

    .nav-pills .nav-link.active {
        /* background-color: v-bind(themeColor); */
        background-color: rgb(243, 240, 240);
        border: 1px solid rgb(230, 227, 227);
        color: v-bind(color1);
    }

    .customBtn {
        background-color: v-bind(color1);
        /* width: 200px; */
        color: #fff;
    }

    .customBtn:hover {
        color: v-bind(color2);
        background-color: #5a0948;
    }

    .btn-close {
        background-color: #f3d6ec;
        color: #000;
        margin: 10px;
        padding: 10px;
        border-radius: 100%;
    }

    .form-control {
        border-radius: 0px;
        border: none;
        border-bottom: 1px solid #ccc;
    }
</style>