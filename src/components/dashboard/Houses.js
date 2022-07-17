import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import { Modal } from "@material-ui/core";
import BuyModal from "components/landing/BuyModal";

const Houses = () => {
  const [houses, setHouses] = useState([]);
  const [showActions, setShowActions] = useState(false);
  const [houseId, setHouseId] = useState("");
  const [clickedIndex, setClickedIndex] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [editHouse, setEditHouse] = useState([]);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [imagePath, setImagePath] = useState();
  const [price, setPrice] = useState();

  const [street_address, setStress_address] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [id, setId] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const path = "https://ancient-temple-33424.herokuapp.com/";
  const fetchHouses = async () => {
    setLoading(true);
    try {
      const url = "https://ancient-temple-33424.herokuapp.com/houses";

      const { data } = await axios.get(url);
      setHouses(data);
      console.log("data", data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log("error", error);
    }
  };

  const handleAction = (id, house) => {
    // console.log("eeeeeeee", e.target.value);
    if (id == house._id) {
      setShowActions((prev) => !prev);
      setHouseId(id);
    }
  };

  const handleClick = (index) => () => {
    setClickedIndex((state) => ({
      ...state, // <-- copy previous state
      [index]: !state[index], // <-- update value by index key
    }));
  };
  const handleEdit = (id, house) => {
    // setModel(true);

    setEditHouse(house);
    setTitle(house.title);
    setDescription(house.description);
    setStress_address(house.street_address);
    setPrice(house.price);
    setCity(house.city);
    setImagePath(house.imagePath);
    setCountry(house.country);
    setId(house._id);
    console.log("house", house);
    setShowModal(true);
    // const url = "http://localhost:5000/houses";
  };
  const handleDelete = async (id) => {
    setError(false);
    try {
      setLoading(true);

      const deleteHouse = houses.filter((house) => house.id == id);
      console.log("deleted house", deleteHouse);
      const url = `https://ancient-temple-33424.herokuapp.com/house/${id}`;
      const data = await axios.delete(url);
      alert("House  successfully deleted");

      window.location.reload();

      console.log("data", data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      setError(true);
    }
  };
  const handleUpdate = async (e, id) => {
    setLoading(true);
    setError(false);
    e.preventDefault();
    try {
      console.log("iddddddddddd", id);
      const url = `https://ancient-temple-33424.herokuapp.com/house/${id}`;
      const formData = new FormData();
      console.log("image", imagePath);
      formData.append("title", title);
      // formData.append("imagePath", imagePath);
      formData.append("price", price);

      formData.append("street_address", street_address);
      formData.append("city", city);
      formData.append("country", country);
      formData.append("description", description);

      const { data } = await axios.put(url, formData);
      console.log("updated data", data);
      // setHouses(data);
      alert("House updated successfully");

      setShowModal(false);
      window.location.reload();
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
    // setHouses(edi)
  };

  const handleFile = (e) => {
    setImagePath(e.target.files[0]);
  };
  useEffect(() => {
    fetchHouses();
  }, []);

  return (
    <Header>
      <div class="container mx-auto px-4 sm:px-8">
        {error ? (
          <div className="text-gray-200 mt-10 text-center">Loading.... </div>
        ) : loading ? (
          <div className="text-gray-200 mt-10 text-center">Loading.... </div>
        ) : (
          <div class="py-8">
            <div>
              {showModal ? (
                <>
                  <div className="flex mt-10 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none-focus:outline-none">
                    <div class="w-full max-w-md">
                      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div class="mb-4">
                            <label
                              class="block text-gray-700 text-sm font-bold mb-2"
                              for="firstName"
                            >
                              {title}
                            </label>
                            <input
                              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="firstName"
                              type="text"
                              onChange={(e) => setTitle(e.target.value)}
                              placeholder="firstName"
                            />
                          </div>
                          <div class="mb-4">
                            <label
                              class="block text-gray-700 text-sm font-bold mb-2"
                              for="lastName"
                            >
                              D{price}
                            </label>
                            <input
                              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="lastName"
                              type="text"
                              onChange={(e) => setPrice(e.target.value)}
                              placeholder={price}
                            />
                          </div>
                        </div>

                        <div class="mb-4">
                          <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="username"
                          >
                            Description
                          </label>
                          <textarea
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            rows={4}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder={description}
                            required
                          />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div class="mb-4">
                            <label
                              class="block text-gray-700 text-sm font-bold mb-2"
                              for="password"
                            >
                              Street Address
                            </label>
                            <input
                              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                              id=""
                              type="text"
                              onChange={(e) =>
                                setStress_address(e.target.value)
                              }
                              placeholder={street_address}
                            />
                          </div>
                          <div class="mb-4">
                            <label
                              class="block text-gray-700 text-sm font-bold mb-2"
                              for="address"
                            >
                              {city}
                            </label>
                            <input
                              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                              id="address"
                              type="text"
                              onChange={(e) => setCity(e.target.value)}
                              placeholder={city}
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 mb-5">
                          <div className="">
                            <label
                              class="block text-gray-700 text-sm font-bold mb-2"
                              for="address"
                            >
                              {country}
                            </label>
                            <input
                              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                              id="address"
                              type="text"
                              onChange={(e) => setCountry(e.target.value)}
                              placeholder={country}
                            />
                          </div>
                          <div>
                            <h4>Image</h4>
                            <img
                              src={`${path}${imagePath}`}
                              height="200"
                              width="200"
                            />
                          </div>
                        </div>
                        <div class="flex items-center justify-between">
                          {/* <input
                          type="file"
                          onClick={handleFile}
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-56 rounded focus:outline-none focus:shadow-outline"
                          //   type="button"
                        /> */}
                          <div className="flex gap-5">
                            <button
                              onClick={(e) => handleUpdate(e, id)}
                              type="button"
                              class="text-blue-500 hover:text-blue-800  font-bold  rounded focus:outline-none focus:shadow-outline"
                              //   type="button"
                            >
                              Edit House{" "}
                            </button>

                            <p
                              class="cursor-pointer inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
                              onClick={() => setShowModal(false)}
                            >
                              cancel
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            <div>
              <h2 class="text-2xl text-gray-200 font-semibold leading-tight">
                House
              </h2>
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        House
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Price
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Street / City
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Country
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                    </tr>
                  </thead>
                  {houses.length !== 0 &&
                    houses.map((house, index) => (
                      <tbody key={house._id}>
                        <tr>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex">
                              <div class="flex-shrink-0 w-10 h-10">
                                <img
                                  class="w-full h-full rounded-full"
                                  src={`${path}${house.imagePath}`}
                                  alt=""
                                />
                              </div>
                              <div class="ml-3 flex flex-row-reverse">
                                <p class="text-gray-900 whitespace-no-wrap ml-2">
                                  {house.title}
                                </p>
                                <p class="text-gray-600 whitespace-no-wrap">
                                  {index + 1} -
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              D{house.price}
                            </p>
                            <p class="text-gray-600 whitespace-no-wrap">
                              Dalasis
                            </p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {house.street_address}
                            </p>
                            <p class="text-gray-600 whitespace-no-wrap">
                              {house.city}
                            </p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden
                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span class="relative">{house.country}</span>
                            </span>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                            <button
                              onClick={handleClick(index)}
                              type="button"
                              class="inline-block text-gray-500 hover:text-gray-700"
                            >
                              <svg
                                class="inline-block h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                              </svg>
                            </button>
                            <div>
                              {clickedIndex[index] ? (
                                <div className="flex gap-4 px-5 items-center justify-center">
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6"
                                      onClick={() =>
                                        handleEdit(house._id, house)
                                      }
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                      />
                                    </svg>
                                  </div>
                                  <div>
                                    <svg
                                      onClick={() => handleDelete(house._id)}
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </Header>
  );
};

export default Houses;
