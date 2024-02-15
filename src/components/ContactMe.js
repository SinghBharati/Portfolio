import React from 'react';
import {useSelector} from "react-redux";
import Card from "./Card";

function ContactMe() {
    const contact = useSelector((store) => store.contact);
    const theme = useSelector((store) => store.theme.isDarkTheme);


    return (
        <div className={`${theme ? "p-5 bg-gray-900 text-gray-200" : "p-5 bg-gray-200 text-gray-900"} h-full pt-24`}>
            <h1 className="text-3xl font-bold py-3">Get in Touch</h1>
            <h3 className="text-3xl font-bold py-3">For any query you can contact me here 👇</h3>
            <div className="flex flex-wrap items-center">
                {contact.map((contact) => {
                    return <Card key={contact.name} height={36} width={52} title={contact.name} image={contact.image} to={contact.link}/>
                })}
            </div>
        </div>
    );
}

export default ContactMe;