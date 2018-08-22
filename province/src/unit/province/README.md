##README:
##依赖: React、
##文件组成：province.css、provinceData.js、ProvinceSelect.js
>1<.'render'--fatherComponent:
#import ProvinceSelect from './province/ProvinceSelect';
#  render() {
#    return (
#      <div className="App" style={{height:"60px"}}>
#         <ProvinceSelect 
#          propsStyle={this.props.inpStyle}  
#          childBackFather={ childData=>{console.log(childData)} } 
#          checkPlace="city">
#          </ProvinceSelect>
#      </div> 
#    );
#  }
>2<.参数说明:
#-->
#1.propsStyle:(Object--样式)
#  组件中输入框的样式    (非必填)
#-->
#2.childBackFather:(callback--接受子组件的数据)
#  子组件给父组件传所选参数的回调  *(必填)
#-->
#3.checkPlace:(可选参数:'city', 'county',默认值:county)
#  选择的级别控制:
#  city:选择到"市"级
#  county:选择到"县"级
