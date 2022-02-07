<template>
    <div class="container bookingPage">
        <div class="row justify-content-center gy-3">
            <div class="col-md-5">
                <div class="card imgPanel hoverZoom">
                    <span class="largeImage">
                        <span class="nameText">Lorem's Best Room</span>
                    </span>
                </div>

            </div>
            <div class="col-md-7">
                <div class="card descPanel">
                    <span class="fw-bold mb-3" style="font-size: 1.4rem;">Description</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A laboriosam cupiditate laudantium
                        quisquam molestiae, quo eaque nobis ex vel quod amet dicta sequi nulla natus pariatur
                        distinctio. Autem, repellendus sequi?
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos enim quasi corrupti ipsum!
                        Laborum officiis voluptatem incidunt placeat! Tenetur non illo, voluptate obcaecati facilis
                        perspiciatis maiores voluptatum ut totam officia.
                    </p>
                </div>
            </div>
            <div class="col-md-5">
                <div class="card albumPanel shadow">
                    <div class="d-flex justify-content-between">
                        <span class="fw-bold mb-1" style="font-size: 1.4rem;">Pictures</span>
                        <div v-show="album.photos.length>1">
                            <nav aria-label="Page navigation">
                                <ul class="pagination pagination-sm">
                                    <li class="page-item">
                                        <a @click.prevent="album.currentIndex--" class="page-link"
                                            :class="{'disabledBtn': limit.prev()}" href="#" aria-label="Previous">
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
            <div class="col-md-7">
                <div class="card bookingPanel h-100 shadow">
                    <span class="fw-bold mb-3" style="font-size: 1.4rem;">Book Now</span>
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
    import { inject, ref, onMounted, reactive, watch } from 'vue'

    import { useRoute } from 'vue-router'
    const route = useRoute()

    onMounted(() => {
        // scroll to top
        window.scrollTo(0, 0);
        showPhoto()
        console.log('this query:', route.query);
    })

    const store = inject("codeStore");
    const color1 = ref(store.color.c1)
    const color2 = ref(store.color.c2)

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
</style>