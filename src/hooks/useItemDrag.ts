import { useEffect } from "react"
import { useDrag } from "react-dnd"
import { useAppState } from "../app/AppStateContext"
import { DragItem } from "../DragItem"
import { getEmptyImage } from "react-dnd-html5-backend"

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState()
  const [, drag, preview] = useDrag(() => ({
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
  // useEffect(() => {
  //   preview(getEmptyImage(), { captureDraggingState: true });
  // }, [preview]);
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