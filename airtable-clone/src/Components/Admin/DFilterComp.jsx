import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const DFilterComp = () => {
  const [serchParams, setSearchParams] = useSearchParams();

  const initialUserType = serchParams.getAll("userType");

  const [userType, setUserType] = useState(initialUserType || []);

  const handleFilterCheckbox = (e) => {
    const newCategories = [...userType];

    if (newCategories.includes(e.target.value)) {
      newCategories.splice(newCategories.indexOf(e.target.value), 1);
    } else {
      newCategories.push(e.target.value);
    }
    setUserType(newCategories);
  };

  useEffect(() => {
    let params = {};
    params.userType = userType;

    setSearchParams(params);
  }, [userType, setSearchParams]);

  return (
    <div>
      <div style={{width:"30%",margin:"auto"}}>
        <h3 style={{color:"#3174ac",fontSize:"25px",fontFamily:"bold"}}>Filter Components</h3>
        <div style={{textAlign:"left",marginLeft:"100px",marginBottom:"20px"}}>
          <div >
            <input 
              type="checkbox"
              value="admin"
              checked={userType.includes("admin")}
              onChange={handleFilterCheckbox}
            />
            <label style={{color:"black",fontSize:"20px",fontFamily:"bold",marginLeft:"5px"}} htmlFor="">Admin</label>
          </div>
          <div >
            <input
           
              type="checkbox"
              value="user"
              checked={userType.includes("user")}
              onChange={handleFilterCheckbox}
            />
            <label style={{color:"black",fontSize:"20px",fontFamily:"bold",marginLeft:"5px"}} htmlFor="">User</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DFilterComp;
