import { useState } from "react"

// 1
// callback: Your side effect function
// dependencies: Only execute callback if one of your dependencies changes
function useEffect(callback, dependencies) { }

// 2
function App() {
    // executed before each render
    const [color, setColor] = useState('red');
    // executed after each render
    useEffect(() => {
        // do your side effect here ...
        return () => {
            // Clean up here ...
            // Executed before the next render or unmount
        };
    }, []);
    // rendering
    return <h1>Easy Frontend</h1>;
}

// MOUNTING
//     - rendering
//     - run useEffect()
// UPDATING
//     - rendering
//     - run`useEffect() cleanup` nếu dependencies thay đổi.
//     - run`useEffect()` nếu dependencies thay đổi.
// UNMOUNTING
//     - run`useEffect() cleanup`.

// 3. useEffect() kèm điều kiện
function App2() {
    const [filters, setFilters] = useState();
    useEffect(() => {
        // EVERY
        // No dependencies defined
        // Always execute after every render
        return () => {
            // Execute before the next effect or unmount.
        };
    });

    useEffect(() => {
        // ONCE
        // Empty dependencies
        // Only execute once after the FIRST RENDER

        return () => {
            // Execute once when unmount
        };
    }, []);

    useEffect(() => {
        // On demand
        // Has dependencies
        // Only execute after the first RENDER or filters state changes
        return () => {
            // Execute before the next effect or unmount.
        };
    }, [filters]);
}

// App => Student => Pen