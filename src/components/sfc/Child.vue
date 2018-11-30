<script lang="tsx">
import { VNode, CreateElement } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Child extends Vue {
  @Prop()
  public foo!: (bar: string) => VNode;

  public render(h: CreateElement): VNode {
    const { foo } = this;
    return (
      <div>
        <h2>Child</h2>
        {foo('Vue')}
      </div>
    );
  }
}
</script>
