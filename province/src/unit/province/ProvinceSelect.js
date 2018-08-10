import React from 'react';
import {
  provinces, cities, counties
}
from './provinceData';
import './province.css';

class ProvinceSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curState: 0,
      provinceValue: '',
      cityValue: '',
      countyValue: '',
      tabsIndex: 0,
      inpVal: '',
      stateStyle: {
        display: "none"
      }
    };

  }

  handleChangeInp() {
    this.setState({
      stateStyle: {
        top: "32px",
        display: "block"
      }
    })
    if (this.state.tabsIndex == 2) {
      this.setState({
        curState: 3
      })
    } else if (this.state.tabsIndex == 1) {
      this.setState({
        curState: 2
      })
    } else {
      this.setState({
        curState: 1
      })
    }
  }

  tabsHandle(index) {
    if (index == 1 && this.state.provinceValue == '') return false;
    if (index == 2 && this.state.cityValue == '') return false;
    this.state.tabsIndex = index;
    this.forceUpdate();
    if (this.state.tabsIndex === 0) {
      this.setState({
        curState: index + 1,
        cityIndex: '',
        cityValue: '',
        countyIndex: '',
        countyValue: ''
      })
    } else if (this.state.tabsIndex === 1) {
      this.setState({
        curState: index + 1,
        countyIndex: '',
        countyValue: ''
      })
    } else if (this.state.tabsIndex === 2) {
      this.setState({
        curState: index + 1,
      })
    }
  }

  handleChangeProvince(index, value) {
    this.state.tabsIndex = 1;
    this.setState({
      curState: 2,
      provinceIndex: index,
      provinceValue: value,
      stateStyle: {
        top: "32px",
        display: "block"
      }
    });
  }

  handleChangeCity(index, value) {
    if (this.props.checkPlace == 'city') {
      this.state.tabsIndex = 1;
      this.state.cityIndex = index;
      this.state.cityValue = value;
      this.setState({
        curState: 2,
        stateStyle: {
          display: "none"
        }
      });
      this.handleComfirm()
    } else {
      this.state.tabsIndex = 2;
      this.setState({
        curState: 3,
        cityIndex: index,
        cityValue: value,
        stateStyle: {
          top: "32px",
          display: "block"
        }
      });
    }
  }

  handleChangeCounty(index, value) {
    this.state.tabsIndex = 2;
    this.state.countyIndex = index;
    this.state.countyValue = value;
    this.setState({
      curState: 0,
      stateStyle: {
        display: "none"
      }
    });
    this.handleComfirm()

  }
  handleClear() {
    this.setState({
      curState: 0,
      provinceValue: '',
      provinceIndex: '',
      cityValue: '',
      cityIndex: '',
      countyValue: '',
      countyIndex: '',
      tabsIndex: 0,
      inpVal: '',
      stateStyle: {
        display: "none"
      }
    })
  }
  handleComfirm() {
    var pro = this.state.provinceValue.replace(/(^\s*)|(\s*$)/g, ''),
      city = this.state.cityValue.replace(/(^\s*)|(\s*$)/g, ''),
      county = this.state.countyValue.replace(/(^\s*)|(\s*$)/g, '');
    if (pro == city) {
      this.state.inpVal = pro;
    } else if (pro == city.substring(0, 2) && county == '') {
      this.state.inpVal = city;
    } else if (pro == city.substring(0, 2) && county != '') {
      this.state.inpVal = city + ' ' + county;
    } else if (county == '' && city != '') {
      this.state.inpVal = pro + ' ' + city;
    } else if (county != '') {
      this.state.inpVal = pro + ' ' + city + ' ' + county;
    } else {
      return false;
    }

    this.setState({
      curState: 0,
      stateStyle: {
        display: "none"
      }
    });

    this.props.childBackFather(this.state)
  }

  render() {
    console.log(this.props.propsStyle.height)
    const {
      provinceValue, provinceIndex, cityValue, cityIndex, countyValue, countyIndex, tabsIndex, stateStyle, curState
    } = this.state;
    let mapName = Object,
      handleName = '',
      keyName = '',
      checkIndex = '';
    if (this.state.curState === 1) {
      mapName = provinces;
      handleName = this.handleChangeProvince.bind(this);
      keyName = `province`;
      checkIndex = this.state.provinceIndex;
    } else if (this.state.curState === 2) {
      mapName = cities[provinceIndex];
      handleName = this.handleChangeCity.bind(this);
      keyName = `city`;
      checkIndex = this.state.cityIndex;
    } else if (this.state.curState === 3) {
      mapName = counties[provinceIndex][cityIndex];
      handleName = this.handleChangeCounty.bind(this);
      keyName = `county`;
      checkIndex = this.state.countyIndex;
    } else {
      return (
        <div className="boxDiv">
          <span style={this.props.propsStyle} onClick={this.handleChangeInp.bind(this)}>{this.state.inpVal}</span>
        </div>
      );
    }
    return (
      <div className="boxDiv">
        <span style={this.props.propsStyle} onClick={this.handleChangeInp.bind(this)}>{this.state.inpVal}</span>
    <div style={this.state.stateStyle} className="innerBox">
            <ul className="tabs cf" id={this.props.checkPlace=='city'?'tabsCity':''}>
                <li onClick={()=>{this.tabsHandle(0)}} className={this.state.tabsIndex===0?'active':''}>{this.state.provinceValue||'省份'}</li>
                <li onClick={()=>{this.tabsHandle(1)}} className={this.state.tabsIndex===1?'active':''}>{this.state.cityValue||'城市'}</li>
                <li onClick={()=>{this.tabsHandle(2)}} className={this.state.tabsIndex===2?'active':''}>{this.state.countyValue||'县区'}</li>
            </ul>
            <ul id="divs">
                {
                  mapName===undefined?'':
                  mapName.map((item, index) => (
                    <li key={`keyName${index}`} className={checkIndex===index?'active':''} onClick={()=>handleName(index, item)}>{item}</li>
                  ))
                }
            </ul>
            <div className="btnP">
               <input type="button" className="clearBtn"  defaultValue="清空" onClick={this.handleClear.bind(this)}/>
               <input type="button" className="confirmBtn" defaultValue="确定" onClick={this.handleComfirm.bind(this)}/>
            </div>
        </div>
      </div>
    );
  }
}

export default ProvinceSelect;