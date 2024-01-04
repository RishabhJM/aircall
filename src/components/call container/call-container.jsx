import React, {useState, useEffect} from "react";

import CallDetails from "./call-details.jsx";
import ArchiveAll from "./archiveall.jsx";

const TEMP = [{"direction":"outbound","from":100000,"to":200000,"via":30000000,"duration":0,"call_type":"missed","is_archived":true,"id":"6393bb5469073dc45849ca7a","created_at":"2022-12-09T22:48:52.789Z"},{"direction":"inbound","from":100001,"to":200002,"via":30000003,"duration":10,"is_archived":false,"call_type":"answered","id":"6393bb7b69073dc45849ca7c","created_at":"2022-12-09T22:49:31.911Z"},{"direction":"inbound","from":100001,"to":200001,"via":30000001,"duration":0,"is_archived":false,"call_type":"missed","id":"639737ac587edc08100c026f","created_at":"2022-12-12T14:16:12.721Z"},{"direction":"inbound","from":100002,"to":200002,"via":30000002,"duration":20,"is_archived":false,"call_type":"voicemail","id":"63973961362d5c09cd79364a","created_at":"2022-12-12T14:23:29.409Z"}]


const CallContainer = ()=> {

    // const [data,setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://cerulean-marlin-wig.cyclic.app/activities')
    //     .then(response => response.json())
    //     .then(json => setData(json))
    //     .catch(error => console.log(error));
    // }, []);

    return(
        <div className="call-container">
            <ArchiveAll></ArchiveAll>
            {TEMP.map((call, index) => (
            <CallDetails
                key={index}
                call_type={call.call_type}
                direction={call.direction}
                is_archived={call.is_archived}
                duration={call.duration}
                created_at={call.created_at}
                from={call.from}
                to={call.to}
                via={call.via}
            />
            ))}
        </div>
    );
};

export default CallContainer;