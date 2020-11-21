import react, {useState, useEffect} from "react";
import axios from "axios";

export default () => {
    const [inputData, setInputData] = useState({})

    useEffect(()=> {
        console.log("inputData", inputData);
    }, [inputData])

    useEffect(async ()=> {
        const config = {
            method: 'get',
            url: 'http://localhost:3001/sponsorContact/yyyyy/auth0|5f45ed24951664006767b8c8',
            headers: { 
              'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ii1XWFJiYVhQY2VDc1NCX3pMSHdNRSJ9.eyJodHRwczovL3d3dy5jb25mZXJlbmNpZnkuY29tL2FwcF9tZXRhZGF0YSI6eyJyb2xlcyI6WyJTeXN0ZW0gQWRtaW4iXX0sImlzcyI6Imh0dHBzOi8vYXV0aC5zdGFnaW5nLmNvbmZlcmVuY2lmeS5pby8iLCJzdWIiOiJhdXRoMHw1ZjQ1ZWQyNDk1MTY2NDAwNjc2N2I4YzgiLCJhdWQiOlsiaHR0cHM6Ly9hcGkuY29uZmVyZW5jaWZ5IiwiaHR0cHM6Ly9jb25mZXJlbmNlLXRlc3QuYXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTYwNTk4MDU3MiwiZXhwIjoxNjA2MDY2OTcyLCJhenAiOiJydjhRRTVQalc5bUtGV2t2WEo3YzhwR1N5RmNKRXdKbCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgb2ZmbGluZV9hY2Nlc3MifQ.WlyMtLivKT-VuFzmVGmyjT530ww-GuVkRb10lHM4rgFK70FJrEANr3uiGDlPX8ilVAtXZXZjkOVjZWBMay6O1gnn6UBykU3drgEHreEqiintWtasRAAO-vLpOTS2fbpSwb2dG7fK8trhHXB0jj39sjMYllONCL1TiX8cbsYRlgjOcVnoQ4ddqOiZxl60pLxvkk6CwPLiwuxhskiNopHahdk5qXzLBay3MTSK3LkM9KGNt0sH_Dfbiwd4OldiwAOahtvuYdEXmOeXr8uKxKB19zaavu2lH9p4enUO6hbWA6aSdKRYu9RT10X0ujVQEw1pEVnqaxKjhtJZS2-yKYee1g', 
              "Content-Type": "application/json", 
              'x-conference-id': '9'
            },
        };
        const response = await axios(config);
        setInputData(response.data)
    }, [])

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
            url: 'http://localhost:3001/sponsorContact',
            headers: { 
              'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ii1XWFJiYVhQY2VDc1NCX3pMSHdNRSJ9.eyJodHRwczovL3d3dy5jb25mZXJlbmNpZnkuY29tL2FwcF9tZXRhZGF0YSI6eyJyb2xlcyI6WyJTeXN0ZW0gQWRtaW4iXX0sImlzcyI6Imh0dHBzOi8vYXV0aC5zdGFnaW5nLmNvbmZlcmVuY2lmeS5pby8iLCJzdWIiOiJhdXRoMHw1ZjQ1ZWQyNDk1MTY2NDAwNjc2N2I4YzgiLCJhdWQiOlsiaHR0cHM6Ly9hcGkuY29uZmVyZW5jaWZ5IiwiaHR0cHM6Ly9jb25mZXJlbmNlLXRlc3QuYXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTYwNTk4MDU3MiwiZXhwIjoxNjA2MDY2OTcyLCJhenAiOiJydjhRRTVQalc5bUtGV2t2WEo3YzhwR1N5RmNKRXdKbCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgb2ZmbGluZV9hY2Nlc3MifQ.WlyMtLivKT-VuFzmVGmyjT530ww-GuVkRb10lHM4rgFK70FJrEANr3uiGDlPX8ilVAtXZXZjkOVjZWBMay6O1gnn6UBykU3drgEHreEqiintWtasRAAO-vLpOTS2fbpSwb2dG7fK8trhHXB0jj39sjMYllONCL1TiX8cbsYRlgjOcVnoQ4ddqOiZxl60pLxvkk6CwPLiwuxhskiNopHahdk5qXzLBay3MTSK3LkM9KGNt0sH_Dfbiwd4OldiwAOahtvuYdEXmOeXr8uKxKB19zaavu2lH9p4enUO6hbWA6aSdKRYu9RT10X0ujVQEw1pEVnqaxKjhtJZS2-yKYee1g', 
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