import {useState} from 'react';
import {useLoaderData} from 'react-router-dom';
import View from './View';

const ViewUsers = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    return (
        <div>
            <h1>ViewUsers : {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <th>Email</th>
                            <th>SignUp</th>
                            <th>Last SignIn</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <View
                                key={user._id}
                                user={user}
                                setUsers={setUsers}
                                users={users}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewUsers;
