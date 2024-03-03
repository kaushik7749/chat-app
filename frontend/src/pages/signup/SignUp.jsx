import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox';
import useSignup from '../../hooks/useSignup';
import { useState } from 'react';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = gender => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto bg-white">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-500">
          Sign Up <span className="text-indigo-500"> Chat</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2"></label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full input input-bordered  h-10 bg-white text-black"
              value={inputs.fullName}
              onChange={e => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2 "></label>
            <input
              type="text"
              placeholder="username"
              className="w-full input input-bordered h-10 bg-white text-black"
              value={inputs.username}
              onChange={e => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label className="label"></label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-white text-black"
              value={inputs.password}
              onChange={e => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className="label"></label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 bg-white text-black"
              value={inputs.confirmPassword}
              onChange={e =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to={'/login'}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            href="#"
          >
            Already have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700 bg-indigo-500 text-white"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                'Sign Up'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
