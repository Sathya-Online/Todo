import { useEffect, useState } from "react";


function ToDo(props){

    const [val1, setVal1] = useState(props.val1);
    const [val2, setVal2] = useState(props.val2);

    //Triggered only once during mounting
    useEffect(() => {
        console.log("useEffect as mounting phase");
    }, []);

    //Triggered only when val1 state changes
    useEffect(() => {
        console.log("useEffect for value 1: "+val1);
    }, [val1]);

    //Triggered Everytime
    useEffect(() => {
        console.log("useEffect everytime");
    });

    const handleValue1 = (event) => {
        setVal1(event.target.value)
    }

    const handleValue2 = (event) => {
        setVal2(event.target.value)
    }

    return (
        <>
            <h1>ToDo</h1>
            <div>
                <input  type="text" onChange={handleValue1} placeholder="Add a todo" />
                <input  type="text" onChange={handleValue2} placeholder="Add a todo" />
                <h3>Value1: {val1}</h3>
                <h3>Value2: {val2}</h3>
            </div>
        </>
    );
}

export default ToDo;