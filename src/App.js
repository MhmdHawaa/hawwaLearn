import react, {useState, useEffect} from "react";
import Head from  "./component/Head";
import {Bottom} from  "./component/Head";

function App() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("parent")
    setX("changed first render")
    setFlag(true);
    setY("changed first render")
  }, [])

  return (
    <div>
      x: {x}
      <Head setY={setY} flag={flag}/>
      <div>y:{y}</div>

      <Bottom />
    </div>
  );
}

export default App;
