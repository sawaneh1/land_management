import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [clickedIndex, setClickedIndex] = useState({});

  const handleDelete = async (id) => {
    // const deleteHouse = houses.filter((house) => house.id == id);
    // console.log("deleted house", deleteHouse);
    const url = `https://ancient-temple-33424.herokuapp.com/contact/${id}`;
    const data = await axios.delete(url);
    alert("payment info successfully deleted");
    window.location.reload();

    console.log("data", data);
  };
  const fetchContacts = async () => {
    const url = "http://localhost:5000/contacts";

    const { data } = await axios.get(url);
    console.log("data", data);
    setContacts(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <Header>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 p-5 px-10 rounded w-full mx-auto">
        <h1 className="text-gray-100 text-center font-bold text-2xl mb-5">
          Contacts from website
        </h1>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Message
              </th>
              <th scope="col" class="px-6 py-3">
                First
              </th>
              <th scope="col" class="px-6 py-3">
                Last Name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.length !== 0 &&
              contacts.map((contact, i) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {contact.message}
                  </th>
                  <td class="px-6 py-4">{contact.fname}</td>
                  <td class="px-6 py-4">{contact.lname}</td>
                  <td class="px-6 py-4">{contact.email}</td>
                  <td class="px-6 py-4 text-right">
                    <svg
                      onClick={() => handleDelete(contact._id)}
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
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Header>
  );
};

export default Contact;
