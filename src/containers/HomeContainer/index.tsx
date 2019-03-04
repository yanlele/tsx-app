import * as React from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';

class HomeContainer extends React.Component<{}, {}> {

  render() {
    return (
        <div>
          <p>首页内容 ~ ^.^ ~</p>
          <div ref='radarChart'/>
          <Button onClick={() => console.log('123')}>click</Button>
          <Button>你好</Button>
        </div>
    );
  }
}

export default connect()(HomeContainer);
