/**
 * Created by 刘磊 on 2017/3/9.
 */
import React,{Component} from 'react';
import {Col} from 'amazeui-touch';
import '../assets/styles/selfCol.less';
class SelfCol extends Component {
  render() {
    return (
      <Col className='selfCol'>
        <img src={this.props.serverSrc}/>
        <span>{this.props.serverTitle}</span>
      </Col>
    );
  }
}
SelfCol.propTypes={
  serverSrc:React.PropTypes.string,
  serverTitle:React.PropTypes.string
};
export default SelfCol;
