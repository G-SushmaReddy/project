import* as React from 'react';
import searchbar from './Images/searchpng.png';
function SearchBar()
{
    return(
        <div>
            <div className='SearchBar'>
            <input type="text" id="search-input" className='search-input' placeholder="Search"/>
            <img src={searchbar} alt='search' className='search'></img>

            </div>

        </div>
    );
    
}

export default SearchBar;