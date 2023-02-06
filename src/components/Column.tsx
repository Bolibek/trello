import { useRef } from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "../app/AppStateContext";
import { useItemDrag } from "../hooks/useItemDrag";
import { useDrop } from "react-dnd";
import { DragItem } from "../DragItem";
import { isHidden } from "../utils/isHidden";
import { ColumnContainer, ColumnTitle } from "../styles";

interface ColumnProps {
	text: string;
	index: number;
	id: string;
	isPreview?: boolean;
}

export const Column = ({ text, index, id, isPreview }: ColumnProps) => {
	const { state, dispatch } = useAppState();
	const tasks = state.lists[index].tasks;
	const ref = useRef<HTMLDivElement>(null);
	const { drag } = useItemDrag({ type: "COLUMN", id, index, text });
	drag(ref);
	const [, drop] = useDrop({
		accept: "COLUMN",
		hover(item: DragItem) {
			const dragIndex = item.index;
			const hoverIndex = index;
			if (dragIndex === hoverIndex) {
				return;
			}
			dispatch({
				type: "MOVE_LIST",
				payload: { dragIndex, hoverIndex },
			});
			item.index = hoverIndex;
		},
	});
	drag(drop(ref));
	// console.log(isPreview)
	return (
		<ColumnContainer
			isHidden={isHidden(isPreview, state.draggedItem, "COLUMN", id)}
			ref={ref}//
		className={`bg-[#ebecf0] w-60 min-h-10 mr-5 rounded-sm p-2
			${isPreview ? "origin-top-left rotate-6" : "origin-top-left rotate-0"
			}`}
		>
			<ColumnTitle> {text} </ColumnTitle>
			{tasks.map((task) => (
				<Card text={task.text} key={task.id} />
			))}
			<AddNewItem
				toggleButtonText="+ Add another card"
				onAdd={(text) =>
					dispatch({ type: "ADD_TASK", payload: { text, taskId: id } })
				}
				dark
			/>
		</ColumnContainer>
	);
};
