import pokeapi from '../assets/pokeapi.png'
import pokemontcg from '../assets/pokemontcg.png'
import useDarkMode from '../hooks/useDarkMode';

function Nav() {
    const [colorTheme,setTheme] = useDarkMode();

    return(
        <header className="pt-2 w-full px-6 justify-between flex">
            <div className="flex items-center play2p">
                <p className="text-sm mx-3" >Built by</p>
                <h1 className='rounded-full dark:border-white border-gray-800 border-2 w-9 playfair p-1' >Pi.</h1>
                <span className="mx-3 font-medium text-sm  hidden md:block">Piyush Sakhare</span>
            </div>
            <div className='flex items-center' >
                <button onClick={() => setTheme(colorTheme)} >{colorTheme==="dark" ? <div className='flex items-center'><img src="https://img.icons8.com/color-glass/30/000000/summer.png"/></div> : <div className='flex items-center'><img src="https://img.icons8.com/ios-glyphs/30/000000/moon-symbol.png"/></div>}</button>
                <a target='_blank' href='https://pokeapi.co/' ><img src={pokeapi} className='w-16 mx-3' ></img></a>
                <a target='_blank' href='https://pokemontcg.io/' ><img src={pokemontcg} className='w-8' ></img></a>
            </div>
        </header>
    )
}

export default Nav;