/**
 * Created by 刘磊 on 2017/3/7.
 */
import React,{Component} from 'react';
import '../assets/styles/IndexPage.less';
import '../assets/fonts/style.css';
import IndexBrand from '../components/IndexBrand';
import {Slider,Container,Grid,Col,Group,List} from 'amazeui-touch';
import TopTitle from '../components/TopTitle';

//模拟数据
const img80 = <img width='80' src='http://lorempixel.com/160/160/people/' />;
const albums = ['女爵','第一张精选','Silence'];


class IndexPage extends Component {
  constructor() {
    super();
    this.state={
      datasObj:''
    };
  }
  //渲染完毕后使用ajax获取数据
  componentDidMount() {
    //新建js引擎对象
    let xhr=new XMLHttpRequest();
    //指定请求方式以及地址
    xhr.open('GET','/assets/json/datas.json');
    //监听事ajax引擎对象改变事件
    xhr.onreadystatechange=function () {
      if (xhr.readyState===4 && xhr.status===200) {
        let datas=xhr.responseText;
        //将datas变成json对象 并找到对应的数据
        this.setState({
          datasObj:JSON.parse(datas).indexBrands
        });
      }
    }.bind(this);
    xhr.send();
  }
  //猜你喜欢列表
  loveList() {
    let list =albums.map((album, i) => {
      return (
        <List.Item title={album} media={img80} key={i}/>
      );
    });
    return list;
  }
  render() {
    if (this.state.datasObj!='') {
      let dataArr=this.state.datasObj;
      //循环数组
      this.indexBrand=dataArr.map(function (v) {
        return <IndexBrand brandIcon={v.fontType} brandTitle={v.text} bgColor={v.bgColor} key={v.id}/>;
      });
    }
    return (
    <Container fill={true} className='index-page-container'>
      <TopTitle titleText='购物' titleIcon='icomoon icon-search1'/>
      <Container scrollable={true}>
        <Slider controls={false} interval={2000}>
          <Slider.Item>
            <img src='../assets/images/bing-1.jpg'/>
          </Slider.Item>
          <Slider.Item>
            <img src='../assets/images/bing-2.jpg'/>
          </Slider.Item>
          <Slider.Item>
            <img src='../assets/images/bing-3.jpg'/>
          </Slider.Item>
          <Slider.Item>
            <img src='../assets/images/bing-4.jpg'/>
          </Slider.Item>
        </Slider>
        <section className='brand-list'>
          {this.indexBrand}
        </section>
        <Grid avg={3} className='ad-list'>
          <Col><img src='../assets/images/fire_picture1.png'/></Col>
          <Col className='ad-list-item'><img src='../assets/images/fire_picture2.png'/></Col>
          <Col><img src='../assets/images/fire_picture3.png'/></Col>
        </Grid>
        <Group header='猜你喜欢' className='love-list'>
          {this.loveList()}
        </Group>
      </Container>
    </Container>
      ) ;
  }
}
export default IndexPage;

