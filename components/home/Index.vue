<template>
    <section class="home-section">
        <Navigation />
        <CoinSlider />
        <Calculator :currencies="currencies" />
        <SocialMedias />
        <Description />
        <DataTable :currencies="currencies" :currencyGraph="currencyGraph" />
        <About />
        <Trust />
        <Posts />
        <FAQ />
        <Support />
    </section>
</template>

<script>
import Navigation from '@/components/home/Navigation.vue'
import CoinSlider from '@/components/home/CoinSliders.vue'
import Calculator from '@/components/home/Calculator.vue'
import SocialMedias from '@/components/home/SocialMedias.vue'
import Description from '@/components/home/Desc.vue'
import DataTable from '@/components/home/DataTable.vue'
import About from '@/components/home/About.vue'
import Trust from '@/components/home/Trust.vue'
import Posts from '@/components/home/Posts.vue'
import FAQ from '@/components/home/FAQ.vue'
import Support from '@/components/home/Support.vue'
    export default {
        components:{
            Navigation,
            CoinSlider,
            Calculator,
            SocialMedias,
            Description,
            DataTable,
            About,
            Trust,
            Posts,
            FAQ,
            Support
        },
        data(){
            return{
                currencies:[],
                currencyGraph:[]
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
        watch:{
            currencies(N,O){
                N == O
            }
        },
        mounted(){
            this.getCurrencies()
            console.log(this.currencies)
        }
    }
</script>

<style lang="scss" scoped>

</style>