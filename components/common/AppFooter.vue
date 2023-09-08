<template>
    <v-footer light inset padless color="#fdfdff">
        <v-expansion-panels flat class="footer-expansion-panels" light accordion>
            <v-expansion-panel class="expansion-panel" v-for="(link, i) in expandLinks" :key="i">
            <v-expansion-panel-header class="expand-header" expand-icon="mdi-chevron-down-circle-outline">
                {{ link.head }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <div class="expand-text">
                    <ul>
                        <li v-for="(item, j) in link.child" :key="j">
                            <a :href="item.href" v-if="item.href" class="link">{{ item.text }}</a>
                            <nuxt-link :to="{ name: item.route }" v-if="item.route" class="link">{{ item.text }}</nuxt-link>
                        </li>
                    </ul>
                    <ul class="medias">
                        <li v-for="(item, i) in link.socialMedias" :key="i">
                            <v-btn min-width="10" depressed class="rounded-lg btn" :href="item.link" color="#b1b1b2">
                                <v-icon class="icon">{{ item.icon }}</v-icon>
                            </v-btn>
                        </li>
                    </ul>
                </div>
            </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <div class="footer-main">
            <!-- footer top -->
            <div class="footer-top">
                <v-col cols="12" lg="3" sm="4" v-for="(link, i) in links" :key="i" class="column">
                    <ul>
                        <li v-for="(item, j) in link.child" :key="j">
                            <div class="heading">{{ item.head }}</div>
                            <a :href="item.href" v-if="item.href" class="link">{{ item.text }}</a>
                            <nuxt-link :to="{ name: item.route }" v-if="item.route" class="link">{{ item.text }}</nuxt-link>
                        </li>
                    </ul>
                </v-col>
                <v-col cols="12" lg="3" class="column">
                    <div class="head">
                        <div class="text">شبکه های اجتماعی</div>
                        <v-btn min-width="10" depressed class="rounded-lg btn" v-for="(item, i) in socialMedias" :key="i" :href="item.link" color="#b1b1b2">
                            <v-icon class="icon">{{ item.icon }}</v-icon>
                        </v-btn>
                    </div>
                    <p>ساعات پاسخگویی پشتیبانی تلفنی از 8:30 صبح الی 16:30 عصر به جز روزهای تعطیل می باشد. همچنین می توانید بصورت ۲۴ ساعته و ۷ روز هفته از طریق تیکت ها با ما در ارتباط باشید.</p>
                    <div class="contact">
                        <div class="icon-text">
                            <img src="/assets/icons/footer/headphone.png" alt="" class="icon">
                            <div class="text">05191001040</div>
                        </div>
                        <div class="icon-text">
                            <img src="/assets/icons/footer/email.png" alt="" class="icon">
                            <div class="text">support@ok-ex.io</div>
                        </div>
                    </div>
                </v-col>
            </div>
            <!-- footer top end -->
            <!-- footer middle -->
            <div class="footer-middle">
                <v-col cols="12" md="8">
                    <div class="heading">
                        <div class="text">درباره اوکی اکسچنج</div>
                        <div class="subtext">تقریبا در ۶ سال قبل بود که اوکی اکسچنج کار خود را با سه نفر از علاقمندان به برنامه نویسی وب آغاز کرد. تمرکز ما در این سال ها ایجاد استارت آپ هایی در جهت ارائه خدمات مالی و رفع نیاز های کاربرانی بود که به دلایل تحریم و</div>
                        <nuxt-link class="link" :to="{ name: 'support-about-us'}">اطلاعات بیشتر...</nuxt-link>
                    </div>
                </v-col>
                <v-col cols="12" lg="2" sm="6" class="logo">
                    <img src="/logo.svg" alt="">
                    <div class="logo-text">اوکی اکسچنج</div>
                </v-col>
                <v-col cols="12" lg="2" sm="6" class="danesh">
                    <img src="/assets/images/licenses/danesh-bonyan.87844f0.png" alt="" >
                </v-col>
            </div>
            <!-- footer middle end -->
            <!-- footer bottom -->
            <div class="footer-bottom">
                <div class="text">
                    <nuxt-link class="link" :to="{ name: 'index' }">صرافی اوکی اکسچنج</nuxt-link>
                    - پلتفرم برتر ارز های دیجیتال © 2022. تمامی حقوق متعلق به شرکت دانش بنیان اوکی اکسچنج است.
                    طراحی و پشتیبانی (<a class="azarColor--text" href="https://azarertebat.ir">آذر ارتباط</a>)
                </div>
                <div class="coins">
                    <div class="coin" v-for="(coin, i) in currencies.slice(0,4)" :key="i">
                        <div class="name">{{ coin.value }}</div>
                        <div class="price">{{ new Intl.NumberFormat().format(coin.usd) }}</div>
                        <span>/</span>
                    </div>
                </div>
            </div>
            <!-- footer bottom end -->
        </div>
    </v-footer>
</template>

<script>
    export default {
        data(){
            return{
                currencies:[],
                socialMedias:[
                    { icon:'mdi-send', link:'https://t.me/Okexir' },
                    { icon:'mdi-instagram', link:'https://www.instagram.com/okex.ir' },
                    { icon:'mdi-twitter', link:'https://twitter.com/okexir' },
                    { icon:'mdi-steam', link:'https://www.aparat.com/okex' },
                ],
                links:[
                    {
                        child:[
                            { head:'ارزهای دیجیتال' },
                            { text:'خرید و فروش بیت کوین', href:'https://ok-ex.io/buy-and-sell/BTC' },
                            { text:'خرید و فروش اتریوم', href:'https://ok-ex.io/buy-and-sell/ETH' },
                            { text:'خرید و فروش ترون', href:'https://ok-ex.io/buy-and-sell/TRX' },
                            { text:'خرید و فروش ریپل', href:'https://ok-ex.io/buy-and-sell/XRP' },
                            { text:'خرید و فروش شیبا', href:'https://ok-ex.io/buy-and-sell/SHIB' },
                            { text:'خرید و فروش پولکادات', href:'https://ok-ex.io/buy-and-sell/DOT' },
                            { text:'خرید و فروش ماتیک', href:'https://ok-ex.io/buy-and-sell/MATIC' },
                            { text:'خرید و فروش اکسی اینفینیتی', href:'https://ok-ex.io/buy-and-sell/AXS' },
                            { text:'خرید و فروش آواکس', href:'https://ok-ex.io/buy-and-sell/AVAX' },
                        ]
                    },
                    {
                        child:[
                            { head:' ' },
                            { text:'خرید و فروش لایت کوین', href:'https://ok-ex.io/buy-and-sell/LTC' },
                            { text:'خرید و فروش دوج کوین', href:'https://ok-ex.io/buy-and-sell/DOGE' },
                            { text:'خرید و فروش تتر', href:'https://ok-ex.io/buy-and-sell/USDT' },
                            { text:'خرید و فروش BMB', href:'https://ok-ex.io/buy-and-sell/BNB' },
                            { text:'خرید و فروش کاردانو', href:'https://ok-ex.io/buy-and-sell/ADA' },
                            { text:'خرید و فروش سولانا', href:'https://ok-ex.io/buy-and-sell/SOL' },
                            { text:'خرید و فروش بیت تورنت', href:'https://ok-ex.io/buy-and-sell/BTT' },
                            { text:'خرید و فروش لینک', href:'https://ok-ex.io/buy-and-sell/LINK' },
                            { text:'خرید و فروش دیجیتال', route:'index' },
                        ]
                    },
                    {
                        child:[
                            { head:'دسترسی سریع' },
                            { text:'سوالات متداول', route:'support-faq' },
                            { text:'قوانین و سرایط استفاده', route:'info-terms' },
                            { text:'کمسیون سایت', route:'info-fees' },
                            { text:'درباره اوکی اکسچنج', route:'support-about-us' },
                            { text:'تماس با ما', route:'support-contact' },
                            { text:'مجوزها', route:'licenses' },
                            { text:'بلاگ', href:'https://blog.ok-ex.io/' },
                            { text:'مستندات', href:'https://ok-ex.io/api' },
                        ]
                    },
                ],
                expandLinks:[
                    {
                        head:'ارزهای دیجیتال',
                        child:[
                            { text:'خرید و فروش بیت کوین', href:'https://ok-ex.io/buy-and-sell/BTC' },
                            { text:'خرید و فروش اتریوم', href:'https://ok-ex.io/buy-and-sell/ETH' },
                            { text:'خرید و فروش ترون', href:'https://ok-ex.io/buy-and-sell/TRX' },
                            { text:'خرید و فروش ریپل', href:'https://ok-ex.io/buy-and-sell/XRP' },
                            { text:'خرید و فروش شیبا', href:'https://ok-ex.io/buy-and-sell/SHIB' },
                            { text:'خرید و فروش پولکادات', href:'https://ok-ex.io/buy-and-sell/DOT' },
                            { text:'خرید و فروش ماتیک', href:'https://ok-ex.io/buy-and-sell/MATIC' },
                            { text:'خرید و فروش اکسی اینفینیتی', href:'https://ok-ex.io/buy-and-sell/AXS' },
                            { text:'خرید و فروش آواکس', href:'https://ok-ex.io/buy-and-sell/AVAX' },
                            { text:'خرید و فروش لایت کوین', href:'https://ok-ex.io/buy-and-sell/LTC' },
                            { text:'خرید و فروش دوج کوین', href:'https://ok-ex.io/buy-and-sell/DOGE' },
                            { text:'خرید و فروش تتر', href:'https://ok-ex.io/buy-and-sell/USDT' },
                            { text:'خرید و فروش BMB', href:'https://ok-ex.io/buy-and-sell/BNB' },
                            { text:'خرید و فروش کاردانو', href:'https://ok-ex.io/buy-and-sell/ADA' },
                            { text:'خرید و فروش سولانا', href:'https://ok-ex.io/buy-and-sell/SOL' },
                            { text:'خرید و فروش بیت تورنت', href:'https://ok-ex.io/buy-and-sell/BTT' },
                            { text:'خرید و فروش لینک', href:'https://ok-ex.io/buy-and-sell/LINK' },
                            { text:'خرید و فروش دیجیتال', route:'index' },
                        ]
                    },
                    {
                        head:'دسترسی سریع',
                        child:[
                            { text:'سوالات متداول', route:'support-faq' },
                            { text:'قوانین و سرایط استفاده', route:'info-terms' },
                            { text:'کمسیون سایت', route:'info-fees' },
                            { text:'درباره اوکی اکسچنج', route:'support-about-us' },
                            { text:'تماس با ما', route:'support-contact' },
                            { text:'مجوزها', route:'licenses' },
                            { text:'بلاگ', href:'https://blog.ok-ex.io/' },
                            { text:'مستندات', href:'https://ok-ex.io/api' },
                        ]
                    },
                    {
                        head:'شبکه های اجتماعی',
                        socialMedias:[
                            { icon:'mdi-send', link:'https://t.me/Okexir' },
                            { icon:'mdi-instagram', link:'https://www.instagram.com/okex.ir' },
                            { icon:'mdi-twitter', link:'https://twitter.com/okexir' },
                            { icon:'mdi-steam', link:'https://www.aparat.com/okex' },
                        ],
                    }
                ]
            }
        },
        methods:{
            getCurrencies(){
                let temp = []
                this.$store.dispatch('getCurrencies')
                .then(resp=>{
                    for (let i = 0; i < Object.entries(resp).length; i++) {
                        const coin = Object.entries(resp)[i];
                        temp.push({
                            value: coin[0],
                            text: coin[1].name,
                            usd: coin[1].usd,
                            icon: coin[1].icon,
                            sell: coin[1].sell,
                            buy: coin[1].buy,
                            sellUrl: coin[1].sellurl,
                            buyUrl: coin[1].buyurl
                        })
                    }
                    setTimeout(() => {
                        this.currencies = temp
                    }, 3000);
                })
                .catch(err=>{
                    // console.log(err)
                })
            },
        },
        mounted(){
            this.getCurrencies()
        }
    }
</script>

<style lang="scss" scoped>

</style>