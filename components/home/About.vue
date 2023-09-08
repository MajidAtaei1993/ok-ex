<template>
    <section class="home-about">
        <img src="/assets/images/home/purple.webp" alt="" class="bg">
        <div class="content">
            <v-col cols="12" md="6">
                <div class="card">
                    <div class="head">
                        <div class="text">
                            صرافی
                            <span>اوکی اکسچنج</span>
                        </div>
                    </div>
                    <p>با بروز ترین سیستم تبادل ارز های دیجیتال بیشتر آشنا شوید، ما بهترین امکانات را برای شما کنار هم قرار داده ایم...</p>
                </div>
            </v-col>
            <v-col cols="12" md="6">
                <img src="/assets/images/iphone-home.2834a6e.webp" alt="" class="mobile">
            </v-col>
            <v-col cols="12" md="6">
                <video src="/assets/video.mp4" controls class="video"></video>
            </v-col>
            <v-col cols="12" md="6">
                <div class="card">
                    <div class="card-title">
                        کسب درآمد در هر <span>زمان</span> و هر مکان
                    </div>
                    <div class="card-text">
                        اپلیکیشن و وب سایت <span>اوکی اکسچنج</span> به شما این امکان را می دهد که تجارت را به راحتی شروع کنید
                    </div>
                    <div class="card-items">
                        <v-col cols="12" md="auto" v-for="(item, i) in items" :key="i">
                            <v-card class="card-item" light flat :href="item.href">
                                <img :src="item.icon" alt="">
                                <ul v-if="item.title">
                                    <li>{{ item.title }}</li>
                                    <li>{{ item.subtitle }}</li>
                                </ul>
                            </v-card>
                        </v-col>
                    </div>
                </div>
            </v-col>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                items:[
                    { icon:'/assets/icons/apple.svg', title:'download on the', subtitle:'apple', href:'https://ok-ex.io/download' },
                    { icon:'/assets/icons/bazar.svg', title:'download in the', subtitle:'cafebazar', href:'https://ok-ex.io/download' },
                    { icon:'/assets/icons/qr.webp' },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>