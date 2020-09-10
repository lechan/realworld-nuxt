/**
 * 验证是否登录的中间件
 */
export default function ({ store, redirect }) {
  // If the user is not authenticated
  const { user } = store.state.user
  if (!user) {
    return redirect('/login')
  }
}
