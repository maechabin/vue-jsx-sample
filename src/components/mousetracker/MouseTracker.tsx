import { VNode, CreateElement } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

import Mouse from './Mouse';
import Cat from './Cat';

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    rendering?: (mouse: { x: number; y: number }) => VNode;
  }
}

function withSample(WrappedComponent: any) {
  @Component
  class MouseTracker extends Vue {
    public render(h: CreateElement): VNode {
      return <Mouse rendering={(mouse: { x: number; y: number }) => <WrappedComponent mouse={mouse} />} />;
    }
  }
  return MouseTracker;
}

const HelloWorld = withSample(Cat);
export default HelloWorld;
