import PropTypes from 'prop-types'; // ES6

const View = ({user, setUsers, users}) => {
    const {_id, email, creationTime} = user;
    return (
        <>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div>
                            <h1 className="font-bold">{email}</h1>
                        </div>
                    </div>
                </td>
                <td>{creationTime}</td>
                <td>Last signIn </td>
                <th>
                    <button className="btn btn-neutral btn-xs">Del</button>
                </th>
            </tr>
        </>
    );
};

export default View;

View.propTypes = {
    users: PropTypes.array,
    setUsers: PropTypes.func,
    user: PropTypes.object,
};
