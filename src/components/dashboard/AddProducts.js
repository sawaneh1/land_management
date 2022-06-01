import React, { useState } from "react";
import Header from "./Header";
import img from "../../assets/img/manson.jpeg";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddProducts = () => {
  const history = useHistory();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [imagePath, setImagePath] = useState();
  const [price, setPrice] = useState();

  const [street_address, setStress_address] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const handleFile = (e) => {
    setImagePath(e.target.files[0]);
  };
  const addHouses = (e) => {
    e.preventDefault();

    const url = "http://localhost:5000/create_house";

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("imagePath", imagePath);
    formData.append("country", country);
    formData.append("city", city);
    formData.append("street_address", street_address);

    axios.post(url, formData).then((res) => {
      console.log("res", res);
      history.push("/dashboard");
    });
  };

  return (
    <Header>
      <div className="mt-20 flex   w-full justify-center">
        <form>
          <div className="w-full text-gray-200">
            <div className="mb-4 flex gap-11 items-center ">
              <span className="text-xs block font-bold ">Title:</span>
              <input
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter house title"
                className="bg-gray-100 text-black px-4 block py-2 rounded w-1/2"
              />
            </div>
            <div className="mb-4 flex gap-11 items-center">
              <span className="text-xs block font-bold ">Price:</span>
              <input
                id="title"
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter house title "
                className="bg-gray-100 px-4 py-2 text-black block rounded w-1/2"
              />
            </div>
            <div className="mb-4 flex gap-11 items-center">
              <span className="text-xs block font-bold ">Stree address:</span>
              <input
                id="title"
                type=""
                onChange={(e) => setStress_address(e.target.value)}
                placeholder="Enter street address "
                className="bg-gray-100 px-4 py-2 text-black block rounded w-1/2"
              />
            </div>
            <div className="mb-4 flex gap-11 items-center">
              <span className="text-xs block font-bold ">City:</span>
              <input
                id="title"
                type="text"
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city "
                className="bg-gray-100 px-4 py-2 text-black block rounded w-1/2"
              />
            </div>
            <div className="mb-4 flex gap-11 items-center">
              <span className="text-xs block font-bold ">Country:</span>
              <input
                id="title"
                type="text"
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter city "
                className="bg-gray-100 px-4 py-2 text-black block rounded w-1/2"
              />
            </div>{" "}
            <div className="mb-4 flex gap-2 items-center ">
              <span className="text-xs font-bold block ">Description:</span>
              <textarea
                id="title"
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                rows={6}
                placeholder="Enter house title "
                className="bg-gray-100 px-4 py-2 text-black  block rounded w-1/2"
              />
            </div>
            <div className="flex gap-4">
              <div>
                <input
                  id="file"
                  onChange={handleFile}
                  type="file"
                  placeholder="Enter house title "
                  className="bg-blue-900 px-4 py-2 block rounded "
                />
              </div>
              <div className="">
                <img src={img} height="200" width="250" />
              </div>
            </div>
            <button
              type="button"
              className="bg-blue-900 px-4 py-2 text-white"
              onClick={addHouses}
            >
              Sumit
            </button>
          </div>
        </form>
      </div>
    </Header>
  );
};

export default AddProducts;
