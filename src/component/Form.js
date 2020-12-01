import react, {useState, useEffect} from "react";
import axios from "axios";

export default () => {
    const [updatedata, setupdatedata] = useState({contactPhoneNumber: '' ,message:'',sponsorBoothId:''})
        
    
     

    //useEffect(()=> {
      //  console.log("updatedata", updatedata);
    //}, [updatedata])

    function onChangehandler(event) {
        setupdatedata({...updatedata, contactPhoneNumber: event.target.value});
    }
    function onChangehandler2(event) {
        setupdatedata({...updatedata, message: event.target.value});
    }
    function onChangehandler3(event) {
        setupdatedata({...updatedata, sponsorBoothId: event.target.value});
    }

    async function clickHandler() {
        const data = {
            'sponsorBoothId': updatedata.sponsorBoothId,
            'contactPhoneNumber': updatedata.contactPhoneNumber,
            'message':updatedata.message,
           };
        const config = {
            method: 'post',
            url: 'http://192.168.1.53:3001/sponsorContact',
            headers: { 
              'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ii1XWFJiYVhQY2VDc1NCX3pMSHdNRSJ9.eyJodHRwczovL3d3dy5jb25mZXJlbmNpZnkuY29tL2FwcF9tZXRhZGF0YSI6eyJyb2xlcyI6WyJTeXN0ZW0gQWRtaW4iXX0sImlzcyI6Imh0dHBzOi8vYXV0aC5zdGFnaW5nLmNvbmZlcmVuY2lmeS5pby8iLCJzdWIiOiJhdXRoMHw1ZjQ1ZWQyNDk1MTY2NDAwNjc2N2I4YzgiLCJhdWQiOlsiaHR0cHM6Ly9hcGkuY29uZmVyZW5jaWZ5IiwiaHR0cHM6Ly9jb25mZXJlbmNlLXRlc3QuYXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTYwNjA3OTgxNSwiZXhwIjoxNjA2MTY2MjE1LCJhenAiOiJydjhRRTVQalc5bUtGV2t2WEo3YzhwR1N5RmNKRXdKbCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgb2ZmbGluZV9hY2Nlc3MifQ.h56CfMxK_pL0hU3xUUs6kK8E-REBou-0GRlxAX6f782AGzlpW5V7L2qQqGu6qpQHzu-8T_0qFc5YWtYihf_0ryE1gNWb510QUSCo3W6cjBx6Y8FX--y7ln52WO0B1jtoWR2EgEKLTWBPykE7aH8JZZPP-5D9Hs0q9rD7DX5CNlMegtN-xsrWCC9TL1z6bqZdWObcYCQyK0FMk9BeEeHcZsnxgjU5K-h6z05P9Pjr0Q2LqisaFDtFBqr4qoortGUROJW-UDKjcQNsqFi7EL0DJBe1wswbR5XgtEgYJcx3bMT9NL6hYyc5ydKSupclrR8aLcwHdqLENph8D_N4vioVRw', 
              "Content-Type": "application/json", 
              'x-conference-id': '9'
            },
            data : data
        };
        const resp = await axios(config);
    }
    
    return (
        <div style={{marginTop: '50px'}}>
            bla bla
            <input placeholder="123 for contactphonenumber" type='text' onChange={event => onChangehandler(event)}/>
            <input placeholder="any for message" type='text' onChange={event => onChangehandler2(event)}/>
            <input  placeholder="any for message" type='text' onChange={event => onChangehandler3(event)}/>
            <button onClick={clickHandler}>Form child</button>
        </div>
    )
}