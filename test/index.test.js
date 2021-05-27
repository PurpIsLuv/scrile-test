import { mount, createLocalVue } from '@vue/test-utils'
import index from '@/pages/index.vue'
import VAutocomplete from '@/components/common/VAutocomplete' 
import vClickOutside from 'v-click-outside'

const localVue = createLocalVue()
localVue.use(vClickOutside)
localVue.component('VAutocomplete', VAutocomplete)

describe('index', () => {
  it('Render correctly', () => {
    const wrapper = mount(index, { localVue })

    expect(wrapper.is(index)).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})