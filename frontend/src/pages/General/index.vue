<template>
    <div class="genaralBody">
        <headerComponent />
        <div class="largeFront">
            <div class="container py-5">
                <div class="row gy-3">
                    <div class="col-md-8" style="margin-top: 17%;">
                        <h2 class="fw-bold">Lorem</h2>
                        <p class="fs-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim unde
                            culpa
                            hic doloribus non! Ea adipisci saepe ipsa quisquam animi eius deserunt, atque incidunt
                            explicabo
                            quod magni nobis similique quibusdam?
                        </p>
                        <a href="#showCasePane" @click="showToast" class="btn actionBtn">Book now</a>
                    </div>
                    <!-- <div class="col-md-4">
                        <div class="float-end">
                            someThing
                        </div>
                    </div>-->
                </div>
            </div>
        </div>

        <section class="container" id="showCasePanel">
            <h1 class="text-center my-5 fw-bold">- CHECK OUT LOREMS -</h1>
            <div class="col-md-12">
                <div class="row justify-content-center gy-4">
                    <div v-for="(i, id) in images" :key="id" class="col-md-4">
                        <div class="card cardHolder shadow p-2 hoverZoom">
                            <img :src="getImage(i.image)" style="border-radius: 10px;" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <div class="d-flex justify-content-between mb-2">
                                    <div class="fw-bold">ROOM - {{ i.id }}</div>
                                    <div class="badge rounded-pill px-3" :class="i.class">{{ i.class }}</div>
                                </div>
                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p class="card-text small">
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                </p>
                                <button @click="goToBookingPage('Room-' + i.id)" class="btn actionBtn2">
                                    Book
                                    now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <notify ref="toast" />
        <footerComponent />
    </div>
</template>

<script setup>
    import { ref, onMounted, inject } from "vue";
    import jsonData from '@/stores/json/data.json'
    import apiCall from '@/stores/apiStore.js'

    import { useRouter, useRoute } from 'vue-router'
    const router = useRouter()
    const route = useRoute()

    const cols = inject("customColors");
    const { color1, color2 } = cols


    const images = ref(jsonData.images)

    function getImage(img) {
        return require('@/assets/images/' + img)

    }

    onMounted(() => {
        // console.log(images.value)
        // testApi()
    })

    // random from array
    // var item = items[Math.floor(Math.random()*items.length)];

    async function testApi() {
        let name = 'Wujyjossey'
        try {
            var { data } = await apiCall.testApi(name);
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


    const toast = ref(null)
    function showToast() {
        toast.value.showToast('scroll down buddy!', 'light');
    }

</script>

<style scoped>
    .largeFront {
        min-height: 100vh;
        background: url("@/assets/images/cccc.jpg");
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

    .premium {
        color: #111;
        background-color: #f8e4f4;
    }

    .exclusive {
        color: #111;
        background-color: #f2f5b3;
    }
</style>