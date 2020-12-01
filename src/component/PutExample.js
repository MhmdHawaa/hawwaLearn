import react, {useState, useEffect} from "react";
import axios from "axios";

export default () => {
    const [inputData, setInputData] = useState({})

    // useEffect(()=> {
    //     console.log("inputData", inputData);
    // }, [inputData])

    // useEffect(async ()=> {
    //     const config = {
    //         method: 'get',
    //         url: 'http://192.168.1.53:3001/sponsorContact/yyyyy/auth0|5f45ed24951664006767b8c8',
    //         headers: { 
    //           'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ii1XWFJiYVhQY2VDc1NCX3pMSHdNRSJ9.eyJodHRwczovL3d3dy5jb25mZXJlbmNpZnkuY29tL2FwcF9tZXRhZGF0YSI6eyJyb2xlcyI6WyJTeXN0ZW0gQWRtaW4iXX0sImlzcyI6Imh0dHBzOi8vYXV0aC5zdGFnaW5nLmNvbmZlcmVuY2lmeS5pby8iLCJzdWIiOiJhdXRoMHw1ZjQ1ZWQyNDk1MTY2NDAwNjc2N2I4YzgiLCJhdWQiOlsiaHR0cHM6Ly9hcGkuY29uZmVyZW5jaWZ5IiwiaHR0cHM6Ly9jb25mZXJlbmNlLXRlc3QuYXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTYwNjA3OTgxNSwiZXhwIjoxNjA2MTY2MjE1LCJhenAiOiJydjhRRTVQalc5bUtGV2t2WEo3YzhwR1N5RmNKRXdKbCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgb2ZmbGluZV9hY2Nlc3MifQ.h56CfMxK_pL0hU3xUUs6kK8E-REBou-0GRlxAX6f782AGzlpW5V7L2qQqGu6qpQHzu-8T_0qFc5YWtYihf_0ryE1gNWb510QUSCo3W6cjBx6Y8FX--y7ln52WO0B1jtoWR2EgEKLTWBPykE7aH8JZZPP-5D9Hs0q9rD7DX5CNlMegtN-xsrWCC9TL1z6bqZdWObcYCQyK0FMk9BeEeHcZsnxgjU5K-h6z05P9Pjr0Q2LqisaFDtFBqr4qoortGUROJW-UDKjcQNsqFi7EL0DJBe1wswbR5XgtEgYJcx3bMT9NL6hYyc5ydKSupclrR8aLcwHdqLENph8D_N4vioVRw', 
    //           "Content-Type": "application/json", 
    //           'x-conference-id': '9'
    //         },
    //     };
    //     const response = await axios(config);
    //     setInputData(response.data)
    // }, [])

    function onChangehandler(event) {
        setInputData({sponsorBoothId: event.target.value});
    }
    function onChangehandler2(event) {
        setInputData({...inputData, message: event.target.value});
    }

    async function clickHandler() {
        const payload = {
            "sponsor_booth_id": inputData.sponsorBoothId,
            "contact_user_id": inputData.contactuserId,
            "contact_phone_number": inputData.contactPhoneNumber,
            "message": inputData.message
           };
        const config = {
            method: 'put',
            url: 'http://192.168.1.53:3001/sponsorContact',
            headers: { 
              'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ii1XWFJiYVhQY2VDc1NCX3pMSHdNRSJ9.eyJodHRwczovL3d3dy5jb25mZXJlbmNpZnkuY29tL2FwcF9tZXRhZGF0YSI6eyJyb2xlcyI6WyJTeXN0ZW0gQWRtaW4iXX0sImlzcyI6Imh0dHBzOi8vYXV0aC5zdGFnaW5nLmNvbmZlcmVuY2lmeS5pby8iLCJzdWIiOiJhdXRoMHw1ZjQ1ZWQyNDk1MTY2NDAwNjc2N2I4YzgiLCJhdWQiOlsiaHR0cHM6Ly9hcGkuY29uZmVyZW5jaWZ5IiwiaHR0cHM6Ly9jb25mZXJlbmNlLXRlc3QuYXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTYwNjA3OTgxNSwiZXhwIjoxNjA2MTY2MjE1LCJhenAiOiJydjhRRTVQalc5bUtGV2t2WEo3YzhwR1N5RmNKRXdKbCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgb2ZmbGluZV9hY2Nlc3MifQ.h56CfMxK_pL0hU3xUUs6kK8E-REBou-0GRlxAX6f782AGzlpW5V7L2qQqGu6qpQHzu-8T_0qFc5YWtYihf_0ryE1gNWb510QUSCo3W6cjBx6Y8FX--y7ln52WO0B1jtoWR2EgEKLTWBPykE7aH8JZZPP-5D9Hs0q9rD7DX5CNlMegtN-xsrWCC9TL1z6bqZdWObcYCQyK0FMk9BeEeHcZsnxgjU5K-h6z05P9Pjr0Q2LqisaFDtFBqr4qoortGUROJW-UDKjcQNsqFi7EL0DJBe1wswbR5XgtEgYJcx3bMT9NL6hYyc5ydKSupclrR8aLcwHdqLENph8D_N4vioVRw', 
              "Content-Type": "application/json", 
              'x-conference-id': '9'
            },
            data : payload
        };
        const resp = await axios(config);
    }
    
    return (
        <div style={{marginTop: '50px'}}>
            ana lBottom
            <input value={inputData.sponsorBoothId} placeholder="sponsor booth id of Bottom" type='text' onChange={event => onChangehandler(event)}/>
            <input value={inputData.message} placeholder="message of Bottom" type='text' onChange={event => onChangehandler2(event)}/>
            <button onClick={clickHandler}>Bottom child post api</button>
        </div>
    )
}