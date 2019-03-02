import * as React from 'react'
import {connect} from 'react-redux'

class HomeContainer extends React.Component<any, {}, any> {

    render() {
        return (
            <div>
                <p>首页内容 ~ ^.^ ~</p>
                <div ref='radarChart'/>
                <button onClick={()=>console.log('123')}>click</button>
                <button>你好</button>
            </div>
        )
    }
}

export default connect()(HomeContainer)
