import styled from "styled-components";

interface AddItemButtonProps {
	dark?: boolean;
}

interface DragPreviewContainerProps {
	isHidden?: boolean
}

  // transform: ${ props => (props.isPreview? "rotate(5deg)" : undefined) } ;

export const ColumnContainer = styled.div<DragPreviewContainerProps>`
	opacity: ${props => (props.isHidden ? 0 : 1)} ;
	flex-grow: 0;
`

export const CustomDragLayerContainer = styled.div`
	height: 100%;
	left: 0;
	pointer-events: none;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 100;
`

export const ColumnTitle = styled.div`
	padding: 6px 16px 12px;
	font-weight: bold;
`;

export const CardContainer = styled.div`
	background-color: #fff;
	cursor: pointer;
	margin-bottom: 0.5rem;
	padding: 0.5rem 1rem;
	max-width: 350px;
	border-radius: 3px;
	box-shadow: #091e4240 0px 1px 0px 0px;
`;

export const AddItemButton = styled.button<AddItemButtonProps>`
	background-color: #ffffff3d;
	border-radius: 3px;
	border: none;
	color: ${(props) => (props.dark ? "#000" : "#fff")};
	cursor: pointer;
	max-width: 300px;
	padding: 10px 12px;
	text-align: left;
	transition: background 85ms ease-in;
	width: 100%;
	&:hover {
		background-color: #ffffff52;
	}
`;

export const NewItemFormContainer = styled.div`
	max-width: 350px;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-start;
`;

export const NewItemButton = styled.button`
	background-color: #5aac44;
	border-radius: 3px;
	border: none;
	box-shadow: none;
	color: #fff;
	padding: 6px 12px;
	text-align: center;
`;

export const NewItemInput = styled.input`
border-radius: 3px;
border: none;
box-shadow: #091e4240 0px 1px 0px 0px;
margin-bottom: 0.5rem;
padding: 0.5rem 1rem;
width: 100%;
`



export const CreatContainer = styled.div`
  background-color: #ffffff35;
	border: 1px solid white;
	padding: 5px;
	border-radius: 5px;
`

