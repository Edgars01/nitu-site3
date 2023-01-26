import React from 'react'
import '../component-style/Filter.css';

export const Filter = () => {
  return (

    <div id='filter-div'>
        <ul className="dropdown">
            
            <li className="title">Category</li>

            <li>
                <label>Checkbox 1 <input type="checkbox" name="category[]" value="checkbox 1"/><span></span></label>
            </li>

            <li>
                <label>Checkbox 2 <input type="checkbox" name="category[]" value="checkbox 2" /><span></span></label>
            </li>

            <li>
                <label>Checkbox 3 <input type="checkbox" name="category[]" value="checkbox 3" /><span></span></label>
            </li>

            <li>
                <label>Checkbox 4 <input type="checkbox" name="category[]" value="checkbox 4" /><span></span></label>
            </li>

            <li>
                <label>Checkbox 5 <input type="checkbox" name="category[]" value="checkbox 5" /><span></span></label>
            </li>

            <li>
                <label>Checkbox 6 <input type="checkbox" name="category[]" value="checkbox 6" /><span></span></label>
            </li>

            <li className="divider"></li>
            <li className="title">Product Filter</li>

            <li>
                <label>Radio 1 <input type="radio" name="filter" value="radio 1" /><span></span></label>
            </li>

            <li>
                <label>Radio 2 <input type="radio" name="filter" value="radio 2" /><span></span></label>
            </li>

        </ul>
    </div>
  )
}
