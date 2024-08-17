import PropTypes from 'prop-types'; // ES6
import Swal from 'sweetalert2';

const View = ({user, setUsers, users}) => {
    const {_id, email, creationTime} = user;

    const handleDeleteUser = (id) => {
        console.log('delete', id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your file has been deleted.',
                                icon: 'success',
                            });

                            const remaining = users.filter(
                                (remain) => remain._id !== id
                            );
                            setUsers(remaining);
                        }
                    });
            }
        });
    };

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
                    <button
                        onClick={() => handleDeleteUser(_id)}
                        className="btn btn-neutral btn-xs">
                        Del
                    </button>
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
