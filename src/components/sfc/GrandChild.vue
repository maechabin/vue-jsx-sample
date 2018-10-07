<script lang="tsx">
import { VNode, CreateElement } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GrandChild extends Vue {
  @Prop()
  bar!: string;

  render(h: CreateElement): VNode {
    const { bar } = this;
    return (
      <div>
        <h3>GrandChild</h3>
        <p>Hello {bar}</p>
      </div>
    );
  }
}
</script>