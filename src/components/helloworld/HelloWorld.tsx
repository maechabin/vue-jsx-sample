import { VNode, CreateElement } from 'vue';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  public world: string = 'world';

  public render(h: CreateElement): VNode {
    const { world } = this;
    const style = {
      fontSize: '64px',
      color: '#3ab981',
    };
    return <h1 style={style}>{world}</h1>;
  }
}
