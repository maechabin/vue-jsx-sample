import { VNode, CreateElement, FunctionalComponentOptions, RenderContext } from 'vue';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  public world: string = 'World';

  public render(h: CreateElement): VNode {
    const { world } = this;
    const style = {
      fontSize: '64px',
      color: '#3ab981',
    };
    return (
      <h1 style={style}>
        <Child2>Hello</Child2> <Child2>{world}</Child2>
      </h1>
    );
  }
}

// tslint:disable:max-classes-per-file
@Component
class Child extends Vue {
  public render(h: CreateElement): VNode {
    return <span>{this.$slots.default[0]}</span>;
  }
}

// tslint:disable:max-classes-per-file
@Component({
  functional: true,
} as FunctionalComponentOptions)
class Child2 extends Vue {
  public render(h: CreateElement, context: RenderContext): VNode {
    return <span>{context.children[0]}</span>;
  }
}
