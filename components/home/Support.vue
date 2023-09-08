<template>
    <section class="support-section">
        <v-col cols="12" lg="3" sm="6" v-for="(item, i) in supports" :key="i">
            <v-card light flat class="card" v-if="!item.route && !item.href">
                <img :src="item.icon" alt="" class="icon">
                <div class="card-title">{{ item.title }}</div>
                <div class="card-subtitle">{{ item.subtitle }}</div>
            </v-card>
            <v-card :to="{ name: item.route }" light flat class="card" v-if="item.route">
                <img :src="item.icon" alt="" class="icon">
                <div class="card-title">{{ item.title }}</div>
                <div class="card-subtitle">{{ item.subtitle }}</div>
            </v-card>
            <v-card :href="item.href" light flat class="card" v-if="item.href">
                <img :src="item.icon" alt="" class="icon">
                <div class="card-title">{{ item.title }}</div>
                <div class="card-subtitle">{{ item.subtitle }}</div>
            </v-card>
        </v-col>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                supports:[
                    { icon:'/assets/icons/home/customer-support.svg', title:'پشتیبانی 24/7', subtitle: 'مشکلی رخ داده است؟ تیم پشتیبانی ما 24/7 در دسترس است' },
                    { icon:'/assets/icons/home/blog.svg', title:'وبلاگ', subtitle: 'اخبار و به‌روزرسانی‌ها از صرافی پیشرو ارزهای دیجیتال در جهان',
                    href:'https://blog.ok-ex.io/' },
                    { icon:'/assets/icons/home/academy.svg', title:'آکادمی', subtitle: 'با آموزش های حرفه ای اوکی اکسچنج، همیشه پرسود باشید.' },
                    { icon:'/assets/icons/home/faq.svg', title:'سوالات متداول', subtitle: 'هنوز در خرید ارز دیجیتال مردد هستید؟ از طریق سوالات متداول می توانید پاسخ سوالات خود را پیدا کنید.', route:'support-faq' },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>