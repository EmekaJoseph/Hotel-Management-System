<template>
    <div>
        <div class="menuSection">
            <ul class="list-group list-group-flush">
                <li class="list-group-item" :data-bs-dismiss="showOn">
                    <router-link :to="{ name: 'Dashboard' }">
                        <i class="bi bi-layout-wtf"></i>&nbsp; Dashboard
                    </router-link>
                </li>
                <li class="list-group-item" :data-bs-dismiss="showOn">
                    <router-link :to="{ name: 'Bookings' }">
                        <i class="bi bi-card-checklist"></i>&nbsp; Bookings
                    </router-link>
                </li>
                <li class="list-group-item" :data-bs-dismiss="showOn">
                    <router-link :to="{ name: 'Rooms' }">
                        <i class="bi bi-door-closed"></i>&nbsp; Rooms
                    </router-link>
                </li>
                <li class="list-group-item" :data-bs-dismiss="showOn">
                    <router-link :to="{ name: 'Messages' }">
                        <i class="bi bi-app-indicator"></i>&nbsp; Messages
                    </router-link>
                </li>
                <!-- <li class="accordion" id="settingsDropdown">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-settings" aria-expanded="false" aria-controls="flush-settings">
                                <i class="bi bi-gear"></i>&nbsp; Settings
                            </button>
                        </h2>
                        <div id="flush-settings" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                            data-bs-parent="#settingsDropdown">
                            <div class="accordion-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <router-link to="/">
                                            <i class="bi bi-people"></i>&nbsp; Users
                                        </router-link>
                                    </li>
                                    <li class="list-group-item">
                                        <router-link to="/">
                                            <i class="bi bi-person-lines-fill"></i>&nbsp; Account
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>-->
            </ul>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue'
const cols = inject("customColors");
const { color1, color2, colorActive, color3 } = cols

defineProps({
    showOn: {
        type: String,
        default: "",
        required: false,
    }
})


</script>

<style scoped>
.menuSection {
    margin-top: 60px;
}

@media screen and (max-width: 767px) {
    .menuSection {
        margin-top: 20px;
    }
}

.list-group-item {
    background-color: transparent;
    color: #fff;
    font-weight: lighter;
    margin-top: 13px;
    border: none;
    font-size: 16px;
}

.lgi-sub {
    margin-top: 0px;
    text-decoration: none;
}

.list-group-item a {
    text-decoration: none;
    color: #fff;
    padding: 10px 40px 10px 10px;
}

a:hover {
    /* color: v-bind(color2); */
    font-weight: bold;
    transform: scale(1.02);
}

.list-group-item .active {
    /* color: v-bind(color3); */
    font-weight: bold;
    /* background-color: v-bind(colorActive); */
    /* border-radius: 10px; */
    margin-left: 10px;
    border-left: 2px solid v-bind(color2);
}

.myaccordion {
    border: none;
}

.accordion-item {
    background-color: transparent;
    border: none;
}

.accordion-button {
    background-color: transparent;
    color: #fff;
    font-weight: lighter;
    font-size: 16px;
    padding: 10px 40px 10px 25px;
    margin-top: 16px;
    border: none;
}

.accordion-button:hover {
    color: v-bind(color2);
}

.accordion-button.collapsed::after {
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-button:not(.collapsed)::after {
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-body {
    padding: 2px;
    margin-left: 35px;
    border: 0px;
}
</style>