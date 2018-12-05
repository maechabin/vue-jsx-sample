import { VNode, CreateElement, VueConstructor } from 'vue';
import { Component, Vue } from 'vue-property-decorator';

import Mouse from './Mouse';
import Cat from './Cat';

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    rendering?: (mouse: { x: number; y: number }) => VNode;
  }
}

function withSample(WrappedComponent: any): VueConstructor<Vue> {
  @Component
  class MouseTracker extends Vue {
    private render(h: CreateElement): VNode {
      return (
        <div style={{ height: '100%', width: '100%', margin: 0 }}>
          <Mouse rendering={(mouse: { x: number; y: number }) => <WrappedComponent mouse={mouse} />} />
        </div>
      );
    }
  }
  return MouseTracker;
}

const HelloWorld = withSample(Cat);
export default HelloWorld;
