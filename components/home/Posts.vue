<template>
    <section class="post-section">
        <v-col cols="12" class="card" v-for="(post, i) in showMore == true ? posts : posts.slice(0,2)" :key="i">
            <v-col cols="12" md="6">
                <a class="column" :href="post.link">
                    <img :src="post.featured_image_url" alt="" class="post-img">
                </a>
            </v-col>
            <v-col cols="12" md="6">
                <div class="column">
                    <a class="head" :href="post.link">{{ post.title.rendered }}</a>
                    <p v-html="post.excerpt.rendered" />
                    <a :href="post.link" class="link">
                        ادامه
                        <v-icon color="primary">mdi-arrow-left-thin</v-icon>
                    </a>
                </div>
            </v-col>
        </v-col>
        <v-col cols="12" class="more-section">
            <div class="show-more" @click="showMore =! showMore">
                <div class="btn">
                    {{ showMore == true ? 'بستن' : 'مشاهده بیشتر' }}
                    <v-icon color="primary">{{ showMore == true ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </div>
            </div>
        </v-col>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                posts:[],
                showMore:false
            }
        },
        mounted(){
            this.getPosts()
        },
        methods:{
            getPosts(){
                this.$store.dispatch('getPosts')
                .then(resp=>{
                    this.posts = resp
                })
                .catch(err=>{
                    console.log('something went wrong')
                })
            }
        }
    }
</script>