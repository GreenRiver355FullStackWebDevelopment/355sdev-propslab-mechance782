import { List, ListItem, ListItemIcon, ListItemText, Typography, 
	Card, CardHeader, CardContent, CardActions} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function Glaze(optionalGlaze){
	let instructionCount = 1;
	if (optionalGlaze === undefined){
		return null;
	}
	return (
		<>
		<Typography variant='h6' component="h2">{optionalGlaze.name}</Typography>
		<Typography variant='subtitle1' component="h3">Ingredients:</Typography>
			<List dense>
				{
					optionalGlaze.ingredients.map(ingredient => (
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
					optionalGlaze.instructions.map(instruction => (
						<ListItem >
							<ListItemIcon>
								{instructionCount++}.
							</ListItemIcon>
							<ListItemText primary={instruction}></ListItemText>
						</ListItem>
					))
				}
			</List>
		</>
	)
}

function Recipe({recipe: {name, ingredients, instructions, optionalGlaze}}) {

	let instructionCount = 1;
	
    return (
        <Card sx={{minWidth:300}}>
			<CardHeader title={name}></CardHeader>
			<CardContent>
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
				{Glaze(optionalGlaze)}
			</CardContent>

		</Card>
    )
}

export default Recipe;