import { mount, createLocalVue } from '@vue/test-utils'
import VAutocomplete from '@/components/common/VAutocomplete'
import vClickOutside from 'v-click-outside'

const localVue = createLocalVue()
localVue.use(vClickOutside)

describe('VAutocomplete', () => {
  it('Render correctly', () => {
    const wrapper = mount(VAutocomplete, { localVue })

    expect(wrapper.is(VAutocomplete)).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})