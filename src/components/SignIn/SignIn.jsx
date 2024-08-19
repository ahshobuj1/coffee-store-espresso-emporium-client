import {useContext} from 'react';
import {AuthContext} from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import {useLocation, useNavigate} from 'react-router-dom';

const SignIn = () => {
    const {signInUserWithEmail} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleFormValue = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUserWithEmail(email, password)
            .then((result) => {
                console.log('user logged in', result.user);

                fetch(
                    `https://coffee-store-espresso-emporium-server-one.vercel.app/users/${email}`,
                    {
                        method: 'PATCH',
                        headers: {'content-type': 'application/json'},
                        body: JSON.stringify({
                            email: email,
                            lastSignInTime:
                                result.user?.metadata?.lastSignInTime,
                        }),
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        Swal.fire({
                            title: 'Success',
                            text: 'User logged in successfully',
                            icon: 'success',
                        });

                        form.reset();
                        navigate(location.state ? location.state : '/');
                        console.log(location);
                    });
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign In Now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleFormValue} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
