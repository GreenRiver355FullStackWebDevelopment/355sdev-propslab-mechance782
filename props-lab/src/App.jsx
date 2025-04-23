import RecipeContainer from './components/RecipeContainer.jsx';
import { recipes } from './data/data.js';
function App() {

  return (
    <>
      <RecipeContainer recipes={recipes} />
    </>
  )
}

export default App
