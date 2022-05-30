import { useState } from "atomico";

export function useDemo(initState: string) {
    const [state, setState] = useState(initState);
    return state;
}
