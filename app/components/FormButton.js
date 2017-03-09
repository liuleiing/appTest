/**
 * Created by 刘磊 on 2017/3/6.
 */
import React,{Component,PropTypes} from 'react';
import '../assets/styles/formButton.less';
class FormButton extends Component {
  render() {
    return <button className='form-button' onClick={this.props.onClick}>{this.props.children}</button>;
  }
}
FormButton.propTypes={
  onClick:PropTypes.func
};
export default FormButton;
