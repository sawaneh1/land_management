import axios from "axios";
import { useState } from "react";

const BuyModal = ({ houseId, amount }) => {
  const [showModal, setShowModal] = useState(false);
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  // const [house_id, set] = useState()
  const handlePayment = async (e) => {
    e.preventDefault();

    const url = "https://ancient-temple-33424.herokuapp.com/create_payment";

    const { data } = await axios.post(url, {
      fname,
      lname,
      email,
      amount,
      house_id: houseId,
    });
    console.log("data", data);
    alert("Your payment has been made successfull");
    setShowModal(false);
  };
  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        class="hover:bg-gray-300 bg-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Buy
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none-focus:outline-none">
            <div class="w-full max-w-md">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="firstName"
                    >
                      First Name
                    </label>
                    <input
                      onChange={(e) => setFname(e.target.value)}
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="firstName"
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="lastName"
                      onChange={(e) => setLname(e.target.value)}
                      type="text"
                      placeholder="lastName"
                    />
                  </div>
                </div>

                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Email
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email address"
                    required
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="password"
                    >
                      Credit Number
                    </label>
                    <input
                      // onChange={(e) => setfname(e.target.value)}

                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="phoneNumber"
                      type="number"
                      placeholder="phone Number"
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="address"
                    >
                      Address
                    </label>
                    <input
                      class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="address"
                      type="text"
                      placeholder="address"
                    />
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <button
                    onClick={handlePayment}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Process
                  </button>
                  <p
                    class="cursor-pointer inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    onClick={() => setShowModal(false)}
                  >
                    cancel
                  </p>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default BuyModal;
