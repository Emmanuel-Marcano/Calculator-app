import React from 'react'
import Recipes from "./components/Recipes"
import './App.css';
const {useState, useEffect, useRef} = React

function App() {
  const [recipes, setRecipes] = useState([])
  const [searchField, setSearchField] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(function(){
     fetchRecipes()
  },[query])

  const searchInput = useRef()

  
  async function fetchRecipes(){
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=eab02541&app_key=b4fc5953aa33e33ad76bc94531d4330f`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  function handleSubmit(e){
    e.preventDefault()
    setQuery(searchField)
    searchInput.current.value = ''
    searchInput.current.focus()
  }

  function handleSearch(e){
    setSearchField(e.target.value)
  }

  return (
    <div className="App">

      <div className='header'>
       
          <h1>Look up recipes!</h1>
          <form className='search-form' onSubmit={handleSubmit}>
            <input className='search-input' ref={searchInput} onChange={handleSearch}></input>
            <button className='search-button' type="submit">Submit</button>
          </form>
      
      </div>

      <div className='recipes-container'>
       {recipes.map(function(recipe){
        return (
        <Recipes title={recipe.recipe.label}
         calories={recipe.recipe.calories}
         image={recipe.recipe.image} 
         ingredients={recipe.recipe.ingredients} /> )
       })}
       </div>
    </div>
  );
}

export default App;
