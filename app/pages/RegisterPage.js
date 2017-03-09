/**
 * Created by 刘磊 on 2017/3/6.
 */
import React,{Component} from 'react';
import {Icon} from 'amazeui-touch';
import '../assets/styles/registerPage.less';
import RegisterFormInput from '../components/RegisterFormInput';
import FormButton from '../components/FormButton';
class RegisterPage extends Component {
  render() {
    return (
      <div className='register-page-container'>
        <section className='register-title'>
          注册
          <a href='#/login' className='register-toLeft'><Icon name='left'/></a>
        </section>
        <section className='register-form'>
          <RegisterFormInput placeholder='泸州证法委'>片 区</RegisterFormInput>
          <RegisterFormInput placeholder='请输入手机号' type='tel'>手机号</RegisterFormInput>
          <RegisterFormInput placeholder='请输入密码' type='password'>密 码</RegisterFormInput>
          <RegisterFormInput placeholder='请输入确认密码' type='password'>确认密码</RegisterFormInput>
          <div>
            <RegisterFormInput placeholder='请输入验证码'>验证码</RegisterFormInput>
            <button>获取验证码</button>
          </div>
          <p><input type='checkbox'/><span>同意接受智慧社区life使用协议</span></p>
          <FormButton>注册</FormButton>
        </section>
      </div>

    );
  }
}
export default RegisterPage;
