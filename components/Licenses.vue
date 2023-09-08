<template>
    <section class="support-section licenses">
        <img src="/assets/images/navigation-bg.svg" alt="" class="main-bg">
        <div class="header-navigation">
            <h3>جدول کمسیون</h3>
            <v-breadcrumbs :items="items">
                <template v-slot:divider>
                    <v-icon light>mdi-chevron-left</v-icon>
                </template>
            </v-breadcrumbs>
        </div>
        <div class="content">
        <v-tabs v-model="tab" slider-color="primary"  light>
            <v-tab>اوکی اکسچنج در رسانه ها</v-tab>
            <v-tab>دانش بنیان</v-tab>
            <v-tab>صندوق بیمه دراریی</v-tab>
        </v-tabs>
        <v-tabs-items  v-model="tab" class="transparent">
            <v-tab-item>
                <div class="head">
                    <div class="text">اوکی اکسچنج در رسانه ها</div>
                </div>
                <p>از زبان ده ها رسانه ای که در مورد اوکی اکسچنج نوشته اند، بشنوید</p>
                <div class="medias">
                    <v-col cols="12" lg="2" md="3" sm="4" v-for="(media, i) in medias" :key="i">
                        <div class="card">
                            <img :src="media.img" alt="">
                        </div>
                    </v-col>
                </div>
            </v-tab-item>
            <v-tab-item>
                <div class="head">
                    <div class="text">پلتفرم دانش بنیان اوکی اکسچنج</div>
                </div>
                <p>یکی از شرکت های دانش بنیان ثبت شده نوع 2 می باشد.این برند در تیر ماه 1400 توانست با کسب عنوان دانش بنیان و بعنوان یکی از برند های ارائه دهنده خدمات مالی و پلتفرم معاملاتی در لیست شرکت های دانش بنیان نوع 2 قرار گیرد</p>
                <div class="medias">
                    <v-col cols="12" lg="2" md="3" sm="4">
                        <div class="pa-3">
                            <v-img src="/assets/images/licenses/danesh-bonyan.87844f0.png" max-height="100%" max-width="100%" alt="" />
                        </div>
                    </v-col>
                </div>
            </v-tab-item>
            <v-tab-item>
                <div class="head">
                    <div class="text">صندوق بیمه دارایی های اوکی اکسچنج</div>
                </div>
                <p>صندوق بیمه دارایی های اوکی اکسچنج، در مهر ماه 1400، توسط مدیر اجرایی اوکی اکسچنج رونمایی شد در تصویر زیر می توانید ساز و کار این صندوق بیمه را مشاهده کنید</p>
                <img src="/assets/images/licenses/infographic.19aa35c.png" class="infographic-img" alt="" />
            </v-tab-item>
        </v-tabs-items>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                items: [
                    { text: 'خانه', disabled: false, to: 'index' },
                    { text: 'مجوز ها', disabled: false, to: 'licenses' },
                ],
                tab:null,
                medias:[
                    { img:'/assets/images/licenses/rah-pardakht.ec5869a.png' },
                    { img:'/assets/images/licenses/arz-digital.b195900.png' },
                    { img:'/assets/images/licenses/gooya-it.72a798c.png' },
                    { img:'/assets/images/licenses/it-iran.76b83a9.png' },
                    { img:'/assets/images/licenses/ilna.9530e0e.png' },
                    { img:'/assets/images/licenses/digiro.c8e13c1.png' },
                    { img:'/assets/images/licenses/borna.9e1b1af.png' },
                    { img:'/assets/images/licenses/tabnak.1e36e22.png' },
                    { img:'/assets/images/licenses/eghtesad-online.ecca336.png' },
                    { img:'/assets/images/licenses/chetor.cca6f74.png' },
                    { img:'/assets/images/licenses/isna.54261de.png' },
                    { img:'/assets/images/licenses/ana.1b6ef90.png' },
                    { img:'/assets/images/licenses/vaqtSobh.307d1c8.webp' },
                    { img:'/assets/images/licenses/itresan.7b32843.png' },
                    { img:'/assets/images/licenses/pars.4b8fb88.png' },
                ]
            }
        }
    }
</script>