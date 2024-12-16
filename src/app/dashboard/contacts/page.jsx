"use client";

import { useState, useEffect } from "react";
import { getAllContacts } from "../../../services/contactApi";
import ContactTable from "../../../components/conatctUs/ContactTable";
import Layout from "../../newLayout";
import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    try {
      const response = await getAllContacts();
      setContacts(response.contacts);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <Layout>
      <div className={`${alata.className} min-h-screen min-w-[300px] w-full`}>
        <div className=" p-6">
          <h2 className={` text-2xl mb-4 text-[#000000]`}>Contact Us Messages</h2>
          <div className="pt-4">
            <ContactTable data={contacts} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
