import { AppState } from "../app/AppStateContext"
export const save = async (payload: AppState) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/save`, {
      method: " POST",
      headers: {
        Accept: " application/json",
        " Content-Type": " application/json",
      },
      body: JSON.stringify(payload),
    })
    return await response.json()
  } catch (message) {
    return console.log(message)
  }
}

export const load = async () => {
  const response = await fetch(` ${process.env.REACT_APP_BACKEND_ENDPOINT} /load`)
  return await (response.json() as Promise<AppState>)
}