import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.taskWrapper}>
				<Text style={styles.sectionTitle}>Today's task</Text>

				<View style={styles.items}>
					<Task text={'task 1'} />
					<Task text={'task 2'} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e8eaed',
	},
	taskWrapper: {
		paddingTop: 80,
		paddingHorizontal: 20,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	items: {
		marginTop: 10,
	},
});
