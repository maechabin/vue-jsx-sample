import { VNode, CreateElement } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Mouse extends Vue {
  @Prop()
  private rendering!: (mouse: { x: number; y: number }) => VNode;

  private data = { x: 0, y: 0 };

  private handleMouseMove(event: MouseEvent) {
    this.data = {
      ...this.data,
      x: event.x,
      y: event.y,
    };
  }

  private render(h: CreateElement): VNode {
    const { rendering } = this;
    return (
      <div style={{ height: '100%' }} onMousemove={this.handleMouseMove}>
        {rendering(this.data)}
      </div>
    );
  }
}
