import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/helloworld/HelloWorld.tsx';

describe('HelloWorld.tsx', () => {
  it('renders props.msg when passed', () => {
    // setup
    const msg = 'world';
    const wrapper = mount(HelloWorld);

    // verify
    expect(wrapper.text()).toMatch(msg);
  });
});
