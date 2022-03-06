

function Description({pokemon, gotoNextPokemon, gotoPrevPokemon, pokemonDetails, pokemonSpecies, randomPokemon}) {


    return(
        <div className='md:flex md:w-3/5 rounded-md p-2 ' >
            <div className="md:w-2/5 grid place-content-center px-2" >
                <div className='w-full grid justify-items-center' >
                    <img className="w-9/12 " src={pokemonDetails.sprites.other.dream_world.front_default ? pokemonDetails.sprites.other.dream_world.front_default : pokemonDetails.sprites.front_default}></img>
                </div>
                
                <div className="my-2 text-center" >
                    <p><span className="font-bold">Type :</span> {pokemonDetails.types.map(p => p.type.name + ' ')} </p>
                </div>
            </div>
            <div className="md:w-3/5" >
                <div>
                    <h1><span className="font-bold" >Name : </span>{pokemon} #0{pokemonDetails.id} <span className="float-right flex">
                        <button onClick={randomPokemon} ><img className="w-8" src="https://img.icons8.com/flat-round/64/000000/sorting-arrows-horizontal.png"/></button>
                        {gotoPrevPokemon && <button onClick={gotoPrevPokemon} ><img className="w-8 mx-2" src="https://img.icons8.com/flat-round/64/000000/circled-left-2--v1.png"/></button>}
                        {gotoNextPokemon && <button onClick={gotoNextPokemon} ><img className="w-8" src="https://img.icons8.com/flat-round/64/000000/circled-right-2--v1.png"/></button>}</span> </h1>
                    <br></br>
                    <h1 className="font-bold" >
                        Description : 
                    </h1>
                    <p>
                        {pokemonSpecies.flavor_text_entries.filter(lang =>
                            lang.language.name === "en"
                        )[0].flavor_text}
                    </p>
                    <br></br>
                </div>
                <div>
                    <h1 className="font-bold" >Stats :</h1>
                    <div className="flex items-center" >
                        <div className="w-1/2">
                            <p><span className="font-semibold" >Generation :</span> {pokemonSpecies.generation.name}</p>
                            <p><span className="font-semibold" >Height :</span> {pokemonDetails.height}kg</p>
                            <p><span className="font-semibold" >Weight :</span> {pokemonDetails.weight}cm</p>
                        </div>
                        <div className="w-1/2" >
                            <p><span className="font-semibold" >Abilities :</span> {pokemonDetails.abilities.map(a => a.ability.name + " ")}</p>
                            <p><span className="font-semibold" >Habitat :</span> {pokemonSpecies.habitat?.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;