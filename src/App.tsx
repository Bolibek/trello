import Navbar from "./components/Navbar";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./app/AppStateContext";
import CustomDragLayer from "./components/CustomDragLayer";
const App = () => {
	const { state, dispatch } = useAppState();
	return (
		<div className=" bg-[#3179ba] h-full w-full">
			<Navbar />
			<CustomDragLayer />
			<div className=" flex flex-row w-full bg-transparent items-start pt-5 px-5">
				{state.lists.map((list, i) => (
					<Column isPreview={false} id={list.id} text={list.text} key={list.id} index={i} />
				))}
				<AddNewItem toggleButtonText="+ Add another list" onAdd={text => dispatch({ type: "ADD_LIST", payload: text })} />
			</div>
		</div>

	);
};

export default App;
