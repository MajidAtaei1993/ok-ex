<template>
    <section class="data-table home-data-table">
        <div class="head">
            <img src="/assets/icons/home/slider-chart-icon.svg" alt="" class="icon">
            <div class="text">
                آخرین قیمت ارزهای دیجیتال در بازار <span>اوکی اکسچنج</span> تریدر
            </div>
        </div>
        <div class="subhead">
            <div class="text">مشاهده روند تغیرات روزانه ارز های دیجیتال</div>
        </div>
        <div class="thead">
            <div class="tr">
                <div class="th" v-for="(th, i) in header" :key="i">
                    <div class="text">{{ th.text }}</div>
                </div>
            </div>
        </div>
        <div class="tbody">
            <div class="tr" v-for="(tr, i) in currencies.slice(0, 8)" :key="i">
                <div class="td">
                    <a :href="tr.buyUrl">
                        <img :src="tr.icon" alt="" class="icon">
                        <div class="text">
                            <div class="name">{{ tr.value }}</div>
                        </div>
                        <span>|</span>
                        <div class="full-name">{{ tr.name }}</div>
                    </a>
                </div>
                <div class="td">
                    <div class="text">
                        {{ tr.text }}
                    </div>
                </div>
                <div class="td">
                    <div class="text">
                        {{ tr.buy }}
                    </div>
                </div>
                <div class="td">
                    <div class="text">
                        {{ new Intl.NumberFormat().format(tr.usd) }}
                    </div>
                </div>
                <div class="td">
                    <div class="text" dir="ltr" :class="tr.change > 0 ? 'secondary--text' : 'error--text'">
                        {{ tr.change }}
                    </div>
                </div>
                <div class="td">
                    <div class="text">
                        <img :src="tr.graph" alt="" class="graph">
                    </div>
                </div>
            </div>
        </div>
        <nuxt-link :to="{ name:'buy-and-sell' }" class="show-all-coins">
        مشاهده بیشتر بازار ارزهای دیجیتال
        <v-icon light>mdi-chevron-left</v-icon>
        </nuxt-link>
    </section>
</template>

<script>
    export default {
        props:[ 'currencies'],
        data(){
            return{
                header:[
                    { text:'نام ارز دیجیتال' },
                    { text:'نام فارسی' },
                    { text:'قیمت تومان' },
                    { text:'قیمت تتر' },
                    { text:'تغییرات' },
                    { text:'نمودار' }
                ]
            }
        },
        methods:{
            numberFormat(data){
                new Intl.NumberFormat().format(data)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>