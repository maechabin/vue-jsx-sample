import { VNode, CreateElement } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

import Mouse from './Mouse';
import Cat from './Cat';

function withSample(WrappedComponent: any) {
  @Component
  class MouseTracker extends Vue {
    public render(h: CreateElement): VNode {
      return <Mouse props={(mouse: { x: number; y: number }) => <WrappedComponent mouse={mouse} />} />;
    }
  }
  return MouseTracker;
}

const HelloWorld = withSample(Cat);
export default HelloWorld;
