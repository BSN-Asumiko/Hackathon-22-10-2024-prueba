import React from 'react'

const SearchButton = ({onClick}) => {
    return (
    
        <button onClick={onClick} className='bg-[color:var(--col-black)] text-[color:var(--col-white)] py-[0.4rem] px-[1.5rem] rounded-[0.8rem]'> 
            Generar
        </button>
    )
}

export default SearchButton