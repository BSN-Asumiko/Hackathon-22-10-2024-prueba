import { useState } from 'react'
import './App.css'

import Logo from "./assets/images/logo.png"
import CharacterImage from "./assets/images/character.png"
import BGImage from "./assets/images/blob.svg"
import SearchButton from './components/buttons/SearchButton'
import FilterButton from './components/buttons/FilterButton'


function App() {

  return (
    <div className='w-full h-full border-[color:var(--col-darker-grey)] border-2 border-solid'>
      <header className='w-full mt-[1.5rem] pl-4'>
        <img src={Logo} alt="Imatge del logotip de Boored." />
      </header>

      <div className='w-full md:h-[70%] flex flex-col justify-center items-center md:flex-row md:mt-[6%] '>
        <section className='w-full md:w-[50%] md:h-[90%]  md:mr-[2rem]'>
          <section className='w-full px-3 mt-[2rem] mb-[3rem] flex flex-wrap justify-center gap-2'>
            <FilterButton type="Educació" />
            <FilterButton type="Recreatiu" />
            <FilterButton type="Social" />
            <FilterButton type="Caritat" />
            <FilterButton type="Cuina" />
            <FilterButton type="Relaxació" />
            <FilterButton type="Entretenir-se" />
          </section>
          <div className='w-[60%] m-auto flex flex-col justify-center items-center'>
            <img src={CharacterImage} alt="Imatge del personatge dibuixat com un òval verd amb braços i cames." className='w-[65%]'/>
            <div className='relative flex flex-col justify-center items-center'>
              <h1 className='text-[1.2rem] font-bold w-[80%] text-center leading-[1em] mb-[2rem]'>TROBA ALGUNA COSA A FER</h1>
              <SearchButton />
              <img src={BGImage} alt="Imatge de trapezi de color gris clar amb cantonades arrodonides." className='absolute w-full -z-10 mt-[1rem]'/>
            </div>
            
          </div>
        </section>

      <div className='hidden md:block w-1% h-full border-r-[color:var(--col-black)] border-r-2 border-dashed h-full'>
      </div>

      <section className='flex flex-col justify-center items-center my-[5rem] md:my-[0] md:mr-[0] md:w-[45%] md:h-[90%] md:mr-[10%] '>
        <h2 className='text-[1.8rem] font-bold w-[80%] text-center leading-[1em] mb-[2rem]'>Activitat:</h2>
        <p className='w-[60%] text-center text-[1.2rem] font-bold'> Text a friend you haven't talked to in a long time</p>
      </section>
      </div>
      

    </div>
  )
}

export default App
