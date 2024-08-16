import PropTypes from 'prop-types'; // ES6
import Swal from 'sweetalert2';

const Coffee = ({coffee, coffees, setCoffees}) => {
    const {_id, name, chef, taste, category, details, photo} = coffee;

    const handleDeleteCoffee = (id) => {
        // A confirm dialog, with a function attached to the "Confirm"-button
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
                console.log('delete', id);

                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your file has been deleted.',
                                icon: 'success',
                            });

                            const remaining = coffees.filter(
                                (cof) => cof._id !== id
                            );

                            setCoffees(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div className="grid md:grid-cols-3 shadow-xl justify-between p-7 bg-[#F5F4F1] gap-5 rounded-lg">
            <figure>
                <img src={photo} alt="coffee" className="rounded-lg" />
            </figure>
            <div>
                <h2 className="card-title">Name: {name}</h2>
                <p>Taste: {taste}</p>
                <p>Category: {category}</p>
                <p>Details: {details}</p>
                <p>Chef: {chef}</p>
            </div>

            <div className="flex flex-col px-16 gap-1">
                <button className="btn bg-[#D2B48C]">View</button>
                <button className="btn btn-neutral">Edit</button>
                <button
                    onClick={() => handleDeleteCoffee(_id)}
                    className="btn bg-[#EA4744]">
                    Del
                </button>
            </div>
        </div>
    );
};

export default Coffee;

Coffee.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func,
};
