import { VNode, CreateElement, VueConstructor } from 'vue';
import { Component, Vue } from 'vue-property-decorator';

import Mouse from './Mouse';
import Cat from './Cat';

/** optionsにrenderingの型を追加 */
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    rendering?: (mouse: { x: number; y: number }) => VNode;
  }
}

/**
 * Higher-Orederコンポーネント: コンポーネントクラスを返す
 * コンポーネントを引数を通して受け取る
 */
function withSample(WrappedComponent: any): VueConstructor<Vue> {
  @Component
  class MouseTracker extends Vue {
    /** render関数: JSXを返す */
    private render(h: CreateElement): VNode {
      /**
       * Mouseコンポーネントのrendering属性にRender Props関数を指定
       * Render Props関数はwithSample関数の引数に指定されたコンポーネントを返す
       */
      return (
        <div style={{ height: '100%', width: '100%', margin: 0 }}>
          <Mouse rendering={(mouse: { x: number; y: number }) => <WrappedComponent mouse={mouse} />} />
        </div>
      );
    }
  }
  /** withSample関数の戻り値としてMouseTrackerコンポーネントを返す */
  return MouseTracker;
}

/** withSample関数にCatコンポーネントを渡してHelloWorldコンポーネント生成 */
const HelloWorld = withSample(Cat);
export default HelloWorld;
