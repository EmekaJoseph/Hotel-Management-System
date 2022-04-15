<template>
    <div>
        <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasAdmin"
            aria-labelledby="offcanvasAdminLabel"
        >
            <div class="offcanvas-header">
                <span id="offcanvasAdminLabel text-muted">
                    <img src="@/assets/house34_logo2.png" width="90" alt />
                </span>
                <button
                    type="button"
                    class="btn btn-link text-white fs-1"
                    data-bs-dismiss="offcanvas"
                >
                    <i class="bi bi-x"></i>
                </button>
            </div>

            <!-- menu -->
            <menuList />

            <div class="offcanvas-body"></div>
            <span class="logOutSection">
                <span class="logOutBtn" @click="signOut">
                    <i class="bi bi-x"></i>&nbsp;Log Out
                </span>
            </span>
        </div>
    </div>
</template>

<script setup>

import { inject } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
const cols = inject("customColors");
const { color1, color2, colorThick } = cols


const user = useUserStore()


const router = useRouter()

function signOut() {
    user.signOut()
    router.replace({ name: 'Admin' })
}



</script>

<style scoped>
.offcanvas {
    background-color: v-bind(color1);
    /* color: #3b032f; */
    width: 250px;
    color: #fff;
}

.logOutBtn {
    /* margin: 45px; */
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    color: #fff;
    display: flex;
    justify-content: center;
}

.logOutSection {
    background-color: v-bind(colorThick);
    padding: 20px;
}
</style>