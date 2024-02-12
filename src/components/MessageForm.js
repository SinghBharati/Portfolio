import React from "react";

const MessageForm = () => {
    return (
        <div>
            <form
                className='absolute w-full md:w-3/12 p-12 my-36 mx-auto right-0 left-0 rounded text-white bg-black bg-opacity-80'
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    className="p-4 my-4 w-full bg-gray-700 rounded"
                    type="email"
                    placeholder="Email Address"
                />
                <input
                    className="p-4 my-4 w-full bg-gray-700 rounded"
                    type="password"
                    placeholder="Password"
                />

                <p className="text-red-500 font-bold text-lg py-2">{}</p>

                <button
                    className="p-4 my-6 w-full bg-red-700 rounded"

                >Submit</button>
            </form>
        </div>
    );
}

export default MessageForm;