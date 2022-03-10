

function Description({pokemon, gotoNextPokemon, gotoPrevPokemon, pokemonDetails, pokemonSpecies, randomPokemon, loading}) {


    return(
        <div className='md:flex md:w-3/5 rounded-md p-2 ' >
            <div className="md:w-2/5 grid place-content-center px-2" >
                <div className='w-full grid justify-items-center' >
                    {loading ? <div className="rounded-full w-32 h-32 animate-pulse bg-slate-200 dark:bg-slate-700" > </div> : <img alt="pokemon-img" className="w-9/12 " src={ pokemonDetails?.sprites && pokemonDetails.sprites.other.dream_world.front_default ? pokemonDetails.sprites.other.dream_world.front_default : pokemonDetails.sprites.front_default}></img>}
                </div>
                
                <div className="my-2 grid place-content-center" >
                    <div className="flex items-center" ><span className="font-bold mr-1">Type : </span> {loading ? <div className="h-2 w-16 dark:bg-slate-700 bg-slate-300 rounded" ></div> : pokemonDetails.types.map(p => p.type.name + ' ')} </div>
                </div>
            </div>
            <div className="md:w-3/5" >
                <div>
                    <h1 className="flex justify-between" ><div className="flex items-center" ><span className="font-bold mr-1" >Name : </span>{ loading ? <div className="h-2 w-24 dark:bg-slate-700 bg-slate-300 rounded" ></div> : pokemon} #0{ loading ? <div className="h-2 dark:bg-slate-700 bg-slate-300 rounded" ></div> : pokemonDetails.id} </div>
                    <span className="float-right flex">
                        <button onClick={randomPokemon} ><img alt="random" className="w-8" src="https://img.icons8.com/flat-round/64/000000/sorting-arrows-horizontal.png"/></button>
                        {gotoPrevPokemon && <button onClick={gotoPrevPokemon} ><img alt="previous" className="w-8 mx-2" src="https://img.icons8.com/flat-round/64/000000/circled-left-2--v1.png"/></button>}
                        {gotoNextPokemon && <button onClick={gotoNextPokemon} ><img alt="next" className="w-8" src="https://img.icons8.com/flat-round/64/000000/circled-right-2--v1.png"/></button>}</span> </h1>
                    <br></br>
                    <h1 className="font-bold" >
                        Description : 
                    </h1>
                    <div>
                        { loading ? <div className="h-2 dark:bg-slate-700 bg-slate-300 rounded"></div> : pokemonSpecies.flavor_text_entries.filter(lang =>
                            lang.language.name === "en"
                        )[0]?.flavor_text}
                    </div>
                    <br></br>
                </div>
                <div>
                    <h1 className="font-bold" >Stats :</h1>
                    <div className="flex items-center" >
                        <div className="w-1/2">
                            <div><span className="font-semibold" >Generation :</span> { loading ? <div className="h-2 dark:bg-slate-700 bg-slate-300 rounded" ></div> : pokemonSpecies.generation.name}</div>
                            <div><span className="font-semibold" >Height :</span> { loading ? <div className="h-2 dark:bg-slate-700 bg-slate-300 rounded" ></div> : pokemonDetails.height}kg</div>
                            <div><span className="font-semibold" >Weight :</span> { loading ? <div className="h-2 dark:bg-slate-700 bg-slate-300 rounded" ></div> : pokemonDetails.weight}cm</div>
                        </div>
                        <div className="w-1/2" > 
                            <div><span className="font-semibold" >Abilities :</span> { loading ? <div className="h-2 dark:bg-slate-700 bg-slate-300 rounded" ></div> : pokemonDetails.abilities.map(a => a.ability.name + " ")}</div>
                            <div><span className="font-semibold" >Habitat :</span> { loading ? <div className="h-2 dark:bg-slate-700 bg-slate-300 rounded" ></div> : pokemonSpecies.habitat?.name}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;