<template>
<div class="editor-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-10 offset-md-1 col-xs-12">
        <form>
          <fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control form-control-lg" placeholder="Article Title" v-model.trim="article.title" required>
            </fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="What's this article about?" v-model.trim="article.description" required>
            </fieldset>
            <fieldset class="form-group">
                <textarea class="form-control" rows="8" placeholder="Write your article (in markdown)" v-model.trim="article.body" required></textarea>
            </fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="Enter tags" v-model.trim="tagInput" @keyup.enter="handleAddTag">
                <div class="tag-list">
                  <span class="tag-default tag-pill" v-for="item in article.tagList" :key="item">
                    <i class="ion-close-round" @click="deleteTag(item)"></i>
                    {{ item }}
                  </span>
                </div>
            </fieldset>
            <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click="onSubmit">
                Publish Article
            </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { addArticle } from '@/api/article'

export default {
  name: 'EditorIndex',
  // 路由匹配组件渲染之前会先执行中间件
  middleware: 'authenticated',
  data() {
    return {
      tagInput: '',
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    }
  },
  methods: {
    handleAddTag () {
      if (this.tagInput !== '' && this.article.tagList.findIndex(item => item === this.tagInput) === -1) {
        this.article.tagList.push(this.tagInput)
        this.tagInput = ''
      }
    },
    deleteTag (item) {
      const index = this.article.tagList.findIndex(item => item === this.tagInput)
      this.article.tagList.splice(index, 1)
    },
    async onSubmit () {
      const { article } = this
      const { data } = await addArticle(article)
      if (data && data.article) {
        this.$router.push({
          name: 'article',
          params: {
            slug: data.article.slug
          }
        })
      }
    }
  }
}
</script>

<style>

</style>