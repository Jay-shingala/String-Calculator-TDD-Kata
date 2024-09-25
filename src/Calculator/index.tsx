import React, { useState } from 'react';
import { add } from '../stringCalculator';

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCalculate = () => {
        try {
            const sum = add(input);
            setResult(sum);
            setError(null);
        } catch (e:any) {
            setError(e.message);
            setResult(null);
        }
    };

    return (
        <div>
            <h1>String Calculator</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter string"
            />
            <button onClick={handleCalculate}>Calculate</button>
            {result !== null && <p>Sum: {result}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Calculator;
