<template>
    <div>
        <div class="largeFront">
            <div class="container py-5">
                <div class="row gy-3">
                    <div class="col-md-8" style="margin-top: 17%;">
                        <h2 class="fw-bold">Lorem</h2>
                        <p class="fs-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim unde
                            culpa
                            hic doloribus non! Ea adipisci saepe ipsa quisquam animi eius deserunt, atque incidunt
                            explicabo
                            quod magni nobis similique quibusdam?</p>
                        <button class="btn actionBtn">Book now</button>
                    </div>
                    <!-- <div class="col-md-4">
                        <div class="float-end">
                            someThing
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <section class="container">
            <h1 class="text-center my-5 fw-bold">- CHECK OUT LOREMS -</h1>
            <div class="col-md-12">
                <div class="row justify-content-center gy-4">
                    <div v-for="i in 12" :key="i" class="col-md-4">
                        <div class="card cardHolder shadow p-2 hoverZoom">
                            <img src="../assets/images/cccc.jpg" style="border-radius: 10px;" class="card-img-top"
                                alt="...">
                            <div class="card-body">
                                <h5 class="card-title">ROOM - {{i}}</h5>
                                <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the
                                    bulk of
                                    the card's content.</p>
                                <button @click="goToBookingPage(i+'fdddss')" class="btn actionBtn2">Book now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import { inject, ref, onMounted } from "vue";
    import axios from "axios";

    import { useRouter, useRoute } from 'vue-router'
    const router = useRouter()
    const route = useRoute()

    const store = inject("codeStore");
    const color1 = ref(store.color.c1)
    const color2 = ref(store.color.c2)

    onMounted(() => {
        // testApi()
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

    function goToBookingPage(str) {
        router.push({
            name: 'Booking',
            query: { bk: str }
        })
    }

</script>

<style scoped>
    .largeFront {
        min-height: 100vh;
        background: url("./src/assets/images/cccc.jpg");
        /* background-color: #ccc; */
        background-size: cover;
        background-position: center center;
        padding: 15px;
        /* border-bottom-left-radius: 50%; */
        color: #fff;
        border-bottom: 2px solid v-bind(color2);
    }

    .actionBtn {
        background-color: v-bind(color1);
        width: 150px;
        color: #fff;
    }

    .actionBtn:hover {
        color: v-bind(color2);
        background-color: #5a0948;
    }


    .cardHolder {
        height: 100%;
        border-radius: 10px;
    }

    .actionBtn2 {
        /* background-color: v-bind(color1); */
        width: 150px;
        border: 1px solid v-bind(color1);
        color: v-bind(color1);
    }

    .actionBtn2:hover {
        color: v-bind(color2);
        background-color: #5a0948;
    }
</style>