import React from 'react';

const Searchbox = ({searchBox}) => {
    return (
    <div className= 'pa2'>

         <input 
         className='pa3 ba b--green bg-lightest-blue'
         type='search' 
         placeholder='search robots'
         onChange = {searchBox}
         />
    </div>
    )
}

export default Searchbox;