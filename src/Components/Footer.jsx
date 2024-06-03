import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="w-full h-[180px] px-10 py-4 bg-gray-200 text-gray-800 flex flex-col justify-between">
      <div className="flex flex-col text-center">
        <p className="text-lg font-semibold mb-2">Connect With Me:</p>
        <div className="flex flex-row gap-4 text-2xl justify-center text-gray-600">
          <a
            href="https://www.linkedin.com/in/yiran-sun-jerry/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin
              size={40}
              className="hover:text-blue-600 transition duration-300"
            />
          </a>
          <a
            href="https://github.com/Jerrysun817"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub
              size={40}
              className="hover:text-black transition duration-300 "
            />
          </a>
          <a
            href="https://www.instagram.com/jerrysun___"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram
              size={40}
              className="hover:text-pink-600 transition duration-300"
            />
          </a>
        </div>
      </div>
      <div className="font-medium text-sm text-center mt-auto">
        © 2024 Yiran Sun. All rights reserved
      </div>
    </footer>
  );
};
