import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const CreatePoetry = () => {
  const [author, setAuthor] = useState("");
  const [data,postData]  = useState([])
  const [title, setTitle] = useState("");
  const [poetry, setPoetry] = useState("");

  const onHandleClicked = async (e) =>{
    // e.preventDefault();
    const responseSecond = await axios.post("http://localhost:5000/api/v1/createPoetry")
    postData(responseSecond)
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <form className="bg-white w-3/6 p-4 flex flex-col gap-4"
      onSubmit={onHandleClicked()}>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-2xl">Author</label>
          <input
            type="text"
            className="border-black border p-2 focus:outline-none"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </div>
        <div className="flex gap-2 mt-3 flex-col">
          <label className="font-semibold text-2xl">Title</label>
          <input
            type="text"
            className="border-black border p-2 focus:outline-none"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label className="font-semibold text-2xl">Poetry</label>
          <textarea
            className="border-black border p-2 focus:outline-none"
            onChange={(e) => setPoetry(e.target.value)}
            value={poetry}
          />
        </div>
        <div className="mt-22">
          <Link to={"/"} className=" bg-black px-6 py-2 text-base text-white">
            Post
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreatePoetry;
