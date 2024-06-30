// Search.js
import React, { useState } from 'react';
import '../App.css'; // Assuming you have a CSS file for styling

const Search = ({ clearSearch, handleSearch, query }) => {
    const [inputValue, setInputValue] = useState(query || '');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSearchClick = () => {
        handleSearch(inputValue);
    };

    const handleClearClick = () => {
        setInputValue(''); // Clear the input field
        clearSearch(); // Call the clearSearch function to reset the search results
    };

    return (
        <div className="search-container">
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter Notes Title..."
                    className="search-input"
                />
                {inputValue && ( // Conditionally render the clear icon
                    <i 
                        className="fa-regular fa-circle-xmark clear-icon" 
                        onClick={handleClearClick} 
                    ></i>
                )}
            </div>
            <i
                className="fa-solid fa-magnifying-glass search-icon"
                onClick={onSearchClick}
            ></i>
        </div>
    );
};

export default Search;
