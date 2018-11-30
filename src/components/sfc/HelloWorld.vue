<script lang="tsx">
import { VNode, CreateElement } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Child from './Child.vue';
import GrandChild from './GrandChild.vue';

@Component({
  components: {
    'grand-child': GrandChild,
  },
})
export default class HelloWorld extends Vue {
  public render(h: CreateElement): VNode {
    return (
      <div>
        <h1>Parent</h1>
        <Child foo={(foo: string) => <grand-child bar={foo} />} />
      </div>
    );
  }
}
</script>