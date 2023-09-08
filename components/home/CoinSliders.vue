<template>
    <section class="coin-sliders">
        <slick-carousel v-bind="settings" class="my-3 slick-carousel" v-if="currencies.length">
            <v-col v-for="(coin, i) in currencies.slice(0, 10)" :key="i">
                <a class="card" :href="coin.buyUrl">
                    <div class="icon-name">
                        <img :src="coin.icon" alt="" class="icon">
                        <div class="name">
                            <span>{{ coin.value }}</span>
                            <span>{{ coin.text }}</span>
                        </div>
                        <img :src="coin.graph" alt="" class="chart">
                    </div>
                    <div class="usd-price-percent">
                        <div class="usd-price">
                            <div class="usd">
                                {{ Intl.NumberFormat().format(coin.usd) }}
                                <span>USDT</span>
                            </div>
                            <div class="price">
                                <span>IRT</span>
                                {{ coin.buy }}
                            </div>
                        </div>
                        <div class="percent" :class="coin.change >0 ? 'secondary--text' : 'error--text'">{{ coin.change }}</div>
                    </div>
                </a>
            </v-col>
        </slick-carousel>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                currencies:[],
                settings:
                {
                    // "dots": true,
                    "arrows": true,
                    "infinite": true,
                    "speed": 500,
                    "slidesToShow": 3,
                    "slidesToScroll": 1,
                    "initialSlide": 0,
                    "autoplay": true,
                    "centerPadding": "20px",
                    "responsive": [
                        {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": false
                            }
                        },
                    ]
                }
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