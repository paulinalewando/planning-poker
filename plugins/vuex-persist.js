import VuexPersistence from 'vuex-persist'

const notToSave = []

export default ({ store }) => {
  new VuexPersistence({
    storage: window.localStorage,
    reducer: state => {
      return Object.fromEntries(
        Object.entries(state).filter(key => !notToSave.includes(key[0]))
      )
    }
  }).plugin(store)
}
