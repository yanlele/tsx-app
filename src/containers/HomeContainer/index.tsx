import * as React from 'react';
import {Button, Select} from 'antd';
import Counter from "./Counter";
import {ContextProvider} from './reducer';

const {Option} = Select;

class HomeContainer extends React.Component<{}, {}> {

  render() {
    const arr: any[] = [];

    return (
        <div>
          <p>首页内容 ~ ^.^ ~</p>
          <div ref='radarChart'/>
          <Button onClick={() => console.log('123')}>click</Button>
          <Button>你好</Button>
          <Select style={{width: '300px'}}>
            {arr.map((item: any) => (<Option key={item.value} value={item.id}>{item.value}</Option>))}
          </Select>

          <hr/>
          <ContextProvider>
            <Counter />
          </ContextProvider>
        </div>
    );
  }
}

export default HomeContainer;
