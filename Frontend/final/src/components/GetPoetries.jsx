import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const GetPoetries = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/getAllPoetries"
        );
        if (response.status === 200) {
          setData(response.data.getAllPoet);
        }
      } catch {
        console.log(Error);
      }
    };
    {
        console.log(fetchData())
    }
}, []);
  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col">
      <div className="">
        <Link
          to={"/CreatePoetry"}
          className="bg-slate-200 px-4 py-2 text-base text-black"
        >
          Add +
        </Link>
      </div>
      <div className="bg-white w-3/6 p-4 mt-4">
        <div className="flex flex-col gap-3">
          {data.map((index) => (
            <div key={index.id}>
              <h1 className="text-black text-2xl font-semibold">
                Name: {index.Author}{" "}
              </h1>
              <h1 className="text-black text-xl font-semibold">
                Title:{index.Title}
              </h1>
              <p className="text-black text-lg">Poetry:{index.Poetry}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetPoetries;
