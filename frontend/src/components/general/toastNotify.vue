<script>
    // toast
    import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
    import { reactive, toRefs } from 'vue'

    export default {
        setup() {
            const vals = reactive({
                strToShow: '',
                bgType: '',
            })

            function showToast(str, typ) {
                vals.strToShow = str
                vals.bgType = typ
                let toastLiveExample = document.getElementById('liveToast')
                let toast = new bootstrap.Toast(toastLiveExample)
                toast.show()
            }
            return {
                showToast,
                ...toRefs(vals)
            }
        }
    }
</script>
<template>
    <div>
        <!-- toast -->
        <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11;">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex" :class="bgType">
                    <div class="toast-body fs-6">
                        <span v-if="bgType == 'success'"><i class="bi bi-check-circle-fill"></i></span>
                        <span v-else-if="bgType == 'danger'"><i class="bi bi-exclamation-circle-fill"></i></span>
                        <span v-else><i class="bi bi-bell-fill"></i></span>
                        &nbsp;{{strToShow}}
                    </div>
                    <button type="button" class="btn-close me-2 m-auto" :class="{'btn-close-white': bgType !='light'}"
                        data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </div>

    </div>
</template>


<style scoped>
    .danger {
        background-color: rgb(206, 4, 4);
        color: #fff;
    }

    .success {
        background-color: rgba(4, 161, 4, 0.671);
        color: #fff;
    }
</style>