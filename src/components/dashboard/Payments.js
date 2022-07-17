import React, { useEffect, useState } from "react";

import axios from "axios";

import Header from "./Header";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [clickedIndex, setClickedIndex] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPayments = async () => {
    setError(false);

    const url = "https://ancient-temple-33424.herokuapp.com/payments";
    setLoading(true);

    try {
      const { data } = await axios.get(url);
      setPayments(data);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const handleClick = (index) => () => {
    setClickedIndex((state) => ({
      ...state, // <-- copy previous state
      [index]: !state[index], // <-- update value by index key
    }));
  };
  const handleEdit = (id, payment) => {
    // setModel(true);

    console.log("payment", payment);
    setShowModal(true);
    // const url = "http://localhost:5000/houses";
  };
  const handleDelete = async (id) => {
    setLoading(true);
    setError(false);

    // const deleteHouse = houses.filter((house) => house.id == id);
    // console.log("deleted house", deleteHouse);
    try {
      const url = `https://ancient-temple-33424.herokuapp.com/payment/${id}`;
      const data = await axios.delete(url);
      console.log("data", data);

      alert("payment info successfully deleted");
      window.location.reload();
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <Header>
      <div className="mt-20 p-4 w-full mx-auto px-10 shadow">
        <div>
          <h2 class="text-2xl  text-gray-200 font-semibold leading-tight">
            Payment
          </h2>
        </div>
        {error ? (
          <div className="text-red-500 mt-20 text-center">
            Ops something went wrong!. Please reload the app.{" "}
          </div>
        ) : loading ? (
          <div className="text-gray-200 mt-20 text-center">Loading.... </div>
        ) : (
          <div class="-mx-4  sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      House ID
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Amount
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      First/Last Name
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Date
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                  </tr>
                </thead>
                {payments.length !== 0 &&
                  payments.map((payment, index) => (
                    <tbody key={payment._id}>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div class="flex">
                            {/* <div class="flex-shrink-0 w-10 h-10">
                              <img
                                class="w-full h-full rounded-full"
                                src={`${path}${payment.imagePath}`}
                                alt=""
                              />
                            </div> */}
                            <div class="ml-3 flex flex-row-reverse">
                              <p class="text-gray-900 whitespace-no-wrap ml-2">
                                {index + 1} -{" "}
                                <span className="ml-2">
                                  {" "}
                                  {payment.house_id}
                                </span>
                              </p>
                              {/* <p class="text-gray-600 whitespace-no-wrap">
                                {index + 1} -
                              </p> */}
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            D{payment.amount}
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">
                            Dalasis
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {payment.fname}
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">
                            {payment.lname}
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span class="relative">{payment.country}</span>
                          </span>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                          <button
                            onClick={handleClick(index)}
                            type="button"
                            class="inline-block text-gray-500 hover:text-gray-700"
                          >
                            <svg
                              onClick={() => handleDelete(payment._id)}
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
                          </button>
                          <div>
                            {clickedIndex[index] ? (
                              <div className="flex gap-4 px-5 items-center justify-center">
                                <div>
                                  <svg
                                    onClick={() => handleDelete(payment._id)}
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
        )}
      </div>
    </Header>
  );
};

export default Payments;
