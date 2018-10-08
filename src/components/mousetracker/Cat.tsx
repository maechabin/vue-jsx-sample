import { VNode, CreateElement } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Cat extends Vue {
  @Prop()
  public mouse!: { x: number; y: number };

  public render(h: CreateElement): VNode {
    return (
      <div>
        x座標: {this.mouse.x} / y座標: {this.mouse.y}
      </div>
    );
  }
}
