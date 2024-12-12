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
      <div className={`${alata.className} flex min-h-screen`}>
        <div className="flex-grow p-6">
          <h2 className={` text-2xl mb-4`}>Contact Us Messages</h2>
          <div className="pt-4 max-sm:w-[420px]">
            <ContactTable data={contacts} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
