import Recipe from "./Recipe.jsx";
function RecipeContainer({recipes}) {

    return (
        <div>
            {
                recipes.map( recipe => (
                    <Recipe recipe={recipe}></Recipe>
                ))
            }
        </div>
    )
}

export default RecipeContainer;