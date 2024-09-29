import React, { useState } from 'react';

const SearchButton = ({ onClick }) => {
    const [isFocused, setIsFocused] = useState(false);

    // Handlers for focus events
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <button
            onClick={onClick}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`py-[0.4rem] px-[1.5rem] rounded-[0.8rem] transition-colors duration-150 
                        ${isFocused ? 'bg-[color:var(--col-violet)]' : 'bg-[color:var(--col-black)]'}
                        text-[color:var(--col-white)]`}
        >
            Generate
        </button>
    );
};

export default SearchButton;
