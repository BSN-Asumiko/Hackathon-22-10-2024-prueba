import { useState, useEffect } from 'react';
import './App.css';

import useApi from './services/useApi';
import { CORS_ANYWHERE_URL, getActivityByTypeUrl } from './config/urls';

import Logo from "./assets/images/logo.png";
import CharacterImage from "./assets/images/character.png";
import BGImage from "./assets/images/blob.svg";
import SearchButton from './components/buttons/SearchButton';
import FilterButton from './components/buttons/FilterButton';

function App() {
  const [selectedType, setSelectedType] = useState(null);
  const [fetchActivity, setFetchActivity] = useState(false); 
  const urlToFetch = selectedType ? getActivityByTypeUrl(selectedType.toLowerCase()) : null;
  const { data: activities, loading, error } = useApi(fetchActivity ? CORS_ANYWHERE_URL + urlToFetch : null);
  
  const [randomActivity, setRandomActivity] = useState(null);

  const handleFilterClick = (type) => {
    setSelectedType(type);
    setFetchActivity(false); 
  };

  const handleFetchActivity = () => {
    setFetchActivity(true); 
  };

  useEffect(() => {
    if (activities && activities.length > 0) {
      const randomIndex = Math.floor(Math.random() * activities.length);
      setRandomActivity(activities[randomIndex]);
    }
  }, [activities]);


  return (
    <div className='w-full h-full border-[color:var(--col-darker-grey)] border-2 border-solid'>
      <header className='w-full mt-[1.5rem] pl-4'>
        <img src={Logo} alt="Image of the Boored logo." />
      </header>

      <div className='w-full h-full md:h-[70%] flex flex-col justify-center items-center md:flex-row md:mt-[6%] '>
        <section className='w-full md:w-[50%] md:h-[90%] md:mr-[2rem]'>
          <section className='w-full px-3 mt-[2rem] mb-[3rem] flex flex-wrap justify-center gap-2'>
            <FilterButton type="Education" onClick={handleFilterClick} />
            <FilterButton type="Recreational" onClick={handleFilterClick} />
            <FilterButton type="Social" onClick={handleFilterClick} />
            <FilterButton type="Charity" onClick={handleFilterClick} />
            <FilterButton type="Cooking" onClick={handleFilterClick} />
            <FilterButton type="Relaxation" onClick={handleFilterClick} />
            <FilterButton type="Busywork" onClick={handleFilterClick} />
          </section>
          
          <div className='w-[60%] m-auto flex flex-col justify-center items-center'>
            <img src={CharacterImage} 
                  alt="Image of the character drawn as a green oval with arms and legs." 
                  className='w-[65%]'/>
            <div className='relative flex flex-col justify-center items-center'>
              <h1 className='text-[1.2rem] font-bold w-[80%] text-center leading-[1em] mb-[2rem]'>FIND SOMETHING TO DO</h1>
              <SearchButton onClick={handleFetchActivity}/>
              <img src={BGImage} 
                    alt="Image of a light gray trapezoid with rounded corners." 
                    className='absolute w-full -z-10 mt-[1rem]'/>
            </div>
          </div>
        </section>

        <div className='hidden md:block w-1% h-full border-r-[color:var(--col-black)] border-r-2 border-dashed h-full'></div>

        <section className='flex flex-col justify-center items-center my-[5rem] md:my-[0] md:w-[45%] md:h-[90%] md:mr-[10%]'>
          <h2 className='text-[1.8rem] font-bold w-[80%] text-center leading-[1em] mb-[2rem]'>Activity:</h2>

          {loading ? (
            <p className='w-[60%] text-center text-[1.2rem] font-bold'> Generating the activity...</p> 
          ) : error || !randomActivity ? (
            <p className='w-[60%] text-center text-[1.2rem] font-bold'> No activity was found...</p>
          ) : (
              <p className='w-[60%] text-center text-[1.2rem] font-bold'> {randomActivity.activity} </p>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
