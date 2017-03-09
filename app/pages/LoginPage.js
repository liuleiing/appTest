//导入
import React,{Component} from 'react';
import '../assets/styles/loginPage.less';
import LoginFormInput from '../components/LoginFormInput';
import FormButton from '../components/FormButton';
import {Link} from 'react-router';
import {Notification} from 'amazeui-touch';
//创建
class LoginPage extends Component {
  constructor() {
    super();
    this.state={visible:false};
  }
  loginHandle() {
    //this指的LoginPage
    let username=this.refs.username.getValue();
    let password=this.refs.password.getValue();
    if (username ==='18808239134' && password==='123456') {
      this.context.router.push('/home');
    }else {
      this.setState({
        visible:true
      });
    }

  }
  checkHandle() {
    this.setState({
      visible:false
    });
  }
   render() {
     //页面容器
     return (
       <div className='login-page-container'>
         {/*通知弹框部分*/}
         <Notification visible={this.state.visible} animated={true} amStyle='alert' onDismiss={this.checkHandle.bind(this)}>
           账号或密码错误，请重输！！！
         </Notification>
         {/*标题和logo部分*/}
         <section className='login-title'>
           <img className='title-logo' src='../assets/images/logo.png'/>
            <p className='title-text'>知天下</p>
         </section>
         {/*页面表单部分*/}
         <section className='login-form'>
            <LoginFormInput first='icomoon icon-mobile' last='icomoon icon-cancel-circle' ref='username'/>
            <LoginFormInput type='password' first='icomoon icon-key' last='icomoon icon-eye' ref='password'/>{/*ref属性不能往下传，表示非受控的表单*/}
            <label><input type='checkbox'/><span>记住密码</span></label>
           <FormButton onClick={()=>this.loginHandle()}>登录</FormButton>
           <p><Link to='/register'>立即注册</Link><Link to=''>忘记密码？</Link></p>
         </section>
     </div>
       );

   }
}
//定义router
LoginPage.contextTypes={
  router:React.PropTypes.object.isRequired
};

//导出
export default LoginPage;


/**
 * ()=>this.loginHandler()
 *
 * function() {
 *  return this.loginHandler();  箭头函数作用域中，this是指向当前外部this的作用域
 * }
 * */

