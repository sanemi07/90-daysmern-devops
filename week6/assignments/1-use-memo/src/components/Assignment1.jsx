import { useMemo, useState } from "react";

export function Assignment1() {
    const [input, setInput] = useState(0);

    // Pure factorial function
    function factorial(n) {
        if (n < 0) return 0;        // handle negative case
        if (n === 0) return 1;      // base case
        return n * factorial(n - 1);
    }

    const result = useMemo(() => {
        return factorial(input);
    }, [input]);

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {result}</p>
        </div>
    );
}
