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

    const url = "https://ancient-temple-33424.herokuapp.com/create_house";

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
      <div className="mt-10 flex   w-full justify-center">
        <form className="  text-black px-10 py-4 rounded-xl">
          <div className="w-full text-gray-200">
            <div className="flex gap-5">
              <div className="mb-4 flex flex-col gap-4 items-center ">
                <span className="text-xs block font-bold ">Title:</span>
                <input
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter house title"
                  className="bg-gray-200 text-black px-4 block py-3 rounded "
                />
              </div>
              <div className="mb-4 flex flex-col gap-4 items-center">
                <span className="text-xs block font-bold ">Price:</span>
                <input
                  id="title"
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter house title "
                  className="bg-gray-100 px-4 py-2 text-black block rounded "
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="mb-4 flex flex-col gap-4 items-center">
                <span className="text-xs block font-bold ">Stree address:</span>
                <input
                  id="title"
                  type=""
                  onChange={(e) => setStress_address(e.target.value)}
                  placeholder="Enter street address "
                  className="bg-gray-100 px-4 py-2 text-black block rounded"
                />
              </div>
              <div className="mb-4 flex flex-col gap-4 items-center">
                <span className="text-xs block font-bold ">City:</span>
                <input
                  id="title"
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter city "
                  className="bg-gray-100 px-4 py-2 text-black block rounded "
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mb-4 flex flex-col gap-4 items-center">
                <span className="text-xs block font-bold ">Country:</span>
                <input
                  id="title"
                  type="text"
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Enter city "
                  className="bg-gray-100 px-4 py-2 text-black block rounded "
                />
              </div>{" "}
              <div className="flex gap-1 items-center">
                <div className="px-2">
                  <input
                    id="file"
                    onChange={handleFile}
                    type="file"
                    placeholder="Enter house title "
                    className=" px-4 py-2 block rounded "
                  />
                </div>
              </div>
            </div>
            {/* <div className="">
              <img src={img} height="200" width="400" />
            </div> */}
            <div className="mb-4 flex flex-col gap-4 items-center ">
              <span className="text-xs font-bold block ">Description:</span>
              <textarea
                id="title"
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                rows={6}
                cols={10}
                placeholder="Enter house title "
                className="bg-gray-100 px-4 py-2 text-black  block rounded w-full"
              />
            </div>
            <div className="w-full px-2">
              <button
                type="button"
                className="bg-dark rounded w-full px-10 py-2 text-white"
                onClick={addHouses}
              >
                Add House
              </button>
            </div>
          </div>
        </form>
      </div>
    </Header>
  );
};

export default AddProducts;
