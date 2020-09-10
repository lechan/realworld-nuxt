export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home page
  const { user } = store.state.user
  if (user) {
    return redirect('/')
  }
}