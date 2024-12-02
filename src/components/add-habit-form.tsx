import React from 'react';
import { useState } from'react';
import { Box, TextField, FormControl, Select, MenuItem, Button, InputLabel } from '@mui/material';
import { AppDispatch } from '../store/store';
import { useDispatch } from 'react-redux';
import { addHabit } from '../store/habit-slice';



 const AddHabitForm: React.FC = () => {
	const [name, setName] = useState<string>('');
 	const [frequency, setFrequency] = useState<'daily'|'weekly'>('daily');
	const dispatch = useDispatch<AppDispatch>();
	
	const handleSubmit =(e:React.FormEvent)=>{
		e.preventDefault();
    if(name.length !==0){
      dispatch(
				addHabit({ name, frequency })
			);
			setName('');
		}else{
			alert('Write some habit, please!')
		}
	};

	return (
		<form onSubmit={handleSubmit}>
		  <Box 
				sx={{
					display: "flex",
					flexDirection: 'column',
					gap: 2,
				}}
			>
			  <TextField 
				  fullWidth
					label='habit name'
					value={name}
					placeholder='Enter habit name'
					onChange={(e) => setName(e.target.value)}
				/>
				<FormControl fullWidth variant='outlined'>
					<InputLabel>Frequency</InputLabel>
					<Select
						value={frequency}
						label='Frequency'
						onChange={(e)=>setFrequency(e.target.value as 'daily' | 'weekly')}>
							<MenuItem value='daily'>Daily</MenuItem>
							<MenuItem value='weekly'>Weekly</MenuItem>
					</Select>
				</FormControl>
				<Button 
					type='submit' 
					variant='contained' 
					color='primary' 
				>
						Add Habit
				</Button>
			</Box>
		</form>
	)
};

export default AddHabitForm;