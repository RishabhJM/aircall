import React, { useState, useEffect } from "react";

import CallDetails from "./call-details.jsx";
import ArchiveAll from "./archiveall.jsx";

const CallContainer = () => {
  const [data,setData] = useState([]);

  useEffect(() => {
      fetch('https://cerulean-marlin-wig.cyclic.app/activities')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.log(error));
  }, []);
    const archived = data.filter((data) => data.is_archived===true);
    const notArchived = data.filter((data) => data.is_archived===false);  
    // console.log(notArchived);
    const archiveAll = ()=> {
        notArchived.forEach((data) => data.is_archived=true);
    }
    // console.log(notArchived);
    // const archiveAll = () => {
    //     const updatedData = notArchived.map((item) => ({
    //       ...item,
    //       is_archived: true,
    //     }));
    //     setData([...archived, ...updatedData]);
    //   };
  return (
    <div className="call-container">
      <ArchiveAll onClick={archiveAll}></ArchiveAll>
      {notArchived.map((call, index) => (
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
