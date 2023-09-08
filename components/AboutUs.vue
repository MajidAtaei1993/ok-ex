<template>
    <section class="support-section" id="scroling-technique-7">
        <img src="/assets/images/navigation-bg.svg" alt="" class="main-bg">
        <div class="header-navigation">
            <h3>سوالات متداول</h3>
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
                <img src="/assets/images/supports.png" alt="" class="banner">
                <div class="about">
                    <h3>درباره اوکی اکسچنج</h3>
                    <p>ما یک تیم متشکل از متخصصان و علاقمندان به حوزه بلاک چین و رمزارزها هستیم که همواره برای ارائه راهکارهای کاربردی در این زمینه تلاش می کنیم. ما از سال ۱۳۹۶ با این ایده متمایز شروع کردیم که هر فرد باید بتواند به راحتی و در امنیت کامل اقدام به ارسال و دریافت رمزارز نماید. امروز اوکی اکسچنج پلتفرمی قابل اعتماد و با کاربری آسان است که دسترسی به تبادل رمزارزها را برای همه کاربران فراهم کرده است.</p>
                </div>
                <div class="exchange-value">
                    <div class="head">
                        <div class="text">ارزش‌هـای کـلیدی اوکـی اکـسـچـنج</div>
                    </div>
                    <v-col cols="12" md="4" v-for="(item, i) in values" :key="i">
                        <div class="card">
                            <img :src="item.icon" alt="" class="icon">
                            <div class="card-title">{{ item.title }}</div>
                            <div class="card-subtitle">{{ item.subtitle }}</div>
                        </div>
                    </v-col>
                </div>
                <div class="banner">
                    <v-col cols="12" md="6">
                        <div class="card">
                            <div class="text">تلاش می‌کنیم که افراد بیشتری به قدرت بلاکچین دسترسی پیدا کنند</div>
                            <div class="subtext">
                                از پنج سال پیش تا همین حالا، به همت تیمی از برنامه‌نویسان، معامله‌گران حرفه‌ای و متخصصین امنیت بدون حتی یک روز تعطیلی در حال طراحی و توسعه یک پلتفرم امن و کارآمد هستیم.
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="card">
                            <img src="/assets/images/about-img.jpg" alt="" class="banner-img">
                            <span />
                        </div>
                    </v-col>
                </div>
                <div class="our-golas">
                    <v-col cols="12" md="auto" sm="6" v-for="(item, i) in ourGoals" :key="i">
                        <div class="card">
                            <div class="count">{{ item.count }}</div>
                            <div class="subject">{{ item.subject }}</div>
                        </div>
                    </v-col>
                </div>
                <div class="comments">
                    <div class="head">
                        <div class="text">اوکـی اکـسچـنج از نـگاه رسـانـه هـا</div>
                    </div>
                    <slick-carousel v-bind="settings" class="my-3">
                        <v-col v-for="(item, i) in slides" :key="i">
                            <div class="card">
                                <div class="icon-name">
                                    <img :src="item.icon" alt="" class="icon">
                                    <div class="name">{{ item.name }}</div>
                                </div>
                                <div class="desc">{{ item.desc }}</div>
                            </div>
                        </v-col>
                    </slick-carousel>
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
                    { text: 'درباره اوکی اکسچنج', disabled: false, to: 'support-about-us' },
                ],
                values:[
                    { icon:'/assets/icons/about-us/customer.svg', title:'مشتری شایسته بیشترین احترام است', subtitle:'رضایت مشتری محور اصلی تصمیم های ماست. ما بر این باور هستیم که موفقیت ما در گرو موفقیت مشتریان ماست.' },
                    { icon:'/assets/icons/about-us/lock-bulk.svg', title:'بی وقفه در حال ارتقا امنیت هستیم', subtitle:'امنیت یک مزیت نیست، پایه و اساس اقتصاد رمزارز است. بی وقفه در تلاش هستیم که در این زمینه همواره بروز بوده و از سودجویان جلوتر باشیم.' },
                    { icon:'/assets/icons/about-us/chart-pie.svg', title:'تلاش برای ارائه خدمات متنوع به مشتریان', subtitle:'همواره در تلاش هستیم تا در ارائه خدمات متنوع به مشتریان پیشتاز باشیم و بیشترین انتخاب ها را در مقابل مشتریان قرار دهیم.' },
                ],
                ourGoals:[
                    { count:'+5', subject:'حضور در مارکت' },
                    { count:'+70', subject:'پشتیبان' },
                    { count:'2', subject:'خدمت در ثانیه' },
                    { count:'+1 میلیون', subject:'مشتری از سراسر ایران' },
                    { count:'+400', subject:'ارز دیجیتال' }
                ],
                slides:[
                    { icon:'/assets/icons/about-us/khanesarmaye.png', name:'خانه سرمایه', desc:'این صرافی یکی از برترین صرافی های رمز ارز در ایران بوده و همواره با افزایش سطح کیفی خدمات، سعی در ارائه یک بستر معاملاتی پیشرو، امن و مطمئن برای کاربران خود دارد' },
                    { icon:'/assets/icons/about-us/virgool.png', name:'ویرگول', desc:' اوکی اکسچنج تلاش زیادی برای آموزش و توسعه دانش در زمینه های بلاک چین و رمز ارز ها انجام داده است. خوشحالیم که در این مسیر توانستیم کنار اوکی اکسچنج باشیم.' },
                    { icon:'/assets/icons/about-us/rahepardakht.png', name:'راه پرداخت', desc:'تجربه کاربری روان و دلچسب و در عین حال تعداد بالای بازارها، از مزیت‌های بزرگی هستند که اوکی اکسچنج را به یکی از جذاب‌ترین اکسچنج‌های ایرانی برای انتخاب تبدیل کرده است. رسول قربانی سردبیر راه پرداخت' },
                    { icon:'/assets/icons/about-us/zoomit.png', name:'زومیت', desc:'این روز ها رقابت خیلی زیادی بین صرافی های آنلاین شکل گرفته و چیزی که می تونه یک مزیت رقابتی باشه، تعداد ارز های یک صرافیه که اوکی اکسچنج تونسته بیش از 400 رمزارز داشته باشه.' },
                ],
                settings:
                {
                    "dots": true,
                    "infinite": false,
                    "speed": 500,
                    "slidesToShow": 2,
                    "slidesToScroll": 1,
                    "initialSlide": 0,
                    "centerPadding": "20px",
                    "responsive": [
                        {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 2,
                        "slidesToScroll": 1,
                            "infinite": true,
                            "dots": true
                        }
                        },
                        {
                        "breakpoint": 600,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "initialSlide": 2
                        }
                        },
                        {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                        }
                    ]
                }
            }
        }
    }
</script>