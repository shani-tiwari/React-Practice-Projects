import React from 'react'
import "../../index.css"

function DropDown({title, options, func}) {
    
  return (
    <div className='select'>
        <select defaultValue={0} onChange={func} name="format" id="format">
            <option value="0" disabled>
                {title}
            </option>
            {
                options.map( (option, idx) => (
                    <option key={idx} value={option}>
                        {option.toUpperCase()}
                    </option>
                ))
            }
        </select>
    </div>
  )
}

export default DropDown