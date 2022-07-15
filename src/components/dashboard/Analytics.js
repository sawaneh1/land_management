import axios from "axios";
import React, { useEffect, useState } from "react";
import Aside from "./Aside";
import Header from "./Header";
import Nav from "./Nav";

const Analytics = () => {
  const [houses, setHouses] = useState([]);
  const [amounts, setAmount] = useState([]);
  const fetchHouses = async () => {
    const url = "https://ancient-temple-33424.herokuapp.com/houses";

    const { data } = await axios.get(url);
    setHouses(data);

    data.map((element) => {
      return setAmount((prev) => (prev += element.price));
    });

    console.log("aaa", amounts);
  };
  useEffect(() => {
    fetchHouses();
  }, []);

  return (
    <div>
      <section>
        <div
          id="main"
          class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
        >
          <div class="bg-gray-800 pt-3">
            <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
              <h1 class="font-bold pl-2">Analytics</h1>
            </div>
          </div>

          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
              <div class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded-full p-5 bg-green-600">
                      <i class="fa fa-wallet fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h2 class="font-bold uppercase text-gray-600">
                      Recenet Revenus
                    </h2>
                    <p class="font-bold text-3xl">
                      D 9000000
                      <span class="text-green-500">
                        <i class="fas fa-caret-up"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
              <div class="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded-full p-5 bg-pink-600">
                      <i class="fas fa-users fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h2 class="font-bold uppercase text-gray-600">
                      Total Houses
                    </h2>
                    <p class="font-bold text-3xl">
                      {houses.length}
                      <span class="text-pink-500">
                        <i class="fas fa-exchange-alt"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
              <div class="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded-full p-5 bg-indigo-600">
                      <i class="fas fa-tasks fa-2x fa-inverse"></i>
                    </div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h2 class="font-bold uppercase text-gray-600">
                      To Do List
                    </h2>
                    <p class="font-bold text-3xl">7 tasks</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analytics;
