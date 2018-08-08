import React from 'react';
import {
  provinces, cities, counties
}
from './provinceData';
import './province.css';

class ProvinceSelect extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.propsStyle)
    this.state = {
      curState: 0,
      provinceValue: '',
      provinceIndex: 2,
      cityValue: '',
      cityIndex: '',
      countyValue: '',
      countyIndex: '',
      tabsIndex:0,
      stateStyle: {
        display: "none"
      },
      inpVal: ''
    };
  }

  handleChangeInp(chooseState) {
    // if (this.state.curState == 0) {
    //   if (this.state.cityValue != '') {
    //     this.handleChangeCity(this.state.cityIndex, this.state.cityValue)
    //     return false;

    //   }
    //   if (this.state.provinceValue != '') {
    //     this.handleChangeProvince(this.state.provinceIndex, this.state.provinceValue)
    //     return false;

    //   }
    // } else {
    //   // this.state.inpVal = this.state.provinceValue + ' ' + this.state.cityValue + ' ' + this.state.countyValue
    // }
    this.setState({
      curState: 1,
      provinceIndex:this.state.provinceIndex,
        provinceValue:this.state.provinceValue,
      cityIndex: this.state.cityIndex,
      cityValue: this.state.cityValue,
      countyIndex: this.state.countyIndex,
      countyValue: this.state.countyValue,
      tabsIndex:this.state.tabsIndex,
      stateStyle: {
        display: "block"
      }
    })
  }
    tabsHandle(index){
        console.log(index)
        if(index == 0){
            this.state.tabsIndex == 0
        }else if(index==1){
            this.state.tabsIndex == 1
        }else if(index==2){
            this.state.tabsIndex == 2
        }
    }
  handleChangeProvince(index, value) {
    this.setState({
      curState: 2,
      provinceIndex: index,
      provinceValue: value,
      inpVal: value,
      tabsIndex:0,
      stateStyle: {
        display: "block"
      }
    });
    this.forceUpdate();
  }

  handleChangeCity(index, value) {
    this.setState({
      curState: 3,
      cityIndex: index,
      cityValue: value,
      inpVal:this.state.provinceValue + ' ' + value,
      tabsIndex:1,
      stateStyle: {
        display: "block"
      }
    });
    this.forceUpdate();
  }

  handleChangeCounty(index, value) {

    this.setState({
      curState: 0,
      countyIndex: index,
      countyValue: value,
      inpVal:this.state.provinceValue + ' ' + this.state.cityValue + ' ' + value,
      tabsIndex:2,
      stateStyle: {
        display: "none"
      }
    });
      this.forceUpdate(); 
    this.state.inpVal = this.state.provinceValue + ' ' + this.state.cityValue + ' ' + this.state.countyValue
  }


  render() {
        const {
            provinceValue, provinceIndex, cityValue, cityIndex, countyValue, countyIndex,tabsIndex,stateStyle
        } = this.state;
        console.log(this.state)
        var mapName = Object,
        handleName = '',
        keyName = '';
    if (this.state.curState == 1) {
        mapName = provinces;
        handleName = this.handleChangeProvince.bind(this);
        keyName = `province`
    } else if (this.state.curState == 2) {
        mapName = cities[provinceIndex];
        handleName = this.handleChangeCity.bind(this);
        keyName = `city`
    } else if (this.state.curState == 3) {
        mapName = counties[provinceIndex][cityIndex];
        handleName = this.handleChangeCounty.bind(this);
        keyName = `county`
    } else {
        this.state.inpVal = this.state.provinceValue + ' ' + this.state.cityValue + ' ' + this.state.countyValue
        this.state.tabsIndex = 2;
        console.log(this.state.provinceValue + ' ' + this.state.cityValue + ' ' + this.state.countyValue)
        return (
            <div className="boxDiv" >
                <input type="text" style={this.props.propsStyle} value={this.state.inpVal} onClick={this.handleChangeInp.bind(this)} readOnly="readOnly"/>
            </div>
        );
    }
    return (
        <div className="boxDiv" >
            <input type="text" style={this.props.propsStyle} defaultValue={this.state.inpVal}  onClick={this.handleChangeInp.bind(this)} readOnly="readOnly"/>
            <div style={this.state.stateStyle} className="innerBox">
                <ul className="tabs cf">
                    <li className={this.state.tabsIndex==0?'active':''}>{this.state.provinceValue||'省份'}</li>
                    <li className={this.state.tabsIndex==1?'active':''}>{this.state.cityValue||'城市'}</li>
                    <li className={this.state.tabsIndex==2?'active':''}>{this.state.countyValue||'县区'}</li>
                </ul>
                <ul id="divs">
                    {
                        mapName==undefined?
                        <li>查无此地点</li>:
                        mapName.map((item, index) => (
                            <li key={`keyName${index}`}  onClick={()=>handleName(index, item)}>{item}</li>
                        ))
                    }
                </ul>
                <div className="btnP">
                   <input type="button" className="clearBtn"  defaultValue="清空"/>
                   <input type="button" className="confirmBtn" defaultValue="确定"/>
                </div>
            </div>
        </div>
    );
  }
}

export default ProvinceSelect;