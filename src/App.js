import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Description from './components/Description'
import Nav from './components/Nav'
import pokemongif from './assets/pokemongif.gif'
import useDarkMode from './hooks/useDarkMode'
import Footer from './components/Footer';



function App() {
  useDarkMode()
  
  const [pokemon,setPokemon] = useState('bulbasaur')
  const [currentPokemon,setCurrentPokemon] = useState(`https://pokeapi.co/api/v2/pokemon?limit=1`)
  const [nextPokemon,setNextPokemon] = useState()
  const [prevPokemon,setPrevPokemon] = useState()
  const [pokemonDetails,setPokemonDetails] = useState()
  const [pokemonSpecies,setPokemonSpecies] = useState()
  const [pokemonCards,setPokemonCards] = useState({})
  const [pokemonCardsHolofoil,setPokemonCardsHolofoil] = useState({})
  const [searchText,setSearchText] = useState()
  const [loading,setLoading] = useState(true)
  
  
  
  useEffect(()=>{
    const controller = new AbortController();
    setLoading(true)
    axios.get(currentPokemon, {
      signal: controller.signal
    }).then(res => {
      setNextPokemon(res.data.next)
      setPrevPokemon(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
       
    }).catch(error => {
      console.log(error);
  }) 
    return () => controller.abort()
  },[currentPokemon])

  useEffect(()=>{
    const controller = new AbortController();

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
      signal: controller.signal
    }).then(res => {
        setPokemonDetails(res.data)
        
    }).catch(error => {
      console.log(error);
  })
    
    return () => controller.abort()
  },[pokemon])
    
  useEffect(()=>{
    const controller = new AbortController();

    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`, {
      signal: controller.signal
    }).then(res => {
      setPokemonSpecies(res.data)
    }).catch(error => {
      console.log(error);
  })
    return () => controller.abort()
  },[pokemon])
    
  useEffect(()=>{
    const controller = new AbortController();

    axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${pokemon}&orderBy=-tcgplayer.prices.normal.market&pageSize=10`, {
      signal: controller.signal
    }).then( res => {
      setPokemonCards(res.data)
      
    }).catch(error => {
      console.log(error);
  })
    return () => controller.abort()
  },[pokemon])

  useEffect(()=>{
    const controller = new AbortController();

    axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${pokemon}&orderBy=-tcgplayer.prices.holofoil.market&pageSize=10`, {
      signal: controller.signal
    }).then( res => {
      setPokemonCardsHolofoil(res.data)
      setLoading(false)
      
      
    }).catch(error => {
      console.log(error);
  })
    return () => controller.abort()
  },[pokemon])

  
 
  function submitSearch(e) {

    e.preventDefault()
    setPokemon(searchText.toLowerCase())
  }

  function randomPokemon() {
    let random = Math.floor((Math.random() * 1126) + 1)
    setCurrentPokemon(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=${random}`)
  }

  function gotoNextPokemon() {
    setCurrentPokemon(nextPokemon)
  }

  function gotoPrevPokemon() {
    setCurrentPokemon(prevPokemon)
  }

  


  return (
    <div className="pb-12 montserrat dark:bg-gray-900 dark:text-white">
      <Nav />
      <div className='mt-12 md:flex mx-12' >
        <Description 
          pokemon={pokemon}
          gotoNextPokemon = { nextPokemon ? gotoNextPokemon : null}
          gotoPrevPokemon = { prevPokemon ? gotoPrevPokemon : null}
          pokemonDetails = {pokemonDetails}
          pokemonSpecies = {pokemonSpecies}
          randomPokemon = {randomPokemon}
          loading = {loading}
        />
        <div className='md:w-2/5 md:ml-16' >
          <form onSubmit={submitSearch} className='flex h-10 '>
            <input className='flex-auto min-w-0 block w-full px-3 py-1.5 dark:text-black  border border-black rounded transition ease-in-out m-0  focus:bg-white focus:border-black focus:outline-none' type="text" placeholder="Pokemon name"  value={searchText} onChange={e => setSearchText(e.target.value)}></input>
            <button type='submit' className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium   uppercase rounded  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center'>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
          </form>
          <div>
            <img alt='pokemongif' src={pokemongif} ></img>
          </div>
        </div>
      </div>
      <h1 className='mt-10 play2p text-4xl md:ml-12 ml-6 ' >Cards</h1>
      <div className='mt-12 mx-6 md:mx-12 grid place-content-center' >
        <div >
          <p className='play2p my-4 text-xl' >Holofoil</p>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-content-center' >
        { pokemonCardsHolofoil.data?.map( (card) => (card.tcgplayer?.prices?.holofoil && <Card key={card.id} card={card} /> ))}
        </div>
        </div>
        <div  >
          <p className='play2p my-4 text-xl' >Normal</p>
          <div  className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-content-center'>
        { pokemonCards.data?.map( (card) => (card.tcgplayer?.prices.normal && <Card key={card.id} card={card} />))}
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
