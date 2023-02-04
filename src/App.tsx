import Navbar from "./components/Navbar";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./app/AppStateContext";
import { BoardContainer, AppContainer } from "./styles";
const App = () => {
	const { state, dispatch } = useAppState();
	return (
		<AppContainer>
			<Navbar />
			<BoardContainer>
				{state.lists.map((list, i) => (
					<Column id={list.id} text={list.text} key={list.id} index={i} />
				))}
				<AddNewItem toggleButtonText="+ Add another list" onAdd={text => dispatch({ type: "ADD_LIST", payload: text })} />
			</BoardContainer>
		</AppContainer>

	);
};

export default App;
