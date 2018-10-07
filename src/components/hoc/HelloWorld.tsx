import { VNode, CreateElement } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

import Child from './Child';
import GrandChild from './GrandChild';

function withSample(WrappedComponent: any) {
  @Component
  class Hello extends Vue {
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
          <Child props={(foo: string): VNode => <WrappedComponent bar={foo} />} />
        </div>
      );
    }
  }
  return Hello;
}

const HelloWorld = withSample(GrandChild);
export default HelloWorld;
