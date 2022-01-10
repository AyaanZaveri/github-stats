import React from "react";

interface Props {
  repo: string;
  setRepo: any;
  user: string;
  setUser: any;
  handleSubmit: any;
}

const Input = ({ repo, setRepo, user, setUser, handleSubmit }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Profile"
          className="focus:ring-orange w-72 text-gray-500 mt-3 shadow-sm appearance-none inline-flex items-center px-2 py-2 hover:text-gray-500 focus:text-gray-500 hover:bg-slate-50 active:text-gray-500 text-sm font-normal active:bg-orange-100 bg-white border focus:border-orange-600 focus:ring ring-orange-300 rounded-md focus:outline-none transition"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </form>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Repository"
          className="focus:ring-orange w-72 text-gray-500 mt-3 shadow-sm appearance-none inline-flex items-center px-2 py-2 hover:text-gray-500 focus:text-gray-500 hover:bg-slate-50 active:text-gray-500 text-sm font-normal active:bg-orange-100 bg-white border focus:border-orange-600 focus:ring ring-orange-300 rounded-md focus:outline-none transition"
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Input;
