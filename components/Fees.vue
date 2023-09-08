<template>
    <section class="support-section fees">
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
            <p>کمیسیون های حساب</p>
            <div class="data-table">
                <div class="thead">
                    <div class="tr">
                        <div class="th">
                            <div class="text">نوع</div>
                        </div>
                        <div class="th">
                            <div class="text">کمسیون سایت</div>
                        </div>
                    </div>
                </div>
                <div class="tbody">
                    <div class="tr">
                        <div class="td">
                            <div class="text">
                            افتتاح حساب
                        </div>
                        </div>
                        <div class="td">
                            <div class="text">رایگان</div>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="td">
                            <div class="text">
                            نگهداری حساب
                        </div>
                        </div>
                        <div class="td">
                            <div class="text">رایگان</div>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="td">
                            <div class="text">
                            ۲۴/۷ پشتیبانی	
                        </div>
                        </div>
                        <div class="td">
                            <div class="text">رایگان</div>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="td">
                            <div class="text">
                            بسته شدن حساب
                        </div>
                        </div>
                        <div class="td">
                            <div class="text">رایگان</div>
                        </div>
                    </div>
                </div>
            </div>
            <p>کمیسیون ترید</p>
            <div class="data-table">
                <div class="thead">
                    <div class="tr">
                        <div class="th">
                            <div class="text">سطح</div>
                        </div>
                        <div class="th">
                            <div class="text">سفارش گذار</div>
                        </div>
                        <div class="th">
                            <div class="text">دریافت کننده</div>
                        </div>
                    </div>
                </div>
                <div class="tbody">
                    <div class="tr">
                        <div class="td">
                            <div class="text">
                            1	
                        </div>
                        </div>
                        <div class="td">
                            <div class="text">0.2 %</div>
                        </div>
                        <div class="td">
                            <div class="text">0.4 %</div>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="td">
                            <div class="text">
                            4
                        </div>
                        </div>
                        <div class="td">
                            <div class="text">0.2 %</div>
                        </div>
                        <div class="td">
                            <div class="text">0.4 %</div>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="td">
                            <div class="text">
                            3	
                        </div>
                        </div>
                        <div class="td">
                            <div class="text">0.2 %</div>
                        </div>
                        <div class="td">
                            <div class="text">0.4 %</div>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="td">
                            <div class="text">
                            2
                        </div>
                        </div>
                        <div class="td">
                            <div class="text">0.2 %</div>
                        </div>
                        <div class="td">
                            <div class="text">0.4 %</div>
                        </div>
                    </div>
                </div>
            </div>
            <p>کمیسیون برداشت</p>
            <span>توجه داشته باشید که هزینه های برداشت ممکن است نسبت به نوع و شرایط شبکه انتخابی توسط شما متغیر باشد که در بخش برداشت قابل مشاهده است</span>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                items: [
                    { text: 'خانه', disabled: false, to: 'index' },
                    { text: 'جدول کمیسیون', disabled: false, to: 'fees' },
                ],
            }
        }
    }
</script>