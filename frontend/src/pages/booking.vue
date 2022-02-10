<template>
    <div class="container bookingPage">
        <div class="row gy-3">
            <div class="row gy-3">
                <div class="col-md-6">
                    <div class="col-md-12">
                        <div class="card imgPanel hoverZoom">
                            <span class="largeImage">
                                <span class="nameText">Lorem's Best Room</span>
                            </span>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="card descPanel">
                            <span class="fw-bold mb-3" style="font-size: 1.4rem;">Description</span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A laboriosam cupiditate
                                laudantium
                                quisquam molestiae, quo eaque nobis ex vel quod amet dicta sequi nulla natus pariatur
                                distinctio. Autem, repellendus sequi?
                            </p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos enim quasi corrupti
                                ipsum!
                                Laborum officiis voluptatem incidunt placeat! Tenetur non illo, voluptate obcaecati
                                facilis
                                perspiciatis maiores voluptatum ut totam officia.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="card albumPanel shadow">
                            <div class="d-flex justify-content-between">
                                <span class="fw-bold mb-1" style="font-size: 1.4rem;">Pictures</span>
                                <div v-show="album.photos.length>1">
                                    <nav aria-label="Page navigation">
                                        <ul class="pagination pagination-sm">
                                            <li class="page-item">
                                                <a @click.prevent="album.currentIndex--" class="page-link"
                                                    :class="{'disabledBtn': limit.prev()}" href="#"
                                                    aria-label="Previous">
                                                    <span aria-hidden="true"><i class="bi bi-chevron-left"></i></span>
                                                </a>
                                            </li>
                                            <li>&nbsp;</li>
                                            <li>&nbsp;</li>
                                            <li class="page-item">
                                                <a @click.prevent="album.currentIndex++" class="page-link"
                                                    :class="{'disabledBtn': limit.next()}" href="#" aria-label="Next">
                                                    <span aria-hidden="true"><i class="bi bi-chevron-right"></i></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div class="card p-1">
                                <img :src="'./src/assets/images/'+ album.currentPhoto.img" alt="">
                            </div>
                            <small class="text-center m-2">{{album.currentIndex + 1}}/{{album.photos.length}} -
                                <span class="fw-bold">{{album.currentPhoto.title}}</span></small>
                        </div>
                    </div>

                </div>
                <div class="col-md-6">
                    <div class="card bookingPanel shadow">
                        <div class="mb-3">
                            <span class="fw-bold" style="font-size: 1.4rem;">Book Now</span> <br>
                            <small class="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                                itaque
                                sequi.</small>
                        </div>

                        <div class="p-3" style="background-color: #f5f5f5;">
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-12">
                                        <fieldset class="border rounded-3 p-3">
                                            <legend class="float-none w-auto px-2 small fw-bold text-muted">
                                                Time:</legend>
                                            <div class="row g-3">
                                                <div class="col-md-6">
                                                    <label class="fw-bold small">Check in:</label>
                                                    <DatepickerVue :enableTimePicker="false" placeholder="Select Date"
                                                        autoApply />
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="fw-bold small">Check out:</label>
                                                    <DatepickerVue :enableTimePicker="false" placeholder="Select Date"
                                                        autoApply />
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div class="col-md-12">
                                        <fieldset class="border rounded-3 p-3">
                                            <legend class="float-none w-auto px-2 small fw-bold text-muted">
                                                Guests:</legend>
                                            <div class="row g-3">
                                                <div class="col-md-4">
                                                    <label class="fw-bold small">Adults:</label>
                                                    <input v-model="bookingForm.numAdults" type="number"
                                                        class="form-control" placeholder="0">
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="fw-bold small">Children:</label>
                                                    <input v-model="bookingForm.numChildren" type="number"
                                                        class="form-control" placeholder="0">
                                                </div>
                                                <div class="col-md-4">
                                                    <label class="fw-bold small">Total:</label>
                                                    <input v-model="bookingForm.numTotal" type="number"
                                                        class="form-control bg-white" placeholder="0" disabled>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div class="col-md-12">
                                        <fieldset class="border rounded-3 p-3">
                                            <legend class="float-none w-auto px-2 small fw-bold text-muted">
                                                Details:</legend>
                                            <div class="row g-3">
                                                <div class="col-md-12">
                                                    <label class="fw-bold small">Email:</label>
                                                    <input v-model="bookingForm.email" @keyup="valdateEmail" type="text"
                                                        class="form-control" :class="{'inputErr': err.email}">
                                                    <small v-if="err.email" class="text-danger">invalid email
                                                        format</small>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="fw-bold small">Name:</label>
                                                    <input type="text" class="form-control">
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="fw-bold small">Phone Number:</label>
                                                    <input type="number" class="form-control">
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div class="col-md-12">
                                        <button @click.prevent class="customBtn btn btn-lg w-100">
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>




            <!-- <div class="col-md-4">
                <div style="overflow-y: hidden;">
                    <div class="row p-2 justify-content-center" style="min-width: 75rem;">
                        <div class="card p-2 bg-secondary me-2" style="min-height: 270px; width: 18rem;">

                        </div>
                        <div class="card p-2 bg-secondary me-2" style="min-height: 270px; width: 18rem">

                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup>
    import { inject, ref, onMounted, reactive, watch, computed } from 'vue'
    import DatepickerVue from 'vue3-date-time-picker';

    import { useRoute, onBeforeRouteLeave } from 'vue-router'
    const route = useRoute()

    onMounted(() => {
        // scroll to top
        window.scrollTo(0, 0);
        showPhoto()
        console.log('this query:', route.query);
    })

    onBeforeRouteLeave((to, from) => {
        const answer = window.confirm(
            'Do you really want to leave this page? you may have unsaved changes!'
        )
        if (!answer) return false
    })


    const store = inject("codeStore");
    const color1 = ref(store.color.c1)
    const color2 = ref(store.color.c2)
    const u_mthd = store.methods


    // photo album
    const album = reactive({
        photos: [
            {
                img: 'cccc.jpg',
                title: 'Room1'
            },
            {
                img: 'dddd.jpg',
                title: 'Room2'
            },
            {
                img: 'cccc.jpg',
                title: 'Room3'
            }
        ],
        currentPhoto: [],
        currentIndex: 0
    })

    function showPhoto() {
        album.currentPhoto = album.photos[album.currentIndex]
    }

    const limit = reactive({
        next: () => {
            return ((album.photos.length - 1) <= album.currentIndex) ? true : false
        },
        prev: () => {
            return (album.currentIndex == 0) ? true : false
        }
    })


    watch(() => album.currentIndex, () => {
        showPhoto()
    })




    // booking form data
    const bookingForm = reactive({
        inDate: '',
        outDate: '',

        numAdults: null,
        numChildren: null,
        numTotal: computed(() => { return (bookingForm.numAdults + bookingForm.numChildren) }),

        name: null,
        email: null,
        phone: null,

    })

    const err = reactive({
        inDate: false,
        outDate: false,
        numAdults: false,
        numChildren: false,
        numTotal: false,
        email: false,
        phone: false,
        name: false,
        errArray: computed(() => { return err })
    })


    // form validations
    function valdateEmail() {
        err.email = (u_mthd.emailIsValid(bookingForm.email)) ? false : true
    }


