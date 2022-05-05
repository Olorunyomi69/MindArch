import React from 'react'
import './SearchBox.css'
import Button from './Button'
const SearchBox = ({searchChange}) => {
    return (
        <div className='searchbox'>
            <input
            type= 'search'
            placeholder='Search by names, artists'
            />

<select name="cars" id="cars">
    <option value="Choose Category">Choose Category</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>

  <Button color={'DarkGoldenrod'}  text={'Search'} />


        </div>
    )
}

export default SearchBox
