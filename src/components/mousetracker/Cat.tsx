import { VNode, CreateElement } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Cat extends Vue {
  /** props: マウスカーソルの位置情報 */
  @Prop()
  private mouse!: { x: number; y: number };

  /** render関数: JSXを返す */
  private render(h: CreateElement): VNode {
    return (
      <div style={{ position: 'absolute', top: `${this.mouse.y}px`, left: `${this.mouse.x}px` }}>
        x座標: {this.mouse.x} / y座標: {this.mouse.y}
      </div>
    );
  }
}
