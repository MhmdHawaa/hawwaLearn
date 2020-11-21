import react, {useState, useEffect} from "react";

const Head = ({setY, flag}) => {
    const [z, setZ] = useState()

    useEffect(()=> {
        if(flag) {
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
            ana lhead z: {z}
            <button onClick={clickHandler}>Head child click</button>
            <input placeholder="y of head" type='text' onChange={event => onChangehandler(event)}/>
        </div>
    )
}

export default Head;