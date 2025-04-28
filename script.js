const results = document.querySelector("#result");
const searchInput = document.querySelector("#search"); 
 
const API = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

async function fetchData() {
    const response = await fetch(API);
    // console.log(response);
    
    const result = await response.json();
    // console.log(result);
    
    getData(result.results);
    //console.log(result.results);
    

}
fetchData();

async function getData(arr){
    for(let item of arr){
        const res = await fetch(item.url);
        // console.log(res);
        const reslt = await res.json();

         const imgDiv = document.createElement("img");
        //  imgDiv.src = reslt.sprites.other.dream_world.front_default;
        getfetch(reslt);
        console.log(reslt);
    }

}

async function getfetch(arr) {
     
    // const imgDiv = document.createElement("img");
    // imgDiv.src = reslt.sprites.other.dream_world.front_default;
    // imgDiv.src = reslt.sprites.other.dream_world.front_default;

    let new_div=document.createElement("div");
    new_div.innerHTML=`
    <div class="flip-box">
    <div class="flip-box-inner">
    <div class="flip-box-front">
    <img src="${arr.sprites.front_shiny}" alt="Avatar">
    <p>Name:${arr.name}</p>
    <p>Type:${arr.types[0].type.name}</p>
      </div>
      
      <div class="flip-box-back">
      
      <p>height:${arr.height}</p>
      <p>weight:${arr.weight}</p>
      <p>hp:${arr.stats[0].base_stat}</p>
      <p>attack:${arr.stats[1].base_stat}</p>
      <p>defence:${arr.stats[2].base_stat}</p>
      <p>special_attack:${arr.stats[3].base_stat}</p>
      <p>special_defence:${arr.stats[4].base_stat}</p>
      <p>speed:${arr.stats[5].base_stat}</p>

   
    </div>
    </div>
    </div>`
    results.append(new_div);

}


// searchInput.addEventListener("input", (e) => {
//     const value = e.target.value.toLowerCase();

//     const filtered = getfetch.filter(pokemon =>
//         pokemon.name.toLowerCase().includes(value) ||
//         pokemon.types.some(typeInfo => typeInfo.type.name.toLowerCase().includes(value))
//     );

//     displayPokemon(filtered);
// });


// async function searchPokemon(pokemonName) {
//     const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;

//     try {
//         const response = await fetch(url);

//         if (response.status === 200) {
//             const data = await response.json();
//             console.log("Name:", data.name);
//             console.log("ID:", data.id);
//             // Access other properties from the data object
//         } else {
//             console.error("Error: Could not find Pokemon - Status Code:", response.status);
//         }
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }