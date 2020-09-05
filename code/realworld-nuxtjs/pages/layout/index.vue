<template>
  <div>
    <!-- 顶部导航栏 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link class="nav-link" to="/" exact>Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/editor">
              <i class="ion-compose"></i>&nbsp;New Post
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/settings">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/profile/123">
              <img class="user-pic" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAA+klEQVRoQ+2aMQrCUBBEJ+AVcgHxLl7GM8RLeA8rC49hn9omlUUQQYi1CJoP83VZX+qfYXfe/CFFmnO3nPRHT8PCyWlDODlgQRjCyRwg0smAvqwDYQgnc4BIJwNKaRFpIp3MgeqRbjdHLdqVptuoy2Gr62n/UwtZ2G0/hIm0O1Pv9bjDbr+5w9xhd6a4w08OUFrugFFalJY7U5QWpVX1lwdKi9JKWlola92HXsNuXfLK7LNf+9KaPZEkFi5x68PZ6oSNs1qkWNhiY2ARCAeGYxkNwhYbA4tAODAcy2gQttgYWATCgeFYRoOwxcbAIhAODMcyGoQtNgYWeQCsG1R4rTBm4gAAAABJRU5ErkJggg==" />
              lechan
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- 子路由 -->
    <nuxt-child />

    <!-- 底部 -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex'
}
</script>

<style>

</style>