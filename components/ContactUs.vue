<template>
    <section class="support-section" id="scroling-technique-7">
        <img src="/assets/images/navigation-bg.svg" alt="" class="main-bg">
        <div class="header-navigation">
            <h3>تماس با ما</h3>
            <v-breadcrumbs :items="items">
                <template v-slot:divider>
                    <v-icon light>mdi-chevron-left</v-icon>
                </template>
            </v-breadcrumbs>
        </div>
        <div class="content">
            <div class="left">
                <div class="head">
                    <img src="/assets/icons/support.svg" alt="" class="icon">
                    <div class="text">پشتیبانی</div>
                </div>
                <div class="actions">
                    <nuxt-link :to="{ name: 'support-faq' }" :class="$route.name == 'support-faq' ? 'active-link' : 'link'">سوالات متداول</nuxt-link>
                    <nuxt-link :to="{ name: 'support-contact' }" :class="$route.name == 'support-contact' ? 'active-link' : 'link'">تماس با ما</nuxt-link>
                    <nuxt-link :to="{ name: 'support-about-us' }" :class="$route.name == 'support-about-us' ? 'active-link' : 'link'">درباره اوکی اکسچنج</nuxt-link>
                </div>
            </div>
            <div class="right">
                <div class="alert">
                    ساعات پاسخگویی پشتیبانی تلفنی از 8:30 صبح الی 16:30 عصر به جز روزهای تعطیل می باشد.
                </div>
                <p>
                    مشتری گرامی، در واحد پشتیبانی اوکی اکسچنج همواره آماده پاسخگویی به سوالات و رفع نیازهای شما هستیم. پیشنهاد می شود از طریق ارسال تیکت در حساب کاربری خود با ما در ارتباط باشید. کارشناسان ما در اسرع وقت پاسخگوی شما خواهند بود. همچنین می توانید از طریق شماره تلفن پشتیبانی با ما تماس گرفته و یا از طریق چت آنلاین در سایت، سوالات خود را مطرح نمایید.
                </p>
                <div class="contact">
                    <v-col cols="12" md="6" v-for="(item, i) in contact" :key="i" class="card">
                        <img :src="item.icon" alt="" class="icon">
                        <div class="text">{{ item.text }}</div>
                        <div class="subject">{{ item.subject }}</div>
                    </v-col>
                </div>
                <div class="social-contact">
                    <div class="head">
                        <div class="text">اوکی اکسچنج را در شبکه های اجتماعی دنبال کنید</div>
                    </div>
                    <v-col cols="12" md="3" sm="6" v-for="(item, i) in socialMedia" :key="i" class="columns">
                        <a :href="item.href" class="card">
                            <div class="text">{{ item.text }}</div>
                            <img :src="item.icon" alt="" class="icon">
                        </a>
                    </v-col>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                items: [
                    { text: 'خانه', disabled: false, to: 'index' },
                    { text: 'پشتیبانی', disabled: false, to: 'support' },
                    { text: 'تماس با ما', disabled: false, to: 'support-contact' },
                ],
                contact:[
                    { icon:'/assets/icons/contact/telehphone.svg', text:'شماره تلفن :', subject:'05191001040' },
                    { icon:'/assets/icons/contact/location.svg', text:'آدرس دفتر تهران :', subject:'نیاوران - مجتمع حیات سبز' },
                    { icon:'/assets/icons/contact/email.svg', text:'ایمیل :', subject:'support@ok-ex.io' },
                    { icon:'/assets/icons/contact/location.svg', text:'آدرس دفتر مشهد :', subject:'میدان جانباز' }
                ],
                socialMedia:[
                    { text:'اینستاگرام', icon:'/assets/icons/contact/insta.svg', href:'https://www.instagram.com/okex.ir/'},
                    { text:'تلگرام', icon:'/assets/icons/contact/telegram.svg', href:'https://t.me/Okexir'},
                    { text:'توییتر', icon:'/assets/icons/contact/twitter.svg', href:'https://twitter.com/okexir'},
                    { text:'آپارات', icon:'/assets/icons/contact/aparat.svg', href:'https://www.aparat.com/okex' }
                ],
                panels:[
                    {
                        head:'',
                        child:[
                            { 
                                head:'',
                                text:''
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>