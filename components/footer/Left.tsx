const Left = () => {
  return (
    <form className=" w-full md:col-span-6 lg:col-5">
      <div className="mb-8">
        <label
          className="block text-white py-2 font-bold mb-4 text-lg  lg:text-3xl "
          htmlFor="emailaddress"
        >
          Signup for our newsletter
        </label>
        <input
          className="shadow  border rounded w-full p-3 text-gray-700 leading-tight transform transition"
          id="emailaddress"
          type="text"
          placeholder="you@somewhere.com"
        />
      </div>

      <div className="flex items-center justify-between pt-4">
        <button
          className=" text-black bg-secondary font-bold text-md hover:bg-[#3ec6f0cb] rounded p-3 w-[100%] sm:w-[80%] md:w-[60%] transform transition "
          type="button"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Left;
