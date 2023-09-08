<template>
    <section class="navigation">
        <div class="banner">
            <v-col cols="12" md="6">
                <div class="card">
                    <img src="/assets/images/home/navigation-bg.2421d5d.png" alt="" class="img">
                </div>
            </v-col>
            <v-col cols="12" md="5">
                <div class="card">
                    <div class="card-title">خرید <span>ارز دیجیتال</span> به صورت مستقیم، ساده، سریع، حرفه ای و امن</div>
                    <div class="card-text">اوکی اکسچنج، صرافی ارز دیجیتال و کریپتوکارنسی (Cryptocurrency) با امکان خرید و فروش بیش از 400 رمز ارز نظیر بیت کوین، اتریوم، دوج کوین، لایت کوین و ... به صورت سریع، حرفه ای و امن. سریع و پر سرعت تر از همیشه به معامله و خرید ارز دیجیتال بپردازید و با سرعت نور ترید کنید. تریدر حرفه ای برای علاقه مندان به بلاک چین، به همراه کیف پول رمز ارز اختصاصی با امکان واریز و برداشت بیش از 400 کوین و توکن بدون واسطه و محدودیت ، با قیمت واقعی از معامله بیت کوین و ارزهای دیجیتال لذت ببرید، امکان معامله آسان در بازارهای تومان و دلار تتر</div>
                    <div class="card-action">
                        <v-btn class="register-btn" href="https://ok-ex.io/register">ثبت نام کنید</v-btn>
                        <v-btn class="fast-buy-sell-btn" outlined light color="primary" href="https://ok-ex.io/otc/processing">خرید و فروش سریع</v-btn>
                    </div>
                </div>
            </v-col>
            <v-col cols="12">
                <div class="video-player" @click="videoDialog = true">
                    <v-img src="/assets/icons/home/video-player.svg" alt="" class="icon" />
                    <div class="text">نحوه ثبت نام</div>
                </div>
            </v-col>
            <v-col cols="12">
                <slick-carousel v-bind="settings" class="carousel" v-if="comments.length">
                    <v-col v-for="(comment, i) in comments" :key="i">
                        <div class="card">
                            <div class="icon-name">
                                <img src="/assets/icons/home/microphon.svg" alt="" class="icon">
                                <img :src="comment.icon" alt="" class="icon">
                                <div class="name">{{ comment.feedback }}</div>
                            </div>
                            <div class="more">
                                <v-icon>mdi-chevron-left</v-icon>
                                بیشتر
                            </div>
                        </div>
                    </v-col>
                </slick-carousel>
            </v-col>
        </div>
        <v-dialog content-class="dialog-content" persistent v-model="videoDialog">
            <v-btn class="close-btn" fab small color="primary" depressed @click="videoDialog = false">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <div class="content">
                <video src="/assets/help-buy-crypto.ts" controls class="video" />
            </div>
        </v-dialog>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                videoDialog:null,
                slides:[
                    { icon:'/assets/icons/home/microphon.554b7b6.svg', name:'۵ رمز ارزی که باید این هفته زیر نظر بگیرید! تاریخ ۳۰ خرداد ۱۴۰۱' },
                    { icon:'/assets/icons/home/microphon.554b7b6.svg', name:'مسابقه اینستاگرامی این هفته رو از دست ندهید!' },
                ],
                settings:
                {
                    "infinite": true,
                    "speed": 500,
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    "initialSlide": 0,
                    "autoplay": true,
                    "centerPadding": "20px",
                },
                comments:[],
            }
        },
        mounted(){
            this.getComments()
        },
        methods:{
            getComments(){
                this.$store.dispatch('getComments')
                .then(resp=>{
                    this.comments = resp
                })
                .catch(err=>{
                    console.log('something went wrong')
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>