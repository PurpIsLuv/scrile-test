// plugins/bl-components.js
import Vue from 'vue'
import VAutocomplete from '@/components/common/VAutocomplete'
import VAutocompleteDropdown from '@/components/common/VAutocompleteDropdown'
import VAutocompleteDropdownItem from '@/components/common/VAutocompleteDropdownItem'
import VAutocompleteSpinner from '@/components/common/VAutocompleteSpinner'

const components = {
  VAutocomplete,
  VAutocompleteSpinner,
  VAutocompleteDropdown,
  VAutocompleteDropdownItem
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
