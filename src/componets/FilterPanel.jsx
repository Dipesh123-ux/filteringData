import React from 'react'
import {CategoryList,BedList} from '../data/index'
import InputBox from '../componets/common/Input'
import DropDown from '../componets/common/dropdown'
import PriceSlider from '../componets/common/PriceSlider'

const FilterPanel = ({
    selectedCategory,
    selectCategory,
    selectedBeds,
    selectBeds,
    selectedPrice,
    changePrice,
    selectedLocation,
    changeLocation,
    apply
}) => {
  return (
   <div className="row">
    <div className="col-md-2 m-4">
        <InputBox  changeLocation={changeLocation} />
    </div>
    <div className="col-md-2 m-4">
        <DropDown 
         options={CategoryList}
         value = {selectedCategory}
         selectToggle = {selectCategory}
         label = "Home-Type"
         />
    </div>
    <div className="col-md-2 ms-1 m-4">
    <DropDown 
         options={BedList}
         value = {selectedBeds}
         selectToggle = {selectBeds}
         label = "Beds"
         />
    </div>
    <div className="col-md-2">
    
      <p style={{marginLeft:"45px"}}>Price in $</p>
      <PriceSlider value={selectedPrice} changePrice={changePrice} />

    </div>
    <div className="col-md-2 m-4">
    <button style={{background:"rgb(225, 238, 244)"}} className="ps-5 btn pe-5 text-center" onClick={apply} >Apply</button>
    </div>
 
   </div>
  )
}

export default FilterPanel