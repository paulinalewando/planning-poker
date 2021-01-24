import { mount } from '@vue/test-utils'
import AppLogo from '@/components/AppLogo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AppLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
