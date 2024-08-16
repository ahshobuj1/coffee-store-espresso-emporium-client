import PropTypes from 'prop-types'; // ES6

const Coffee = ({coffee}) => {
    const {name, chef, taste, category, details, photo} = coffee;
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
                <button className="btn bg-[#EA4744]">Del</button>
            </div>
        </div>
    );
};

export default Coffee;

Coffee.propTypes = {
    coffee: PropTypes.object,
};
