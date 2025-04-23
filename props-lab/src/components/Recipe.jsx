import { List, ListItem, ListItemIcon, ListItemText, Typography, 
	Card, CardHeader, CardContent, CardActions} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function RecipeInfo(ingredients, instructions){
	let instructionCount = 1;

	return (
		<div style={{marginLeft:15}}>
			<Typography variant='subtitle1' component="h3">Ingredients:</Typography>
			<List dense>
				{
					ingredients.map(ingredient => (
						<ListItem >
							<ListItemIcon>
								<AddIcon fontSize='small'></AddIcon>
							</ListItemIcon>
							<ListItemText primary={ingredient}></ListItemText>
						</ListItem>
					))
				}
			</List>
			<Typography variant='subtitle1' component="h3">Instructions:</Typography>
			<List dense>
				{
					instructions.map(instruction => (
						<ListItem >
							<ListItemIcon>
								{instructionCount++}.
							</ListItemIcon>
							<ListItemText primary={instruction}></ListItemText>
						</ListItem>
					))
				}
			</List>
		</div>
	)
}

function Glaze(optionalGlaze){

	if (optionalGlaze === undefined){
		return null;
	}
	return (
		<>
			<Typography variant='h6' component="h2" color='secondary' sx={{textAlign:'center', margin:'10px 0'}}>{optionalGlaze.name}</Typography>
			{RecipeInfo(optionalGlaze.ingredients, optionalGlaze.instructions)}
		</>
	)
}

function Recipe({recipe: {name, ingredients, instructions, optionalGlaze}}) {

	
    return (
        <Card sx={{maxWidth:'60%', margin:'30px 0'}}>
			<CardHeader title={name} sx={{textAlign:'center'}} slotProps={{title:{color:'primary'}}} ></CardHeader>
			<CardContent>
				{RecipeInfo(ingredients, instructions)}
				{Glaze(optionalGlaze)}
			</CardContent>

		</Card>
    )
}

export default Recipe;