/**
 * Created by 刘磊 on 2017/3/9.
 */
import React,{Component} from 'react';
import {Container} from 'amazeui-touch';

import TopTitle from '../components/TopTitle';


class ServicePage extends Component {
  render() {
    return (
      <Container fill={true}>
        <TopTitle titleText='个人中心'/>
        <Container scrollable={true}/>
      </Container>
    );
  }

}


export default ServicePage;
