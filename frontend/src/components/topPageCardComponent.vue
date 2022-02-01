<template>
    <div>
        <div class="largeFront">
            <div class="container py-3">
                <div class="row justify-content-center">
                    <div class="col-md-9">
                        <!-- <h2 class="fw-bold text-center">Our Gallery</h2>
                        <p class="fs-6 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim unde
                            culpa

                        </p> -->
                        <slot></slot>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .largeFront {
        /* min-height: 2vh; */
        background: url("./src/assets/images/cccc.jpg");
        /* background-color: #ccc; */
        background-size: cover;
        background-position: center center;
        padding: 15px;
        /* border-bottom-left-radius: 50%; */
        color: #fff;
    }
</style>