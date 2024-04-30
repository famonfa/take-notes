import React, { useState } from "react";
import { Text } from "../ui-styles/Text";
import { useSubjects } from "../context/context-calls";

export const ModalPost = ({ id }: { id: string }) => {
  const { createPost } = useSubjects();

  const [name, setName] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await createPost(Number(id), name);
      setName("");
      document.getElementById("my_modal_3")?.close(); // Assuming this closes the modal
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed z-40 inset-0">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700  w-[100%] h-[100dvh] m-auto md:w-fit md:mt-20 md:h-fit	 lg:w-[40%] ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 ">
              <Text
                titleSecondary
                css="text-xl font-semibold text-sky-900 dark:text-white"
              >
                Create a new post
              </Text>
              <button
                type="button"
                onClick={() => document.getElementById("my_modal_3")?.close()}
                data-modal-hide="authentication-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Post name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter post name"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className=" md:right-0 w-full text-white bg-sky-900 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-800 dark:hover:bg-sky-700 dark:focus:ring-blue-800"
                >
                  Create post
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
