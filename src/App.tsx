import { Provider } from 'react-redux';
import  store  from './store/store';
import './App.css';
import { Container, Typography } from '@mui/material';
import AddHabitForm from './components/add-habit-form';
import HabitList from './components/habit-list';
import HabitStats from './components/habit-stats';

function App() {
  
  return (
		<Provider store={store}>
    	<Container maxWidth='md'>
				<Typography component='h1' variant='h3' align='center'>
					Habit Tracker
				</Typography>
				<AddHabitForm />
				<HabitList />
				<HabitStats />
			</Container>
		</Provider>
  )
}

export default App
