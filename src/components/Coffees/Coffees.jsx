import {Link} from 'react-router-dom';
import Coffee from './Coffee';
import {useEffect, useState} from 'react';

const Coffees = () => {
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        fetch(
            'https://coffee-store-espresso-emporium-server-one.vercel.app/coffees'
        )
            .then((res) => res.json())
            .then((data) => setCoffees(data))
            .catch((err) => console.log(err.message));
    }, []);

    return (
        <section>
            <div>
                <div className="text-center ">
                    <p> --- sip & savor --- </p>
                    <h1 className="text-3xl font-bold text-pink-800 my-5">
                        Our Popular Products
                    </h1>
                    <Link to="/add-coffee">
                        <button className="btn btn-sm bg-[#E3B577]">
                            Add Coffee
                        </button>
                    </Link>
                </div>

                <div className="my-10 grid md:grid-cols-2 gap-6">
                    {coffees.map((coffee) => (
                        <Coffee
                            key={coffee._id}
                            coffee={coffee}
                            setCoffees={setCoffees}
                            coffees={coffees}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Coffees;
