<template>
  <div>
    <form class="card comment-form">
      <div class="card-block">
        <textarea class="form-control" placeholder="Write a comment..." rows="3" v-model="commentContent"></textarea>
      </div>
      <div class="card-footer">
        <img :src="user.image" class="comment-author-img" />
        <button
          class="btn btn-sm btn-primary"
          :disabled="addCommentDisabled"
          @click.prevent="handleComment()"
        >
          Post Comment
        </button>
      </div>
    </form>

    <div
      class="card"
      v-for="comment in comments"
      :key="comment.id"
    >
      <div class="card-block">
        <p class="card-text">{{ comment.body }}</p>
      </div>
      <div class="card-footer">
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username
            }
          }"
          class="comment-author"
        >
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username
            }
          }"
          class="comment-author"
        >
          {{ comment.author.username }}
        </nuxt-link>
        <span class="date-posted">{{ comment.createdAt | date('MMM DD, YYYY') }}</span>
        <span class="mod-options">
          <i class="ion-edit"></i>
          <i class="ion-trash-a"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getComments, addComment } from '@/api/article'

export default {
  name: 'ArticleComments',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      comments: [],
      commentContent: '',
      addCommentDisabled: false
    }
  },
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    async handleComment () {
      const { slug } = this.article
      this.addCommentDisabled = true
      await addComment(slug, this.commentContent)
      this.addCommentDisabled = false
      this.commentContent = ''
      this.renderComments()
    },
    async renderComments () {
      const { slug } = this.article
      const { data } = await getComments(slug)
      this.comments = data.comments
    }
  },
  mounted () {
    this.renderComments()
  }
}
</script>

<style>

</style>