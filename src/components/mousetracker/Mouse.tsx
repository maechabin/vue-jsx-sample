import { VNode, CreateElement } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Mouse extends Vue {
  @Prop()
  public props!: (mouse: { x: number; y: number }) => VNode;

  public data = {
    x: 0,
    y: 0,
  };

  public handleMouseMove(event: any) {
    this.data = Object.assign({}, this.data, {
      x: event.x,
      y: event.y,
    });
  }

  public render(h: CreateElement): VNode {
    const { props } = this;
    return (
      <div style={{ height: '300px', border: '1px solid #333' }} onMousemove={this.handleMouseMove}>
        {props(this.data)}
      </div>
    );
  }
}
