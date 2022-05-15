import { useState } from "react";

export const useItemStatus = (initialState: boolean) => {
    const [isActive, setIsActive] = useState(initialState);

    const active = () => {
        setIsActive(true)
    }

    const disactive = () => {
        setIsActive(false)
    }

    return [ isActive, active, disactive ]
}