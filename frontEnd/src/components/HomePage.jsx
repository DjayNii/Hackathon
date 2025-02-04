import React, { useEffect, useState } from "react";
import FormsTable from "./FormsTable";
import axios from "axios";

function HomePage() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/files", {
          withCredentials: true, // Ensures cookies are included
        });
        console.log("Fetched data:", response.data);
        setMyData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">Your Forms</h2>
      <button
        type="button"
        className="btn btn-primary"
        style={{ marginBottom: 10 }}
      >
        New
      </button>
      <FormsTable tableData={myData}></FormsTable>
    </div>
  );
}

export default HomePage;
