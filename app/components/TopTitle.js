/**
 * Created by 刘磊 on 2017/3/9.
 */
import React,{Component} from 'react';
import '../assets/styles/topTitle.less';

class TopTitle extends Component {
  render() {
    return (
      <h3 className='title-text'>{this.props.titleText}
        <span className={this.props.titleIcon}/>
      </h3>);
  }
}
TopTitle.propTypes={
  titleText:React.PropTypes.string,
  titleIcon:React.PropTypes.string
};
export default TopTitle;
