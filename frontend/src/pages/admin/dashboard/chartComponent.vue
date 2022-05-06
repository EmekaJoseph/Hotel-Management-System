<template>
    <div class="col-xl-7 col-md-12">
        <div class="card">
            <div class="card-header border-0">
                Analysis (6 Months)
                <span class="float-end optionsBtn">
                    <div class="dropdown">
                        <span class="dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-three-dots-vertical"></i>
                        </span>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul>
                    </div>
                </span>

            </div>
            <div class="card-body">
                <LineChart />
            </div>
        </div>
    </div>
</template>

<script setup>
import LineChart from './lineChart'
</script>
