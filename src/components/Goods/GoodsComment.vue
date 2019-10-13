<template>
    <div class="goodscomment">
        <cmtbox :id="this.$route.params.id"></cmtbox>
    </div>
</template>

<script>
import cmtbox from '../subcompopents/comment.vue'
export default{
    components:{
        cmtbox
    }
}

</script>

<style lang="scss" scoped>
    .goodscomment{
        margin: 10px 10px;
    }
</style>