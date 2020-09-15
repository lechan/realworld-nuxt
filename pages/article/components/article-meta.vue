<template>
  <div class="article-meta">
    <nuxt-link :to="{
      name: 'profile',
      params: {
        username: article.author.username
      }
    }">
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link
        :to="{
          name: 'profile',
          params: {
            username: article.author.username
          }
        }"
        class="author"
      >
        {{ article.author.username }}
      </nuxt-link>
      <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
    </div>
    <button
      class="btn btn-sm btn-outline-secondary"
      :class="{
        active: article.author.following
      }"
      :disabled="followDisabled"
      @click="onFollow()"
    >
      <i class="ion-plus-round"></i>
      &nbsp;
      {{ article.author.following ? 'Unfollow' : 'Follow' }}  {{ article.author.username }}
    </button>
    &nbsp;&nbsp;
    <button
      class="btn btn-sm btn-outline-primary"
      :class="{
        active: article.favorited
      }"
      :disabled="favoriteDisabled"
      @click="onFavorite()"
    >
      <i class="ion-heart"></i>
      &nbsp;
      {{ article.favorited ? 'Unfavorite Article' : 'Favorite Article' }} <span class="counter">({{ article.favoritesCount }})</span>
    </button>
  </div>
</template>

<script>
import { addFavorite, deleteFavorite } from '@/api/article'
import { follow, unfollow } from '@/api/profiles'

export default {
  name: 'ArticleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      favoriteDisabled: false,
      followDisabled: false
    }
  },
  methods: {
    async onFavorite () {
      const article = this.article
      this.favoriteDisabled = true
      if (!article.favorited) {
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      } else {
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      }
      this.favoriteDisabled = false
    },
    async onFollow () {
      const { author } = this.article
      this.followDisabled = true
      if (!author.following) {
        await follow(author.username)
        author.following = true
      } else {
        await unfollow(author.username)
        author.following = false
      }
      this.followDisabled = false
    }
  }
}
</script>

<style>

</style>