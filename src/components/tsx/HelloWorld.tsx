import { VNode, CreateElement } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Child from './Child';
import GrandChild from './GrandChild';

@Component({
  components: {
    'grand-child': GrandChild,
  },
})
export default class HelloWorld extends Vue {
  public render(h: CreateElement): VNode {
    const style = {
      fontSize: '32px',
      color: '#3ab981',
    };
    const handleClick = () => {
      alert('Hello Vue.js');
    };
    return (
      <div>
        <h1 style={style} onClick={handleClick}>
          Parent
        </h1>
        <Child props={(foo: string) => <grand-child bar={foo} />} />
      </div>
    );
  }
}
