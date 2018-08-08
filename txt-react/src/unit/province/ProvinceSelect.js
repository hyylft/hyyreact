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
      stateStyle: {
        display: "none"
      },
      inpVal: ''
    };
  }
  handleChangeInp(chooseState) {
    if (this.state.curState == 0) {
      console.log(this.state)
      if (this.state.countyValue != '') {
        this.handleChangeCounty(this.state.countyIndex, this.state.countyValue)
        return;

      }
      if (this.state.cityValue != '') {
        this.handleChangeCity(this.state.cityIndex, this.state.cityValue)
        return;

      }
      if (this.state.provinceValue != '') {
        this.handleChangeProvince(this.state.provinceIndex, this.state.provinceValue)
        return;

      }
    } else {
      this.state.inpVal = this.state.provinceValue + ' ' + this.state.cityValue + ' ' + this.state.countyValue
    }
    this.setState({
      curState: 1,
      stateStyle: {
        display: "block"
      }
    })
  }

  handleChangeProvince(index, value) {
    this.setState({
      curState: 2,
      provinceIndex: index,
      provinceValue: value,
      cityValue: cities[index][0],
      countyValue: counties[index][0][0],
      stateStyle: {
        display: "block"
      }
    });
  }

  handleChangeCity(index, value) {
    var _val = counties[this.state.provinceIndex][index]
    _val == undefined ? _val = '' : _val = _val[0];

    this.setState({
      curState: 3,
      cityIndex: index,
      cityValue: value,
      countyValue: _val,
      stateStyle: {
        display: "block"
      }
    });
  }

  handleChangeCounty(index, value) {
    this.setState({
      curState: 0,
      countyIndex: index,
      countyValue: value,
      stateStyle: {
        display: "none"
      }
    });
    this.state.inpVal = this.state.provinceValue + ' ' + this.state.cityValue + ' ' + this.state.countyValue
  }

  render() {
    const {
      provinceValue, provinceIndex, cityValue, cityIndex, countyValue, countyIndex
    } = this.state;
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
      console.log(this.state.provinceValue + ' ' + this.state.cityValue + ' ' + this.state.countyValue)
      return (
        <div>
          <input type="text" style={this.props.propsStyle} defaultValue={this.state.inpVal} onClick={this.handleChangeInp.bind(this)} readOnly="readOnly"/>
        </div>
      );
    }
    return (
      <div>
          <input type="text" style={this.props.propsStyle} defaultValue={this.state.inpVal}  onClick={this.handleChangeInp.bind(this)} readOnly="readOnly"/>
          <div style={this.state.stateStyle}>
              {
                mapName.map((item, index) => (
                  <span key={`keyName${index}`}  onClick={()=>handleName(index, item)}>{item}</span>
                ))
              }
         </div>
    </div>
    );
  }
}

export default ProvinceSelect;