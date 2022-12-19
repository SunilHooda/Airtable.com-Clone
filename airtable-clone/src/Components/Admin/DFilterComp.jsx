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
      <div>
        <h3>Filter Components</h3>
        <div>
          <div>
            <input
              type="checkbox"
              value="admin"
              checked={userType.includes("admin")}
              onChange={handleFilterCheckbox}
            />
            <label htmlFor="">admin</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="user"
              checked={userType.includes("user")}
              onChange={handleFilterCheckbox}
            />
            <label htmlFor="">user</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DFilterComp;
