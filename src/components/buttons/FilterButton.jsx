const FilterButton = ({type, onClick}) => {
    return (
        <button
            onClick={() => onClick(type)} 
            className='py-1 px-3 rounded-full bg-[color:var(--col-grey)] text-[color:var(--col-black)]  focus:bg-[color:var(--col-violet)] focus:text-[color:var(--col-white)]'>
            {type}
        </button>
    );
}

export default FilterButton;
