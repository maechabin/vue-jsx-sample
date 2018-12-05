import { VNode, CreateElement } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Mouse extends Vue {
  /** props: コンポーネントを返す関数をPropsを通して取得 */
  @Prop()
  private rendering!: (mouse: { x: number; y: number }) => VNode;

  /** state: マウスカーソルの位置情報 */
  private data = { x: 0, y: 0 };

  /** method: コンポーネントで使用するメソッド */
  private handleMouseMove(event: MouseEvent) {
    this.data = {
      ...this.data,
      x: event.x,
      y: event.y,
    };
  }

  /**
   * render関数: JSXを返す
   * propsを通して受け取ったrendring関数に（render props）を呼び出す。
   * rendering関数はコンポーネントを返すので、
   * 渡されたCatコンポーネントのレンダリング内容が展開される。
   */
  private render(h: CreateElement): VNode {
    const { rendering } = this;
    return (
      <div style={{ height: '100%' }} onMousemove={this.handleMouseMove}>
        {rendering(this.data)}
      </div>
    );
  }
}
