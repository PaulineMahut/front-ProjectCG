<template>
    <div>
        <ListArticle />
    </div>
</template>

<script setup>
import ListArticle from "../components/ListArticle.vue";
import { onMounted } from "vue";
import { useArticleStore } from "@/stores/articles";


const articlesStore = useArticleStore();


</script>

<style lang="scss" scoped>

</style>