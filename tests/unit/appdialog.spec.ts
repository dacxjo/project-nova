import { mount } from '@vue/test-utils';
import AppDialog from '@/components/ui/AppDialog.vue';

describe('AppDialog.vue, ()', () => {
  it('Should trigger close-dialog event on background clicked', () => {
    const wrapper = mount(AppDialog, {
      props: {
        showDialog: true,
      },
    });
    wrapper.find('#modal-backdrop').trigger('click');
    expect(wrapper.emitted('close-dialog')).toHaveLength(1);
  });
});
