import { mount, createLocalVue } from '@vue/test-utils'
import VAutocompleteDropdown from '@/components/common/VAutocompleteDropdown'

const localVue = createLocalVue()

describe('VAutocompleteDropdown', () => {
  it('Render correctly', () => {
    const wrapper = mount(VAutocompleteDropdown, { localVue })

    expect(wrapper.is(VAutocompleteDropdown)).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})