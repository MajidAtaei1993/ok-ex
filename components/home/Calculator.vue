<template>
    <section class="calculator-section" v-if="localCurrencies.length">
        <v-alert color="secondary" icon="mdi-check-circle-outline" v-model="alert" class="alert" close-icon="mdi-close" transition="slide-x-transition">{{ tab == 0 ? 'خرید از سایت فعال شد' : 'فروش به سایت فعال شد' }}</v-alert>
        <v-col cols="12" md="6">
            <div class="head">
                <div class="text">
                    با <span>اوکی اکسچنج</span> با سرعت نور خرید و فروش کنید
                </div>
                <p>
                    امکان خرید و فروش بیش از 700 رمز ارز با تحویل آنی، بدون نیاز به ساخت کیف پول با بروز ترین سیستم تبادل ارز های دیجیتال بیشتر آشنا شوید، ما بهترین امکانات را برای شما کنار هم قرار داده ایم...
                </p>
            </div>
            <div class="card py-0">
                <div class="table">
                    <div class="tr">
                        <div class="td">
                            <div class="text">ریت تبادل</div>
                        </div>
                        <div class="td">
                            <div class="text">{{ tab == 0 && selectedCoin ? selectedCoin.buy : selectedCoin.sell }}</div>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="td">
                            <div class="text">زمان دریافت وجه</div>
                        </div>
                        <div class="td">
                            <div class="text">فوری</div>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="td">
                            <div class="text">نوع تبادل</div>
                        </div>
                        <div class="td">
                            <div class="text">{{ tab == 0 ? 'خرید از ما' : 'فروش به ما'}}</div>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="td">
                            <div class="text">{{ tab == 0 ? 'وضعیت خرید' : 'وضعیت فروش' }}</div>
                        </div>
                        <div class="td">
                            <div class="text">فعال</div>
                        </div>
                    </div>
                </div>
            </div>
        </v-col>
        <v-col cols="12" md="6">
            <div class="card">
                <div class="tabs">
                    <div :class="tab == 0 ? 'active-tab' : 'tab' " @click="tab = 0, changeAlert()">خرید</div>
                    <div :class="tab == 1 ? 'active-tab error' : 'tab' " @click="tab = 1, changeAlert()">فروش</div>
                </div>
                <div class="calculator-content" v-if="openCoinList == false">
                    <div class="select">
                        <p>{{ tab ? 'پرداخت' : 'دریافت' }}</p>
                        <div class="content">
                            <span @click="openCoinList = true" class="d-flex align-center">
                                <img :src="selectedCoin ? selectedCoin.icon : ''" alt="" class="icon">
                                <div class="coin mx-2">{{ selectedCoin ? selectedCoin.symbol : null }}</div>
                                <v-icon @click="openCoinList = true">mdi-chevron-down</v-icon>
                            </span>
                            <v-text-field hide-details flat solo type="text" background-color="transparent" light  height="100%" class="input" v-model="price.coinUnit">{{ changeCoin }}</v-text-field>
                        </div>
                    </div>
                    <img src="/assets/icons/home/arrow-change.svg" alt="" @click="tab =! tab, changeAlert()" :class="tab ? 'arrow-change' : 'arrow'">
                    <div class="select">
                        <p>{{ tab ? 'پرداخت' : 'دریافت' }}</p>
                        <div class="content">
                            <img src="/assets/icons/home/logo-toman.svg" alt="" class="icon">
                            <div class="coin">تومان</div>
                            <v-text-field hide-details flat solo type="text" background-color="transparent" light  height="100%" class="input" v-model="price.tomanUnit">{{ changeToman }}</v-text-field>

                        </div>
                    </div>
                    <v-btn class="submit rounded-lg" color="primary" block height="48" :href="tab == 0 ? selectedCoin.buyUrl : selectedCoin.sellUrl">شروع تبادل</v-btn>
                </div>
                <div v-else class="calculator-content box-shadow">
                    <div class="header">
                        <img :src="selectedCoin.icon" alt="" class="icon">
                        <div class="coin-name">{{ selectedCoin.symbol }} ({{ selectedCoin.text }})</div>
                        <v-btn icon @click="getCoin(item), openCoinList = false">
                            <v-icon color="primary">mdi-chevron-up</v-icon>
                        </v-btn>
                    </div>
                    <v-col cols="12">
                        <v-text-field hide-details flat background-color="#fafafa" v-model="search" light placeholder="جستجو بر اساس تام یا اختصار" solo height="56" clearable>
                            <template v-slot:prepend-inner>
                                <img src="/assets/icons/magnify.svg" alt="">
                            </template>
                        </v-text-field>
                    </v-col>
                    <div class="coin-list">
                        <div class="tr" v-for="(item, i) in filterDataTable" :key="i" @click="getCoin(item), openCoinList = false">
                            <div class="td">
                                <div class="icon-text">
                                    <img :src="item.icon" alt="" class="icon">
                                    <div class="text">{{ item.text }}</div>
                                </div>
                            </div>
                            <div class="td">
                                <div class="name">{{ item.name }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-col>
    </section>
</template>

<script>
    export default {
        props:['currencies'],
        data(){
            return{
                tables:[
                    { text:'ریت تبادل', title:'689,403,573 تومان' },
                    { text:'زمان دریافت وجه', title:'فوری' },
                    { text:'نوع تبادل', title:'حرید از ما' },
                    { text:'وضعیت خرید', title:'فعال' }
                ],
                tab: [0,1],
                search:'',
                openCoinList:false,
                localCurrencies:[],
                selectedCoin:null,
                price:{
                    tomanUnit: null,
                    coinUnit: null,
                },
                alert: null,
            }
        },
        methods:{
            getCoin(i){
                this.selectedCoin = i
                console.log(this.selectedCoin)
            },
            getCurrencies(newList){
                let temp= []
                for(const key in newList){
                    if (Object.hasOwnProperty.call(newList, key)) {
                        const coin = newList[key]
                            let data = {
                            value : key,
                            text : coin.text,
                            buy : coin.buy,
                            sell: coin.sell,
                            icon: coin.icon,
                            usd: coin.usd,
                            name: coin.value,
                            sellUrl: coin.sellUrl,
                            buyUrl: coin.buyUrl,
                            symbol: coin.value
                        }
                        if (!this.selectedCoin) {
                            this.selectedCoin = data
                            this.coinUnit = 1
                        }
                        temp.push(data)
                    }
                }
                this.localCurrencies = temp
                if (this.selectedCoin) {
                    for (let i = 0; i < temp.length; i++) {
                        const el = temp[i];
                        if (el.value == this.selectedCoin) {
                            this.selectedCoin = temp[i]
                        }
                    }
                }
            },
            changeAlert(){
                this.alert = true
                setInterval(() => {
                    this.alert = false
                }, 7000);
            }
        },
        mounted(){
            this.tab = 0
        },
        watch:{
            currencies(N, O){
                this.getCurrencies(N)
            }
        },
        computed:{
            filterDataTable(){
                if (this.search) {
                    return this.localCurrencies.filter(coin=>{
                        return this.search.toLowerCase().split(" ").every(v=>coin.text.toLowerCase().includes(v))
                    })
                }
                else{
                    return this.localCurrencies
                }
            },
            changeToman(){
                if (this.selectedCoin) {
                    let toman = this.tab == 0 ? this.selectedCoin.buy.replaceAll(',', '') : this.selectedCoin.sell.replaceAll(',', '')
                    let coin = this.price.tomanUnit
                    let result = Number.parseFloat(coin/toman)
                    this.price.coinUnit = result                    
                    // this.price.coinUnit == 0 ? this.price.coinUnit = 1 : new Intl.NumberFormat().format(result)
                }
            },
            changeCoin(){
                if (this.selectedCoin) {
                    let toman = this.tab == 0  ? this.selectedCoin.buy.replaceAll(',', '') : this.selectedCoin.sell.replaceAll(',', '')
                    let coin = this.price.coinUnit
                    let result = Number.parseFloat(coin*toman)
                    this.price.tomanUnit = result.toFixed(0)
                    // this.price.tomanUnit = new Intl.NumberFormat().format(result.toFixed(0))
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>