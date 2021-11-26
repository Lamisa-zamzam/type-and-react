import React, { useState } from "react";
import Contact from "./contact";

const Contacts = () => {
    interface IContact {
        name: string;
        email: string;
    }
    const [contact, setContact] = useState<IContact>({} as IContact);
    const [contacts, setContacts] = useState<IContact[]>([]);

    const addContact = () => {
        setContacts([...contacts, contact]);
        setContact({
            name: "",
            email: "",
        });
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact({
            ...contact,
            [e.target.name]: [e.target.value],
        });
    };

    const handleRemove = (email: string): void => {
        const newContactList = contacts.filter((c) => c.email !== email);
        setContacts(newContactList);
    };

    return (
        <div>
            <input
                value={contact.name}
                type="text"
                name="name"
                id=""
                onChange={(e) => onChange(e)}
            />
            <input
                value={contact.email}
                type="email"
                name="email"
                id=""
                onChange={(e) => onChange(e)}
            />
            <button onClick={addContact}>Add</button>
            {contacts.map((contact) => (
                <Contact
                    name={contact.name}
                    email={contact.email}
                    handleRemove={handleRemove}
                />
            ))}
        </div>
    );
};

export default Contacts;
