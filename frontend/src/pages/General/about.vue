<template>
    <div class="genaralBody">
        <headerComponent />
        <topPageCard>
            <h2 class="fw-bold text-center">About Us</h2>
        </topPageCard>
        <section class="container mt-5">
            <h2 class="fw-bold">LOREM?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto harum dolor omnis quisquam unde amet a
                vel eum, dicta obcaecati illo, aperiam corporis culpa voluptatum laboriosam libero architecto, similique
                aliquam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto harum dolor omnis quisquam unde amet a
                vel eum, dicta obcaecati illo, aperiam corporis culpa voluptatum laboriosam libero architecto, similique
                aliquam.</p>

            <div class="col-md-12 p-4" style="background-color: #f5f5f5; border-radius: 20px;">
                <div class="row gy-5">
                    <div class="col-md-6">
                        <section class="col-md-6 mb-4">
                            <h5 class="fw-bold">Contact Information</h5>
                            <p>Moonshine St. 14/05 Light City, London, United Kingdom</p>
                            <p>
                                info@email.com
                                <br />00 (123) 456 78 90
                            </p>
                        </section>

                        <section class="col-md-7">
                            <h5 class="fw-bold">Join our Newsletter</h5>
                            <p>Subscribe to our newsletter to get our news & deals delivered to you.</p>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="email address"
                                    aria-label="email address" aria-describedby="button-addon2" />
                                <button class="btn btn-warning" type="button" id="button-addon2">
                                    Send&nbsp;
                                    <i class="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </section>
                        <!-- <img
                                class="d-none d-md-block mt-5"
                                src="@/assets/house34_logo1.png"
                                style="width: 400px;"
                        />-->
                    </div>
                    <div class="col-md-5">
                        <div class="col-md-12">
                            <div class="card shadow bg-transparent p-3">
                                <fieldset class="border rounded-3 p-3">
                                    <legend class="legend-text">Send us a Message</legend>
                                    <div class="row gy-3">
                                        <div>
                                            <label class="fw-bold small">Email/Phone:</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div>
                                            <label class="fw-bold small">Your Message:</label>
                                            <textarea class="w-100 form-control" rows="5"></textarea>
                                        </div>
                                        <div>
                                            <button class="btn customBtn float-end w-50">Send</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footerComponent />
    </div>
</template>

<script setup>
import topPageCard from '@/components/topPageCardComponent.vue';

</script>

<style scoped>
.legend-text {
    float: none;
    font-size: 16px;
    padding: 0px 10px;
    width: auto;
    color: #777;
}
</style>