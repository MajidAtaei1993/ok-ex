<template>
    <section class="social-medias">
        <slick-carousel v-bind="settings" class="my-3 slick-carousel" ref="carousel">
            <v-col v-for="(media, i) in socialMedias" :key="i" cols="auto">
                <v-card class="card" :href="media.href">
                    <img :src="media.img" alt="" class="icon">
                </v-card>
            </v-col>
        </slick-carousel>
        <div class="slider">
            <v-btn fab small depressed class="slider-btn" @click="$refs.carousel.prev()">
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
            <v-btn fab depressed small class="slider-btn" @click="$refs.carousel.next()">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                socialMedias:[
                    { img:'/assets/icons/home/cel.webp', href:'https://ok-ex.io/otc/processing?coin=cel' },
                    { img:'/assets/icons/home/optimism.webp', href:'https://ok-ex.io/otc/processing?coin=OP' },
                    { img:'/assets/icons/home/telapp.webp', href:'https://t.me/okexir' },
                    { img:'/assets/icons/home/instaapp.webp', href:'https://instagram.com/okex.ir' },
                ],
                settings:
                {
                    // "dots": true,
                    "arrows": false,
                    "infinite": true,
                    "speed": 500,
                    "slidesToShow": 4,
                    "slidesToScroll": 1,
                    "initialSlide": 0,
                    "autoplay": true,
                    "centerPadding": "20px",
                    "responsive": [
                        {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                            "infinite": true,
                            "dots": true
                        }
                        },
                        {
                        "breakpoint": 600,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "initialSlide": 2
                        }
                        },
                        {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>