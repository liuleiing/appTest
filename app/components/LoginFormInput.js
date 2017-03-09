/**
 * Created by 刘磊 on 2017/3/5.
 */
import React,{Component} from 'react';
import '../assets/styles/loginFormInput.less';
import '../assets/fonts/style.css';
class LoginFormInput extends Component {

  getValue() {
    //this指的是实例的LoginFormInput
    return this.refs.inputVal.value;
  }
  render() {
    return (<label className='login-input-group'>
      <span className={this.props.first}></span><input type={this.props.type} ref='inputVal'/><span className={this.props.last}></span>
    </label>);
  }
}
//默认属性
LoginFormInput.defaultProps={type:'text'};
export default LoginFormInput;
