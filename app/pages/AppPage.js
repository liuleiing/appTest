import React,{Component} from 'react';
import ReactDom from 'react-dom';
//导入路由
import {Router,hashHistory,Route,IndexRoute} from 'react-router';
import {Container,TabBar} from 'amazeui-touch';

//导入页面组件
import LoginPage from './LoginPage';
import IndexPage from './IndexPage';
import RegisterPage from './RegisterPage';
import ServicePage from './ServicePage';
import SelfPage from './SelfPage';

class AppPage extends Component {
  isTrue(text) {
    return this.context.router.isActive(text, true);
  }
  isShow() {
    console.log();
    if (this.isTrue('/login') || this.isTrue('/') || this.isTrue('/register')) {
      return 'none';
    }else {
      return 'flex';
    }

  }
  render() {
    return (
      <Container fill={true} direction='column'>
        <Container direction='column'>
          {this.props.children}
        </Container>
        <TabBar style={{display:this.isShow()}}>
          <TabBar.Item selected={this.isTrue('/home')} icon='home' title='购物' href='#/home'/>
          <TabBar.Item icon='gear' title='服务' selected={this.isTrue('/service')} href='#/service'/>
          <TabBar.Item icon='star' title='社交' />
          <TabBar.Item icon='person' title='我的' selected={this.isTrue('/self')} href='#/self'/>
        </TabBar>
      </Container>
    );
  }
}
//配置路由
let routes=(
  <Router history={hashHistory}>
    <Route path='/' component={AppPage}>
      //默认添加的组件
      <IndexRoute component={LoginPage}/>
      <Route path='home' component={IndexPage}/>
      <Route path='service' component={ServicePage}/>
      <Route path='self' component={SelfPage}/>
      <Route path='login' component={LoginPage}/>
      <Route path='register' component={RegisterPage}/>
    </Route>
  </Router>
);

AppPage.contextTypes={
  router:React.PropTypes.object.isRequired
};

ReactDom.render(routes,document.querySelector('#root'));
