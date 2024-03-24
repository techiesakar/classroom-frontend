import { useEffect } from "react"

const useEscapeKeyPress = (fn: () => void): void => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key == "Escape") {
                fn()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [fn])
}
export default useEscapeKeyPress