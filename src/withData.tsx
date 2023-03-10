import { PropsWithChildren, ComponentType } from "react"
import { AppState } from "./app/AppStateContext"

export const withData = (
  WrappedComponent: ComponentType<PropsWithChildren<{ initialState: AppState }>>
) => {
  return ({ children }: PropsWithChildren<{}>) => {
    const initialState: AppState = { lists: [], draggedItem: undefined }
    // Here will go the logic of our HOC
    return (
      <WrappedComponent initialState={initialState} >
        {children}
      </WrappedComponent>
    )
  }
}