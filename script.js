
document.getElementById('search').addEventListener('click', () => {
    displaymorty();
  });
  
  async function displaymorty() {
    const mortynName = document.getElementById('Morty').value;
    const morty = await getMorty(mortynName);
    addMorty(morty);
  }
  
  async function getMorty(name) {
    let response = await fetch(`https://rickandmortyapi.com/api/character/${name}`);
    return await response.json();
  }
  
  function addMorty(morty) {
    const pokemonList = document.getElementById('morty-container');
    const element = document.createElement('div');
    element.innerHTML = `
        <strong>Id</strong>: ${morty.id}
        <strong>Name</strong>: ${morty.name}
        <strong>Status</strong>: ${morty.status}
        <strong>Species</strong>: ${morty.species}
    `;
    pokemonList.appendChild(element);
  }
    