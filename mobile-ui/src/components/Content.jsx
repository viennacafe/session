import React, {useState} from 'react';
import axios from 'axios';


function Content() {

    let [user, setUser] = useState([]);

    function search() {
        axios.get("/api/users/1")
            .then(function (response) {
                setUser(response.data);
            })
            .catch(function (error) {
                console.log("fail");
            })
    }

    return (
        <>
            <div className="flex items-center space-x-1 pt-6 pr-6">
                <div className="px-4">
                    {user.id}
                </div>
                <div className="px-4">
                    {user.firstName}
                </div>
                <div className="max-w-6xl mx-auto px-4">
                    {user.lastName}
                </div>
                <div className="max-w-6xl mx-auto px-4">
                    {user.email}
                </div>

            </div>
            <div className="pl-4 mt-4">
                <button onClick={search}
                        className="py-2 px-3 bg-gray-400 hover:bg-gray-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">button
                </button>
            </div>
        </>
    );
}

export default Content;