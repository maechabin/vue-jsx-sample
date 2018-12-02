import { VNode, CreateElement } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Mouse extends Vue {
  @Prop()
  public rendering!: (mouse: { x: number; y: number }) => VNode;

  public data = {
    x: 0,
    y: 0,
  };

  public handleMouseMove(event: MouseEvent) {
    this.data = {
      ...this.data,
      x: event.x,
      y: event.y,
    };
  }

  public render(h: CreateElement): VNode {
    const { rendering } = this;
    return (
      <div style={{ height: '300px', border: '2px solid #333' }} onMousemove={this.handleMouseMove}>
        {rendering(this.data)}
      </div>
    );
  }
}
