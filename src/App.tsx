import { useState } from 'react';

function App() {

    const [state, setState] = useState(1)
    const number: number = 1

    return (
        <div>
            {state}
            <button onClick={() => setState(state + 1)}>Click</button>
        </div>
    );
}

export default App;
