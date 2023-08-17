import { shallowMount } from '@vue/test-utils'
import HeaderComponent from '../../src/components/header/header-component.vue'

describe('Header.vue', () => {
  it('renders props.msg when passed', () => {
    const headerValue = 'new message'
    const wrapper = shallowMount(HeaderComponent, {
      propsData: { headerValue }
    })
    expect(wrapper.text()).toMatch(headerValue)
  })
})