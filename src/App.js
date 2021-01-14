import './App.css';
import Recipe from './Recipe';
import React,{useEffect, useState} from 'react';


const App = () => {

  const APP_ID = '7ec1c1b4';
  const APP_KEY = 'a2af622726e6bd5917202e360f3948fa';
 
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState(``)


  useEffect( () => {
    getRecipes();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[query]);
  

  //get the date from api
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

    setRecipes(data.hits);

  };

   const updateSearch = e => {
     setSearch(e.target.value);
   }

   const getSearch = e => {
     e.preventDefault();
     setQuery(search);
     setSearch('');
   }

  return(
    <div className="App">
    <div className="formin">
    <h1 className="logo">RECIPE</h1>
    <h4 className="title">Type down the recipe you want to find</h4>
    <form onSubmit={getSearch} action="" className="search-form">
       <input placeholder="Search Recipes. ex: Pasta" type="text" className="search-bar" value={search} onChange={updateSearch}/>
       <button type="submit" className="search-button" >
         Search</button>
       </form> 
    </div>
    
       <div className="recipes">
       {recipes.map(recipe =>(
            <Recipe
             key={recipe.recipe.calories}
             title={recipe.recipe.label} 
             calories={recipe.recipe.calories} 
             image = {recipe.recipe.image}
             ingredients={recipe.recipe.ingredients}
             />
       ))}
</div>
    </div>
  )
}

export default App;
