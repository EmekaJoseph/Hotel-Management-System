<template>
    <div>
        <div class="largeFront">
            <header id="header" class="fixed-top d-flex align-items-center">
                <div class="container d-flex align-items-center justify-content-between">
                    <div class="logo">
                        <h4 class="fw-bold">
                            HMS
                        </h4>
                    </div>
                    <nav id="navbar" class="navbar">
                        <!-- nav here -->
                    </nav>
                </div>
            </header>
        </div>
        <section class="container">
            home
        </section>
    </div>
</template>

<script setup>
    import { inject, ref, onMounted } from "vue";
    import axios from "axios";

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
        min-height: 70vh;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        /* font-family: 'Poppins', sans-serif; */
        font-family: 'Open Sans', sans-serif;
        /* background: url("../ddd.jpg"); */
        background-color: yellow;
        background-size: cover;
        background-position: center center;
        padding: 15px;
    }

    #header {
        z-index: 997;
        transition: all 0.5s;
        padding: 22px 0;
        background: none;
    }
</style>