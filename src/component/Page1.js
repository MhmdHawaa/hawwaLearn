import react, {useState, useEffect} from "react";
import axios from "axios"
import Head from  "./Head";
import PostExample from  "./PostExample";
import PutExample from  "./PutExample";
import Form from "./Form";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

const Page1 = () => {
    let { id } = useParams();
    console.log("idddddddd", id)
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [products, setProducts] = useState({});
  const [flag, setFlag] = useState(false);

//   useEffect(async () => {
//     setX("changed first render")
//     setFlag(true);
//     setY("changed first render")

//     const response= await axios({method: 'get',	url: 'https://reqres.in/api/products',});
//     setProducts(response.data)

//   }, [])

  return (
    <div>
      x: {x}
      <Head setY={setY} flag={flag}/>
      <div>y:{y}</div>
      {products.data ? products.data[0].name : 'no response yet'}
      <PostExample />
      <PutExample />
      <Form />
    </div>
  );
}

export default Page1;
