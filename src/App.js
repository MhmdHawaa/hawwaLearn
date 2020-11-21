import react, {useState, useEffect} from "react";
import axios from "axios"
import Head from  "./component/Head";
import PostExample from  "./component/PostExample";
import PutExample from  "./component/PutExample";

function App() {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [products, setProducts] = useState({});
  const [flag, setFlag] = useState(false);

  useEffect(async () => {
    setX("changed first render")
    setFlag(true);
    setY("changed first render")

    const response= await axios({method: 'get',	url: 'https://reqres.in/api/products',});
    setProducts(response.data)

  }, [])

  return (
    <div>
      x: {x}
      <Head setY={setY} flag={flag}/>
      <div>y:{y}</div>
      {products.data ? products.data[0].name : 'no response yet'}
      <PostExample />
      <PutExample />
    </div>
  );
}

export default App;
