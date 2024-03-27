import {useState} from "react";

interface Message {
    h1Message: string;
}
const InputBox = ({h1Message}: Message) => {
    return (
        <>
            <h1>{h1Message}</h1>
        </>
    )
};

function handleInput(input: string) {
    console.log(input);
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
}

export const FancyInputBox = () => {
    const [input, setInput] = useState("");

    return (
        <div>
            <InputBox h1Message={"Type your blog here"}/>
            <input placeholder="your input" onChange={(e) => setInput(e.target.value)}/>
            <button onClick={() => handleInput(input)}>Click here!</button>
        </div>
    )
};


// const modalContent = { key:" value" }
