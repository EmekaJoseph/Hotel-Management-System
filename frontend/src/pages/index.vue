<template>
    <div>
        <div class="largeFront">
            <div class="container py-5">
                <div class="row gy-3">
                    <div class="col-md-6">
                        <h4 class="fw-bold">Lorem</h4>
                        <p class="fs-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim unde
                            culpa
                            hic doloribus non! Ea adipisci saepe ipsa quisquam animi eius deserunt, atque incidunt
                            explicabo
                            quod magni nobis similique quibusdam?</p>
                        <button class="btn actionBtn">Book now</button>
                    </div>
                    <!-- <div class="col-md-4">
                        <div class="float-end">
                            <div class="card">
                                <div class="card-body">
                                    <fieldset class="border rounded-3 p-3">
                                        <legend class="float-none w-auto px-3 small">Drop a Message</legend>
                                        <form class="form row gy-2">
                                            <div class="col-md-12">
                                                <input type="text" class="form-control" placeholder="Your email..">
                                            </div>

                                            <div class="col-md-12">
                                                <textarea class="form-control" rows="5"></textarea>
                                            </div>
                                            <div class="col-md-12">
                                                <button class="customBtn btn">Send Message</button>
                                            </div>
                                        </form>
                                    </fieldset>

                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <section class="container">
            <div class="row justify-content-center">

            </div>
        </section>
    </div>
</template>

<script setup>
    import { inject, ref, onMounted } from "vue";
    import axios from "axios";

    const store = inject("codeStore");
    const themeColor = store.values.theme;

    onMounted(() => {
        testApi()
        // console.log(`i am running`)
    })

    async function testApi() {
        let name = 'Wujyjossey'
        let url = `http://localhost/testApi/${name}`
        try {
            var { data } = await axios.post(url);
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

</script>

<style scoped>
    .largeFront {
        min-height: 50vh;
        background: url("./src/assets/images/cccc.jpg");
        /* background-color: #ccc; */
        background-size: cover;
        background-position: center center;
        padding: 15px;
        /* border-bottom-left-radius: 50%; */
        color: #fff;
    }



    .actionBtn {
        background-color: v-bind(themeColor);
        width: 120px;
        color: #fff;
    }

    .actionBtn:hover {
        color: #d8f070;
        background-color: #5a0948;
    }

    .customBtn {
        background-color: #3b032f;
        color: #fff;
    }

    .customBtn:hover {
        color: #d8f070;
        background-color: #5a0948;
    }
</style>