<template>
    <section>
        <v-app-bar fixed app elevate-on-scroll scroll-target="#scroling-technique-7" class="header">
            <nuxt-link :to="{ name:'index' }" class="logo">
                <v-img class="img" src="/logo.svg" />
                <span>اوکی اکسچنج</span>
            </nuxt-link>
            <v-app-bar-nav-icon @click="drawer =! drawer" class="humburger" />
            <div class="nav-links">
                <div class="nav-link" v-for="(link, i) in headerLinks.slice(0,2)" :key="i">
                    <nuxt-link v-if="link.route" :to="{ name: link.route }" class="link">{{ link.text }}</nuxt-link>
                    <a :href="link.href" v-if="link.href" class="link">{{ link.text }}</a>
                </div>
                <v-menu content-class="nav-menu" open-on-hover bottom left offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <span v-on="on" v-bind="attrs" class="nav-menu-btn">
                            <span>
                                خرید و فروش ارز دیجیتال
                                <img src="/assets/icons/chevron.svg" alt="" class="chevron">
                            </span>
                        </span>
                    </template>
                    <v-list class="list">
                        <v-col cols="9" class="currencies-list">
                            <v-col cols="12" lg="3" md="4" sm="6" class="pa-2" v-for="(coin, i) in currencies" :key="i">
                                <v-list-item class="list-item" :href='`https://ok-ex.io/buy-and-sell/${coin.value}`' target="_blank">
                                    <img :src="coin.icon" alt="" class="icon">
                                    <v-list-item-content>
                                        <div class="item-content">
                                            <span>
                                                فروش و خرید
                                                {{ coin.text }}
                                            </span>
                                            <small class="percent" dir="ltr" :class="coin.change > 0 ? 'secondary--text' : 'error--text'">{{ coin.change }}</small>
                                            <v-tooltip bottom color="primary" max-width="150">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon v-on="on" v-bind="attrs" color="accent" small>mdi-alert-circle-outline</v-icon>
                                                </template>
                                                <small class="tooltip-text white--text">
                                                    خرید و فروش سریع، ایمن و آسان با احراز هویت فوری به {{ coin.text }}
                                                </small>
                                            </v-tooltip>
                                        </div>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                        </v-col>
                        <v-col cols="3">
                            <div class="landing-menu-content">
                                <img src="/assets/images/landing-menuwebp.webp" alt="" class="landing-img">
                                <nuxt-link :to="{ name: 'buy-and-sell'}" class="go-too-all-currencies">
                                    قیمت لحظه ای ارزهای دیجیتال
                                    <v-icon>mdi-arrow-left-thin</v-icon>
                                </nuxt-link>
                            </div>
                        </v-col>
                    </v-list>
                </v-menu>
                <div class="nav-link" v-for="(link, i) in headerLinks.slice(2)" :key="i">
                    <nuxt-link v-if="link.route" :to="{ name: link.route }" class="link">{{ link.text }}</nuxt-link>
                    <a :href="link.href" v-if="link.href" class="link">{{ link.text }}</a>
                </div>
            </div>
            <div class="login">
                <a href="https://ok-ex.io/login" class="link">ورود به پنل کاربری</a>
                <v-btn class="register-btn" depressed color="primary">ثبت نام</v-btn>
                <v-menu offset-y content-class="dowload-app-menu" open-on-hover>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-on="on" v-bind="attrs" class="menu-btn" depressed>
                            <v-img src="/assets/icons/download.webp" class="img" />
                        </v-btn>
                    </template>
                    <v-list class="list">
                        <v-list-item class="list-item">
                            <v-list-item-avater class="barcode">
                                <v-img src="/assets/images/barcode.png" alt="" class="img" />
                            </v-list-item-avater>
                            <v-list-item-content>
                                <div class="text">
                                    برای دانلود مستقیم اپلیکیشن کیو آر کد  مقابل را اسکن کنید
                                </div>
                                <v-list-item-subtitle>
                                    <v-btn class="download-btn" href="https://ok-ex.io/download" depressed>دانلود اپلیکیشن</v-btn>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute class="drawer" width="100%" height="100%">
            <v-list dense dark width="100%">
                <v-list-item class="list-item">
                    <v-list-item-content>
                        <v-list-item-title>ورود به پنل کاربری</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-btn color="primary" rounded depressed width="165" height="33" href="https://ok-ex.io/register">
                            <v-icon class="ml-3">mdi-account-circle-outline</v-icon>
                            ثبت نام
                        </v-btn>
                    </v-list-item-icon>
                </v-list-item>
                <v-list-item v-for="(item, i) in headerLinks.slice(0,2)" :key="i" class="list-item">
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-expansion-panels flat class="expansion-panels" light accordion>
                        <v-expansion-panel class="expansion-panel">
                        <v-expansion-panel-header class="px-0 font-12">خرید و فروش ارز دیجیتال</v-expansion-panel-header>
                        <v-expansion-panel-content class="expand-content">
                            <div class="expand-text">
                                <v-col cols="12" class="pa-2" v-for="(coin, i) in currencies" :key="i">
                                    <v-list-item class="list-item" :href='`https://ok-ex.io/buy-and-sell/${coin.value}`' target="_blank">
                                        <img :src="coin.icon" width="15" height="15" alt="" class="icon ml-2">
                                        <v-list-item-content>
                                            <div class="item-content">
                                                <span class="font-10">
                                                    فروش و خرید
                                                    {{ coin.text }}
                                                </span>
                                                <small class="percent">1.1%-</small>
                                                <v-tooltip bottom color="primary" max-width="150">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-icon v-on="on" v-bind="attrs" color="accent" small>mdi-alert-circle-outline</v-icon>
                                                    </template>
                                                    <small class="tooltip-text white--text">
                                                        خرید و فروش سریع، ایمن و آسان با احراز هویت فوری به {{ coin.text }}
                                                    </small>
                                                </v-tooltip>
                                            </div>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-col>
                            </div>
                        </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-list-item>
                <v-list-item v-for="(item, i) in headerLinks.slice(2)" :key="i" class="list-item">
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item class="list-item">
                    <v-list-item-content>
                        <v-btn color="primary" class="d-flex mx-auto rounded-lg" depressed width="330" height="33" href="https://ok-ex.io/download">
                            دانلود اپلیکیشن اوکی اکسچنج
                        </v-btn>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                headerLinks:[
                    { text:'بازار', href:'https://ok-ex.io/trade/BTC_IRT' },
                    { text:'تبادل سریع', href:'https://ok-ex.io/otc/processing?coin=BTC' },
                    { text:'سوالات متداول', route:'support-faq' },
                    { text:'تماس با ما', route:'support-contact' },
                    { text:'درباره ما', route:'support-about-us' },
                    { text:'کسب درآمد', route:'earn-money' }
                ],
                currencies:[],
                drawer:null
            }
        },
        methods:{
            getCurrencies(){
                let temp = []
                this.$store.dispatch('getCurrencies')
                .then(resp=>{
                    this.$store.dispatch('getCurrencyGraph')
                    .then(resp1 =>{
                        // Currencies Lists
                        for (let i = 0; i < Object.entries(resp).length; i++) {
                            const coin = Object.entries(resp)[i];

                            let data = {
                                value : coin[0],
                                text : coin[1].name,
                                usd : coin[1].usd,
                                icon : coin[1].icon,
                                sell : coin[1].sell,
                                buy : coin[1].buy,
                                sellUrl : coin[1].sellurl,
                                buyUrl : coin[1].buyurl,
                                graph : null,
                                change : null
                            }
                            
                            // Graph Lists
                            for (let i = 0; i < Object.entries(resp1).length; i++) {
                                const el = Object.entries(resp1)[i];
                                if (coin[0] == el[1].symbol){
                                    data.graph = el[1].graph
                                    data.change = el[1]['24h']
                                    break
                                }
                            }

                            temp.push(data)
                        }
                        this.currencies = temp
                    })
                    .catch(err=>{
                        console.log('Something went wrong')
                    })
                    
                })
                .catch(err=>{
                    console.log('Something went wrong')
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