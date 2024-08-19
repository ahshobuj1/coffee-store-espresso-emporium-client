import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleNewCoffee = (e) => {
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

        fetch(
            'https://coffee-store-espresso-emporium-server-one.vercel.app/coffees',
            {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(newCoffeeUpdate),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    //sweet alert2
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });

                    form.reset();
                }
            });
    };

    return (
        <section>
            <Link to="/" className="text-xl font-medium btn my-5">
                Back to Home
            </Link>

            <div className="bg-[#F4F3F0] p-5 md:px-24 md:py-12">
                <div className="text-center space-y-8 mb-10">
                    <h1 className="text-3xl text-bold italic text-red-500">
                        Add New Coffee
                    </h1>
                    <p className="md:px-24">
                        It is a long established fact that a reader will be
                        distraceted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here.
                    </p>
                </div>

                <form onSubmit={handleNewCoffee}>
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
                                    value="Add Coffee"
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

export default AddCoffee;
