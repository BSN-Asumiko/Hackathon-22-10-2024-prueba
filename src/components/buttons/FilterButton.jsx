import React from 'react'

const FilterButton = ({type, onClick}) => {
    return (
        <>
            <button onClick={onClick} className='py-1 px-3 rounded-full bg-[color:var(--col-grey)] text-[color:var(--col-black)]  focus:bg-[color:var(--col-violet)] focus:text-[color:var(--col-white)]'>
                {type}
            </button>
        </>
    )
}

export default FilterButton