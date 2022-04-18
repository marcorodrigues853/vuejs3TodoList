<template>
  <div>
    <div v-if="article">
      <h3>{{ article.title }}</h3>
      <RouterLink :to="{ name: 'articles.comments', params: { id } }"
        >See Comments</RouterLink
      >|
      <RouterLink :to="{ name: 'articles.author' }">About Author</RouterLink>
    </div>
  </div>
</template>
<script>
import { articles } from '../data'

export default {
  props: { id: Number },
  data() {
    return {
      article: null,
    }
  },
  created() {
    if (undefined === articles[this.id]) {
      return this.$router.push({
        name: 'not-found',
        params: {
          url: 'wrong',
        },
      })
    }
    this.article = articles[this.id]
  },
}
</script>
