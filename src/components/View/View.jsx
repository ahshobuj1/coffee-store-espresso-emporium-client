import {useLoaderData} from 'react-router-dom';

const View = () => {
    const coffee = useLoaderData();
    const {name, photo, taste, supplier, details, chef, category} = coffee;
    return (
        <div className="flex justify-center">
            <div className=" shadow-2xl p-7 bg-[#F5F4F1] gap-5 rounded-lg">
                <h2 className="card-title text-blue-600">Name: {name}</h2>

                <figure className="max-w-md my-6">
                    <img src={photo} alt="coffee" className="rounded-lg " />
                </figure>
                <div>
                    <p className="text-xl font-medium">Taste: {taste}</p>
                    <p className="text-xl font-medium">Category: {category}</p>
                    <p className="text-xl font-medium">Details: {details}</p>
                    <p className="text-xl font-medium">Chef: {chef}</p>
                    <p className="text-xl font-medium">supplier: {supplier}</p>
                </div>
            </div>
        </div>
    );
};

export default View;
