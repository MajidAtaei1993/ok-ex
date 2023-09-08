<template>
    <section class="trust-section">
        <img src="/assets/images/home/trust-bg.webp" alt="" class="bg">
        <div class="white-bg"></div>
        <v-col cols="12" md="6">
            <div class="card">
                <div class="head">
                    <div class="text">
                        مورد <span>اعتماد</span> مشتریانمان هستیم
                    </div>
                </div>
                <p>با بروز ترین سیستم تبادل ارز های دیجیتال بیشتر آشنا شوید، ما بهترین امکانات را برای شما کنار هم قرار داده ایم...</p>
                <ul>
                    <li v-for="(item, i) in items" :key="i">
                        <img :src="item.icon" alt="" class="icon">
                        <div class="text">
                            <div class="text-title">{{ item.title }}</div>
                            <div class="text-subtitle">{{ item.subtitle }}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </v-col>
        <v-col cols="12" md="6">
            <img src="/assets/images/home/support-home.dd8a7a5.webp" alt="" class="support-img">
            <div class="carousel">
                <slick-carousel v-bind="settings" ref="carousel" v-if="comments.length">
                    <v-col v-for="(comment, i) in comments" :key="i">
                        <div class="card box-shadow">
                            <div class="icon-name">
                                <img :src="comment.icon" alt="" class="icon">
                                <div class="name">{{ comment.user }}</div>
                            </div>
                            <div class="desc">{{ comment.feedback }}</div>
                        </div>
                    </v-col>
                </slick-carousel>
                <div class="slider">
                    <v-btn fab small class="slider-btn" @click="$refs.carousel.prev()">
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                    <v-btn fab small class="slider-btn" @click="$refs.carousel.next()">
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                </div>
            </div>
        </v-col>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                items:[
                    { icon:'/assets/icons/home/calendar.webp', title:'5+ سال', subtitle:'حضور در مارکت' },
                    { icon:'/assets/icons/home/support.webp', title:'70+ پشتیبان', subtitle:'آماده پاسخگویی به شما مشتریان' },
                    { icon:'/assets/icons/home/clock.webp', title:'12 خدمت در ثانیه', subtitle:'هر ثانیه 12 خدمت به شما کاربران عزیز سرویس داده می شود' },
                    { icon:'/assets/icons/home/people-group.webp', title:'1+ میلیون', subtitle:'مشتری از سراسر ایران' }
                ],
                slides:[
                    { icon:'/assets/icons/about-us/khanesarmaye.png', name:'خانه سرمایه', desc:'این صرافی یکی از برترین صرافی های رمز ارز در ایران بوده و همواره با افزایش سطح کیفی خدمات، سعی در ارائه یک بستر معاملاتی پیشرو، امن و مطمئن برای کاربران خود دارد' },
                    { icon:'/assets/icons/about-us/virgool.png', name:'ویرگول', desc:' اوکی اکسچنج تلاش زیادی برای آموزش و توسعه دانش در زمینه های بلاک چین و رمز ارز ها انجام داده است. خوشحالیم که در این مسیر توانستیم کنار اوکی اکسچنج باشیم.' },
                    { icon:'/assets/icons/about-us/rahepardakht.png', name:'راه پرداخت', desc:'تجربه کاربری روان و دلچسب و در عین حال تعداد بالای بازارها، از مزیت‌های بزرگی هستند که اوکی اکسچنج را به یکی از جذاب‌ترین اکسچنج‌های ایرانی برای انتخاب تبدیل کرده است. رسول قربانی سردبیر راه پرداخت' },
                    { icon:'/assets/icons/about-us/zoomit.png', name:'زومیت', desc:'این روز ها رقابت خیلی زیادی بین صرافی های آنلاین شکل گرفته و چیزی که می تونه یک مزیت رقابتی باشه، تعداد ارز های یک صرافیه که اوکی اکسچنج تونسته بیش از 400 رمزارز داشته باشه.' },
                ],
                settings:
                {
                    "dots": false,
                    "arrows": false, 
                    "infinite": false,
                    "speed": 500,
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    "initialSlide": 0,
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