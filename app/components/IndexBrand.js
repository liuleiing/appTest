import React,{Component,PropTypes} from 'react';
import '../assets/styles/indexBrand.less';
import '../assets/fonts/style.css';

class IndexBrand extends Component {
  render() {
    return (
      <div className='index-brand-container'>
        <p style={{backgroundColor: this.props.bgColor}}>
            <span className={this.props.brandIcon}/>
        </p>
        <span>{this.props.brandTitle}</span>
      </div>
    );
  }
}
IndexBrand.propsTypes={
  bgColor:PropTypes.string,
  brandTitle:PropTypes.string,
  brandIcon:PropTypes.string
};
IndexBrand.defaultProps={
  brandTitle:'',
  bgColor:'',
  brandIcon:''
};
export default IndexBrand;
