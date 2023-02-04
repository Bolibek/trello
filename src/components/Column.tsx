import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "../app/AppStateContext";

import { ColumnContainer, ColumnTitle } from "../styles";

interface ColumnProps {
	text: string;
	index: number;
	id: string;
}

export const Column = ({ text, index, id }: ColumnProps) => {
	const { state, dispatch } = useAppState();
	const tasks = state.lists[index].tasks
	return (
		<ColumnContainer>
			<ColumnTitle> {text} </ColumnTitle>
			{tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
			<AddNewItem
				toggleButtonText="+ Add another card"
				onAdd={text =>
				dispatch({ type: "ADD_TASK", payload: { text, taskId: id } })}
				dark
			/>
		</ColumnContainer>
	);
};
