import {Link, useLoaderData} from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const coffee = useLoaderData();
    const {_id, name, chef, supplier, taste, category, details, photo} = coffee;

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffeeUpdate = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photo,
        };
        console.log(newCoffeeUpdate);

        Swal.fire({
            title: 'Are you sure?',
            text: 'You want to update!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(
                    `https://coffee-store-espresso-emporium-server-one.vercel.app/coffees/${_id}`,
                    {
                        method: 'PUT',
                        headers: {'content-type': 'application/json'},
                        body: JSON.stringify(newCoffeeUpdate),
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);

                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: 'Updated!',
                                text: 'Your file has been Updated.',
                                icon: 'success',
                            });
                        }
                    });
            }
        });
    };

    return (
        <section>
            <Link to="/" className="text-xl font-medium btn btn-sm my-5">
                Back to Home
            </Link>

            <div className="bg-[#F4F3F0] p-5 md:px-24 md:py-12">
                <div className="text-center mb-10">
                    <h1 className="text-3xl text-bold italic text-red-500">
                        Update Existing Coffee Details
                    </h1>
                </div>

                <form onSubmit={handleUpdateCoffee}>
                    <div className="grid md:grid-cols-2 gap-6  ">
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">
                                        Coffee Name
                                    </span>
                                </div>
                                <input
                                    name="name"
                                    type="text"
                                    defaultValue={name}
                                    placeholder="Coffee name"
                                    className="input input-bordered w-full "
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Chef</span>
                                </div>
                                <input
                                    name="chef"
                                    type="text"
                                    defaultValue={chef}
                                    placeholder=" Enter coffee chef"
                                    className="input input-bordered w-full "
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Supplier</span>
                                </div>
                                <input
                                    name="supplier"
                                    type="text"
                                    defaultValue={supplier}
                                    placeholder="Supplier coffee"
                                    className="input input-bordered w-full "
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Taste</span>
                                </div>
                                <input
                                    name="taste"
                                    type="text"
                                    defaultValue={taste}
                                    placeholder="Enter coffee taste"
                                    className="input input-bordered w-full "
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Category</span>
                                </div>
                                <input
                                    name="category"
                                    type="text"
                                    defaultValue={category}
                                    placeholder="Enter coffee category"
                                    className="input input-bordered w-full "
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Details</span>
                                </div>
                                <input
                                    name="details"
                                    type="text"
                                    defaultValue={details}
                                    placeholder="Enter coffee details"
                                    className="input input-bordered w-full "
                                    required
                                />
                            </label>
                        </div>
                        <div className="md:col-span-2">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Photo</span>
                                </div>
                                <input
                                    name="photo"
                                    type="text"
                                    defaultValue={photo}
                                    placeholder="Enter photo URL"
                                    className="input input-bordered w-full "
                                    required
                                />
                            </label>
                        </div>
                        <div className="md:col-span-2">
                            <label className="form-control w-full ">
                                <input
                                    type="submit"
                                    value="Update Coffee"
                                    className="w-full btn btn-neutral"
                                    required
                                />
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Update;
