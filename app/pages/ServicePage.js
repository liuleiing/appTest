/**
 * Created by 刘磊 on 2017/3/9.
 */
import React,{Component} from 'react';
import {Container,Grid} from 'amazeui-touch';

import TopTitle from '../components/TopTitle';
import SelfCol from '../components/SelfCol';
import '../assets/styles/servicePage.less';
const gaServiceDatas=[{
  serverSrc:'../assets/images/ser-icon1.png',
  serverTitle:'政务公告'
}
,{
  serverSrc:'../assets/images/ser-icon2.png',
  serverTitle:'政策宣传'
}
,{
  serverSrc:'../assets/images/ser-icon3.png',
  serverTitle:'居民意见'
}
,{
  serverSrc:'../assets/images/ser-icon4.png',
  serverTitle:'办事指南'
}
,{
  serverSrc:'../assets/images/ser-icon5.png',
  serverTitle:'社区党建'
}
,{
  serverSrc:'../assets/images/ser-icon6.png',
  serverTitle:'就业创业'
}
,{
  serverSrc:'../assets/images/ser-icon7.png',
  serverTitle:'更多服务'
}];

const lifeServiceDatas=[{
  serverSrc:'../assets/images/ser-icon8.png',
  serverTitle:'小区公告'
}
,{
  serverSrc:'../assets/images/ser-icon9.png',
  serverTitle:'缴费管理'
}
,{
  serverSrc:'../assets/images/ser-icon10.png',
  serverTitle:'家政服务'
}
,{
  serverSrc:'../assets/images/ser-icon11.png',
  serverTitle:'物业服务'
}
,{
  serverSrc:'../assets/images/ser-icon12.png',
  serverTitle:'快递服务'
}
,{
  serverSrc:'../assets/images/ser-icon13.png',
  serverTitle:'房屋出租'
}
,{
  serverSrc:'../assets/images/ser-icon14.png',
  serverTitle:'洗衣店'
}
,{
  serverSrc:'../assets/images/ser-icon15.png',
  serverTitle:'便民电话'
}
,{
  serverSrc:'../assets/images/ser-icon16.png',
  serverTitle:'二手物品'
}
,{
  serverSrc:'../assets/images/ser-icon17.png',
  serverTitle:'店铺申请'
}
,{
  serverSrc:'../assets/images/ser-icon7.png',
  serverTitle:'更多服务'
}];

class SelfPage extends Component {
  forDate(dataArr) {
    return dataArr.map(function (v,i) {
      return <SelfCol serverSrc={v.serverSrc} serverTitle={v.serverTitle} key={i}/>;
    });
  }

  render() {
    return (
      <Container fill={true}>
        <TopTitle titleText='服务'/>
        <Container scrollable={true} style={{backgroundColor:'#ffffff'}}>
          <div className='ga-service'>
            <h5>政务服务</h5>
            <Grid avg={4}>
              {this.forDate(gaServiceDatas)}
            </Grid>
          </div><div className='life-service'>
            <h5>生活服务</h5>
            <Grid avg={4}>
              {this.forDate(lifeServiceDatas)}
            </Grid>
          </div>

        </Container>

      </Container>
    );
  }

}


export default SelfPage;
