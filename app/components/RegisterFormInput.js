/**
 * Created by 刘磊 on 2017/3/5.
 */
import React,{Component} from 'react';
import '../assets/styles/registerFormInput.less';

class RegisterFormInput extends Component {
  render() {
    return (<label className='register-input-group'>
      <span>{this.props.children}</span><input type={this.props.type} placeholder={this.props.placeholder}/>
    </label>);
  }
}
//默认属性
RegisterFormInput.defaultProps={type:'text'};
export default RegisterFormInput;
