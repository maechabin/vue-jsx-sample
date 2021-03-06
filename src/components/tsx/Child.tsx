import { VNode, CreateElement } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Child extends Vue {
  @Prop()
  public props!: (bar: string) => VNode;

  public render(h: CreateElement): VNode {
    const { props } = this;

    return (
      <div>
        <h2>Child</h2>
        {props('Vue')}
      </div>
    );
  }
}
