import FilterPanel from "./componets/FilterPanel";
import List from "./componets/List"
import React , {useState} from 'react'
import {DataList } from './data/index'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBeds, setSelectedBeds] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 10000]);
  const [list, setList] = useState(DataList);

  const applyFilters = ()=>{

    let updatedList = DataList;
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }
    if (selectedBeds) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.beds) === parseInt(selectedBeds)
      );
    }
    if (selectedLocation) {
      updatedList = updatedList.filter(
        (item) => item.location === selectedLocation
      );
    }

    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    
    setList(updatedList);


  }

  return (
    <div className="container" >
         <div className="mt-5 shadow-sm bg-white rounded" >
          <FilterPanel
          selectedCategory={selectedCategory}
          selectCategory={setSelectedCategory}
          selectedBeds={selectedBeds}
          selectBeds={setSelectedBeds}
          selectedPrice={selectedPrice}
          changePrice = {setSelectedPrice}
          selectedLocation={selectedLocation}
          changeLocation = {setSelectedLocation}
          apply = {applyFilters}
          />
          </div> 
          <div className="mt-5" >
            <List list={list} />
          </div>
    </div>
  );
}

export default App;
