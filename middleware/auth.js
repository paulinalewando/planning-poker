export default function ({ store, router }) {
  if (!Object.keys(store.state.user).length) {
    router.push('/login').catch(() => {})
  }
}
