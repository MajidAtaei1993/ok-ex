<template>
    <section class="buy-and-sell">
        <div class="header-navigation">
            <h3>خرید و فروش</h3>
            <v-breadcrumbs :items="items" light>
                <template v-slot:divider>
                    <v-icon light>mdi-chevron-left</v-icon>
                </template>
            </v-breadcrumbs>
        </div>
        <div class="heading">
            <h3>قیمت ارز های دیجیتال و بازار کریپتوکارنسی</h3>
            <p>امروزه کسانی که به دنبال پیشرفت و چند برابر کردن در آمد ثابت و سرمایه خود هستند، با سرمایه گذاری در بورس، فارکس و همینطور بازار رمزارز ها و خرید ارز دیجیتال سعی بر این دارند تا به اهداف خود برسند. اما چرا افراد به خرید رمز ارز یا همان خرید ارز دیجیتال تمایل بیشتری از خود نشان می دهند؟ پاسخ ساده و مشخص است چرا که امروزه بازار کریپتوکارنسی سودهای خوبی می دهد و شما با یک تحلیل ساده‌ از قیمت ارز دیجیتال مدنظرتان و خرید به موقع آن می توانید به راحتی به سودهای کلان برسید.</p>
        </div>
        <CoinSlider :currencies="currencies" />
        <div class="table">
            <div class="heading">
                <div class="tabs">
                    <div class="d-flex align-center" :class="tab == 0 ? 'active-tab' : 'tab' " @click="tab = 0">
                        <img src="/assets/icons/star-tab.svg" alt="" class="star-icon ml-3">
                        مورد علاقه
                    </div>
                    <div :class="tab == 1 ? 'active-tab' : 'tab' " @click="tab = 1">لیست کوین ها</div>
                </div>
                <v-text-field hide-details outlined class="rounded-lg input" flat placeholder="جستجوی کوین" clear-icon="mdi-close" clearable light v-model="search">
                    <template v-slot:prepend-inner>
                        <img src="/assets/icons/magnify.svg" alt="">
                    </template>
                </v-text-field>
            </div>
            {{ favList }}
            <v-tabs-items v-model="tab" class="transparent">
                <v-tab-item>
                        <v-data-table light :items="favList" :headers="header" :search="search" no-data-text="لیست خالی است" :footer-props="footerProps" class="tbody" :items-per-page="filter" :page.sync="page" hide-default-footer>
                            <template v-slot:item.text="{ item }">
                                <div class="d-flex align-center">
                                    <v-checkbox off-icon="mdi-star-outline" on-icon="mdi-star" color="#2461E8" @click="removeCoin(item)" />
                                    <img :src="item.icon" alt="" class="icon" width="25" height="25">
                                    <div class="text mr-2">{{ item.text }}</div>
                                </div>
                            </template>
                            <template v-slot:item.value="{ item }">
                                <div class="text">{{ item.value }}</div>
                            </template>
                            <template v-slot:item.buy="{ item }">
                                <div class="text">IRT {{ item.buy }}</div>
                            </template>
                            <template v-slot:item.usd="{ item }">
                                <div class="text">{{ new Intl.NumberFormat().format(item.usd) }}</div>
                            </template>
                            <template v-slot:item.change="{ item }">
                                    <div class="text" dir="ltr" :class="item.change > 0 ? 'secondary--text' : 'error--text'">% {{ item.change }}</div>
                            </template>
                            <template v-slot:item.graph="{ item }">
                                    <img :src="item.graph" alt="" class="graph" width="150" height="23">
                            </template>
                            <template v-slot:item.action="{ item }">
                                    <v-menu offset-y auto>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-btn icon v-on="on" v-bind="attrs" light>
                                                <v-icon>mdi-dots-horizontal</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense color="white">
                                            <v-list-item :href="item.buyUrl">
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        خرید
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-list-item :href="item.sellUrl">
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        فروش
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                            </template>
                        </v-data-table>
                    <!-- <div class="data-table">
                        <div class="thead">
                            <div class="tr">
                                <div class="th" v-for="(th, i) in header" :key="i">
                                    <div class="text">{{ th }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="tbody">
                            <div class="tr" v-for="(coin, i) in favList" :key="i">
                                <div class="td justify-start">
                                    <v-btn icon @click="getCoin(coin)" class="star">
                                        <v-icon color="#2461E8">mdi-star</v-icon>
                                    </v-btn>
                                    <img :src="coin.icon" alt="" class="icon">
                                    <div class="text">{{ coin.text }}</div>
                                </div>
                                <div class="td">
                                    <div class="text">{{ coin.value }}</div>
                                </div>
                                <div class="td">
                                    <div class="text">{{ coin.buy }}</div>
                                </div>
                                <div class="td">
                                    <div class="text">{{ new Intl.NumberFormat().format(coin.usd) }}</div>
                                </div>
                                <div class="td">
                                    <div class="text" dir="ltr" :class="coin.change > 0 ? 'secondary--text' : 'error--text'">{{ coin.change }}</div>
                                </div>
                                <div class="td">
                                    <img :src="coin.graph" alt="" class="graph">
                                </div>
                                <div class="td justify-end">
                                    <v-menu offset-y auto>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-btn icon v-on="on" v-bind="attrs" light>
                                                <v-icon>mdi-dots-horizontal</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense color="white">
                                            <v-list-item :href="coin.buyUrl">
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        خرید
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-list-item :href="coin.sellUrl">
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        فروش
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </v-tab-item>
                <v-tab-item>
                    <div class="data-table">
                        <v-data-table light :items="filterDataTable" :headers="header" :search="search" no-data-text="لطفا صبر کنید..." :footer-props="footerProps" class="tbody" :items-per-page="filter" :page.sync="page">
                            <template v-slot:item.text="{ item }">
                                <div class="d-flex align-center">
                                    <v-btn icon @click="getCoin(item)" class="star">
                                        <v-checkbox off-icon="mdi-star-outline" on-icon="mdi-star" color="#2461E8" />
                                    </v-btn>
                                    <img :src="item.icon" alt="" class="icon" width="25" height="25">
                                    <div class="text mr-2">{{ item.text }}</div>
                                </div>
                            </template>
                            <template v-slot:item.value="{ item }">
                                <div class="text">{{ item.value }}</div>
                            </template>
                            <template v-slot:item.buy="{ item }">
                                <div class="text">IRT {{ item.buy }}</div>
                            </template>
                            <template v-slot:item.usd="{ item }">
                                <div class="text">{{ new Intl.NumberFormat().format(item.usd) }}</div>
                            </template>
                            <template v-slot:item.change="{ item }">
                                    <div class="text" dir="ltr" :class="item.change > 0 ? 'secondary--text' : 'error--text'">% {{ item.change }}</div>
                            </template>
                            <template v-slot:item.graph="{ item }">
                                    <img :src="item.graph" alt="" class="graph" width="150" height="23">
                            </template>
                            <template v-slot:item.action="{ item }">
                                    <v-menu offset-y auto>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-btn icon v-on="on" v-bind="attrs" light>
                                                <v-icon>mdi-dots-horizontal</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense color="white">
                                            <v-list-item :href="item.buyUrl">
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        خرید
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-list-item :href="item.sellUrl">
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        فروش
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                            </template>
                            <template v-slot:footer>
                                <div class="sorter mt-4">
                                    <v-pagination :length="filterDataTable.length" class="pagination" v-model="page" />
                                    <!-- <v-btn color="primary" depressed min-width="10" small class="rounded-lg">
                                        <v-icon>mdi-chevron-right</v-icon>
                                    </v-btn>
                                    <v-btn color="primary" depressed min-width="10" small class="rounded-lg">
                                        <v-icon>mdi-chevron-left</v-icon>
                                    </v-btn> -->
                                    <div class="fitler-list">
                                        <div class="text">
                                            تعداد آیتم ها در صفحه
                                        </div>
                                        <!-- <select class="input-select" v-model="filter">
                                            <option v-for="(item, i) in filterList" :key="i" :value="item.value">{{ item.text }}</option>
                                        </select> -->
                                    </div>
                                </div>
                            </template>
                        </v-data-table>
                        <!-- <div class="thead">
                            <div class="tr">
                                <div class="th" v-for="(th, i) in header" :key="i">
                                    <div class="text">{{ th }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="tbody">
                            <div class="tr" v-for="(coin, i) in filterDataTable.slice(0, filter)" :key="i">
                                <div class="td justify-start">
                                    <v-btn icon @click="getCoin(coin, i)" class="star">
                                        <v-checkbox off-icon="mdi-star-outline" on-icon="mdi-star" color="#2461E8" input-value="i" />
                                        <v-icon :color=" active == i ? '#2461E8' : '#CED2D8'">mdi-star</v-icon>
                                    </v-btn>
                                    <img :src="coin.icon" alt="" class="icon">
                                    <div class="text">{{ coin.text }}</div>
                                </div>
                                <div class="td">
                                    <div class="text">{{ coin.value }}</div>
                                </div>
                                <div class="td">
                                    <div class="text">{{ coin.buy }}</div>
                                </div>
                                <div class="td">
                                    <div class="text">{{ new Intl.NumberFormat().format(coin.usd) }}</div>
                                </div>
                                <div class="td">
                                    <div class="text" dir="ltr" :class="coin.change > 0 ? 'secondary--text' : 'error--text'">{{ coin.change }}</div>
                                </div>
                                <div class="td">
                                    <img :src="coin.graph" alt="" class="graph">
                                </div>
                                <div class="td justify-end">
                                    <v-menu offset-y auto>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-btn icon v-on="on" v-bind="attrs" light>
                                                <v-icon>mdi-dots-horizontal</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense color="white">
                                            <v-list-item :href="coin.buyUrl">
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        خرید
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-list-item :href="coin.sellUrl">
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        فروش
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </v-tab-item>
            </v-tabs-items>
        </div>
    </section>
</template>

<script>
import CoinSlider from '@/components/home/CoinSliders.vue'
    export default {
        components:{
            CoinSlider
        },
        data(){
            return{
                footerProps:{
                    'items-per-page-text': '',
                    showFistLastPage: false,
                    'items-per-page-options':[
                        5,10,20,50,100
                    ]
                },
                items: [
                    { text: 'خانه', disabled: false, to: '/' },
                    { text: 'خرید و فروش', disabled: false, to: '/buy-and-sell' },
                ],
                currencies:[],
                favList:[],
                tab:[0,1],
                page:1,
                header:[
                    { text:'نام ارز دیجیتال', value:'text', align:'', sortable: false },
                    { text:'اختصار', value:'value', align:'center', sortable: false },
                    { text:'قیمت به تومان', value:'buy', align:'', sortable: false },
                    { text:'قیمت تتر', value:'usd', align:'center', sortable: false },
                    { text:'تغییرات', value:'change', align:'center', sortable: false },
                    { text:'نمودار', value:'graph', align:'', sortable: false },
                    { text:'', value:'action', align:'', sortable: false }
                ],
                // header:['نام ارز دیجیتال', 'اختصار', 'قیمت به تومان', 'قیمت تتر', 'تغییرات', 'نمودار', ''],
                search:'',
                filterList:[ 
                    { text:'10', value: 10 },
                    { text:'20', value: 20 },
                    { text:'50', value: 50 },
                    { text:'100', value: 100 }
                 ],
                filter:null,
                active:'',
                localCoin: []
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
            getCoin(item, i){
                const unique = this.favList
                if (!unique.includes(item)) {
                    this.favList.push(item)
                    localStorage.setItem('coin', JSON.stringify(unique))
                    this.favList = JSON.parse(localStorage.getItem('coin'))
                }
            },
            removeCoin(item){
                localStorage.removeItem(item)
            }
        },
        mounted(){
            this.getCurrencies()
            this.tab = 1
            this.filter = 10
        },
        computed:{
            filterDataTable(){
                if (this.search) {
                    return this.currencies.filter(coin=>{
                        return this.search.toLowerCase().split(" ").every(v=>coin.text.toLowerCase().includes(v))
                    })
                }
                else{
                    return this.currencies
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>