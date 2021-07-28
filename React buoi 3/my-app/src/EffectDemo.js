import React, { useEffect, useState } from "react";

export default function EffectDemo() {

    const [person, setPerson] = useState({
        name: "name",
        age: "age"
    });

    useEffect(() => {
        console.log("useEffect has been called!");
        setPerson({ name: "Thuc", age: "23" });
    }, []);

    return (
        <div style={{ margin: "200px", textAlign: "center" }}>
            <h1>Title: Thuc dep trai</h1>
            <h2>Name: {person.name}</h2>
            <h2>Age: {person.age}</h2>
        </div>
    );
}
