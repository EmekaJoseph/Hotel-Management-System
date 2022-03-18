<template>
    <div class="genaralBody">
        <headerComponent />
        <topPageCard>
            <h2 class="fw-bold text-center">About Us</h2>
        </topPageCard>
        <section class="container mt-5">
            <h2 class="fw-bold">LOREM?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto harum dolor omnis quisquam unde amet a vel eum, dicta obcaecati illo, aperiam corporis culpa voluptatum laboriosam libero architecto, similique aliquam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto harum dolor omnis quisquam unde amet a vel eum, dicta obcaecati illo, aperiam corporis culpa voluptatum laboriosam libero architecto, similique aliquam.</p>

            <div class="col-md-12">
                <div class="row justify-content-center">
                    <div class="col-md-6 pt-5">
                        <div class="row justify-content-center">
                            <img
                                class="d-none d-md-block mt-5"
                                src="@/assets/house34_logo1.png"
                                style="width: 400px;"
                            />
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="col-md-12">
                            <fieldset class="border rounded-3 p-3">
                                <legend class="legend-text">Send a Message</legend>
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
        </section>
        <footerComponent />
    </div>
</template>

<script setup>
import topPageCard from '@/components/general//topPageCardComponent.vue';

</script>

<style scoped>
.legend-text {
    float: none;
    font-size: 20px;
    padding: 0px 10px;
    width: auto;
    color: #777;
}
</style>