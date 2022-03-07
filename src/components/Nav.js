import pokeapi from '../assets/pokeapi.png'
import pokemontcg from '../assets/pokemontcg.png'
import logo from '../assets/logo.png'
import useDarkMode from '../hooks/useDarkMode';

function Nav() {
    const [colorTheme,setTheme] = useDarkMode();

    return(
        <header className="pt-2 w-full px-6 justify-between flex">
            <div className="flex items-center play2p">
                <img className='w-10 mx-2' src={logo} alt='logo' ></img>
                <h1>pokecardsvalue</h1>
            </div>
            <div className='flex items-center' >
                <button onClick={() => setTheme(colorTheme)} >{colorTheme==="dark" ? <div className='flex items-center'><img alt='light' src="https://img.icons8.com/color-glass/30/000000/summer.png"/></div> : <div className='flex items-center'><img alt='dark' src="https://img.icons8.com/ios-glyphs/30/000000/moon-symbol.png"/></div>}</button>
                <a target='_blank' rel="noreferrer" href='https://pokeapi.co/' ><img alt='pokeapi' src={pokeapi} className='w-16 mx-3' ></img></a>
                <a target='_blank' rel="noreferrer" href='https://pokemontcg.io/' ><img alt='pokemontcg' src={pokemontcg} className='w-8' ></img></a>
            </div>
        </header>
    )
}

export default Nav;