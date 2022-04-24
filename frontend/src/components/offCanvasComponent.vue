<script setup>
import { inject } from 'vue'
const cols = inject("customColors");
const { color1, color2 } = cols
</script>

<template>
    <div>
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasGeneral"
            aria-labelledby="offcanvasGeneralLabel">
            <ul>
                <li data-bs-dismiss="offcanvas">
                    <router-link to="/about"> About Us</router-link>
                </li>
                <li data-bs-dismiss="offcanvas">
                    <router-link to="/gallery"> Gallery</router-link>
                </li>
                <li data-bs-dismiss="offcanvas">
                    <router-link to="/"> Home</router-link>
                </li>

            </ul>

        </div>
    </div>
</template>



<style scoped>
.offcanvas {
    height: 60px;
    background-color: v-bind(color1);
    display: flex;
    align-items: center;
}

.active {
    color: #ff0;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

li {
    float: right;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
}
</style>