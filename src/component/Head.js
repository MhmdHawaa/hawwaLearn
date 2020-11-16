import react, {useState, useEffect} from "react";

export const Bottom = () => {
    return (
        <div>
            ana lBotooooom
        </div>
    )
}

const Head = (props) => {
    const {setY, flag} = props;
    const [z, setZ] = useState()

    useEffect(()=> {
            console.log("childddddddddd")
        if(flag) {
            console.log("inside if in child")
            setY("changed by child Head on his first render")
        }
    }, [flag])

    function onChangehandler(event) {
        setY(event.target.value)
    }
    function clickHandler() {
        setY("the child in button changed me")
    }

    return (
        <div>
            ana lheadddddddddddddd z: {z}
        <button onClick={clickHandler}>child click</button>
        <input type='text' onChange={event => onChangehandler(event)}/>
        </div>
    )
}

export default Head;