</script>

<style scoped>
    .bookingPage {
        margin-top: 85px;
        /* background-color: red; */
    }

    .largeImage {
        background: url("./src/assets/images/cccc.jpg");
        /* background-color: #ccc; */
        background-size: cover;
        background-position: center center;
        height: 100%;
        padding: 30px 20px;
    }

    .nameText {
        background-color: #fff;
        padding: 8px;
        font-weight: bold;
        color: v-bind(color1);
    }


    .imgPanel {
        height: 370px;
        padding: 9px;
        border: none;
    }

    .descPanel {
        /* min-height: 370px; */
        padding: 20px;
        border: none;
    }

    .albumPanel {
        padding: 20px;
        border: none;
    }

    .bookingPanel {
        padding: 20px;
        border: none;
    }

    .pagination-sm .page-link {
        color: #fff;
        background-color: v-bind(color1);
        font-weight: bolder;
        padding: 2px 12px;
    }

    /* .pagination-sm .page-link:hover {
        background-color: v-bind(color2);
    } */

    .disabledBtn {
        pointer-events: none;
        background-color: #ccc !important;
    }

    .customBtn {
        background-color: v-bind(color1);
        /* width: 200px; */
        color: #fff;
    }

    .customBtn:hover {
        color: v-bind(color2);
        background-color: #5a0948;
    }

    .inputErr {
        border: 1px solid rgb(252, 32, 32);
    }
</style>