<script setup>

</script>

<template>
    <div>
        <div class="largeFront shadow">
            <div class="container mt-3">
                <div class="row justify-content-center">
                    <div class="col-md-9">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.largeFront {
    /* min-height: 2vh; */
    background: url("@/assets/images/cccc.jpg");
    /* background-color: #ccc; */
    background-size: cover;
    background-position: center center;
    padding: 15px;
    /* border-bottom-left-radius: 50%; */
    color: #fff;
    margin-top: 50px;
}
</style>