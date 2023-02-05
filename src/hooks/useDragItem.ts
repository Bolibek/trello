import { useDrag } from "react-dnd"
import { useAppState } from "../app/AppStateContext"
import { DragItem } from "../DragItem"
export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState()
  const [, drag] = useDrag(() => ({
    type: item.type,
    item: () => {
      dispatch({
        type: "SET_DRAGGED_ITEM",
        payload: item
      })
      return item
    },
    end: () => dispatch({
      type: "SET_DRAGGED_ITEM", payload: undefined
    })
  }))
  // begin: () =>
  //   dispatch({
  //     type: " SET_DRAGGED_ITEM",
  //     payload: item
  //   }),
  // end: () => dispatch({
  //   type: " SET_DRAGGED_ITEM", payload: undefined
  // })
  return { drag }
}