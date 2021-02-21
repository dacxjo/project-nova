import { shallowMount } from '@vue/test-utils';
import AddCustomerForm from '@/components/ui/customers/AddCustomerForm.vue';

describe('AddCustomerForm.vue', () => {
  it('Should emmit customer-added event on form submit', () => {
    const wrapper = shallowMount(AddCustomerForm);
    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted('customer-added')).toHaveLength(1);
  });
});
