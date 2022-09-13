import { useRef, useEffect } from "react"
import { cell } from './../interface/interface';


export const useInterval = (delau: number, callback: any, grid: any, click: any) => {

    const saveCallback = useRef()

    useEffect(() => {
        saveCallback.current = callback
    }, [callback])

    useEffect(() => {
        function tick() {
            saveCallback.current
        }
        if (!click) {
            if (delau !== null) {
                let id = setInterval(callback, delau)
                return (() => clearInterval(id))
            }
        }
    }, [delau, grid, click])
}