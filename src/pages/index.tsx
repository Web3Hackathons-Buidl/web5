import { Modal } from "@/components/modal/modal";
import { themeStore } from "@/lib/store/store";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faCopy, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useStore } from "zustand";

export default function Home() {
  const theme = useStore(themeStore, (state) => state.theme);
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = themeStore();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <main
        className={`${
          theme === "light" ? "lightHeroBg" : "darkHeroBg"
        } bg-center bg-cover bg-fixed`}
      >
        <div className="md:px-20 px-8 space-y-4 md:space-y-0 md:flex justify-between items-center py-12 w-full fixed">
          <Link
            href={"/"}
            className="relative w-32 hover:scale-[0.99] duration-200 transition"
          >
            <img src={"/images/TrapCard.png"} alt="logo" />
          </Link>
          <div className="flex gap-x-8 items-center">
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              <FontAwesomeIcon
                icon={faMoon}
                className={"h-6 w-6 text-teal-500"}
              />
            </button>
            <button className="rounded-xl py-2.5 font-semibold bg-white px-5 hover:scale-[0.99] duration-200 transition">
              Claim Drop
            </button>
            <button
              className="rounded-xl py-2.5 font-semibold greenToPurple px-3 hover:scale-[0.99] duration-200 transition"
              onClick={openModal}
            >
              Login
            </button>
          </div>
        </div>
        <div className="md:px-32 px-8 space-y-8 md:pt-40 pt-48">
          <p className="font-extralight dark:text-white">
            TrapCard is currently invite-only
            <br />
            Here&apos;s how to{" "}
            <span>
              <Link href={"/"} className="text-cyanSky">
                skip the waitlist now
              </Link>
            </span>
          </p>
          <h1 className="text-5xl font-druk text-corbeau/80">
            GET ON
            <br />
            THE <span className="text-cyanSky">LIST</span>
          </h1>
          <h3 className="text-4xl font-light text-corbeau dark:text-white">
            Welcome Friend,
            <br />
            please log in
          </h3>
          <div className="rounded-3xl shadow-lg greenToPurple p-6 max-w-xl ">
            <h3 className="text-4xl font-black mb-5">Get early access</h3>
            <input
              type="email"
              name=""
              id=""
              className="bg-white py-2.5 rounded-lg px-4 w-full mb-5"
              placeholder="Email"
            />
            <div className="w-full">
              <button className="bg-black w-full text-sm py-2 rounded-lg">
                Register
              </button>
              <button className="text-gray-300 text-sm mt-4">
                Signed Up before? Check your status
              </button>
            </div>
          </div>
        </div>
        <footer className="md:px-40 px-10 flex justify-between text-sm mt-20 pb-8">
          <p>© 2024 TrapCard™️</p>
          <Link href={"/"} className="text-blue-500 hover:text-blue-600">
            Terms & conditions
          </Link>
        </footer>
      </main>
      <Modal openModal={isOpen} closeModal={() => setIsOpen(false)}>
        <div className="max-w-xl flex bg-black/80 text-white p-4 rounded-2xl gap-x-8 mx-auto">
          <div className=" w-1/2">
            <h2 className="text-4xl mt-4">Login</h2>
            <div className="flex flex-col gap-y-1 my-4">
              <label htmlFor="" className="text-xs text-cyan-400">
                Email
              </label>
              <input
                type="email"
                name=""
                id=""
                className="py-2 px-4 bg-white rounded-lg text-black"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label htmlFor="" className="text-xs text-cyan-400">
                Password
              </label>
              <div className="w-full bg-white rounded-lg overflow-hidden flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  name=""
                  id=""
                  className="py-2 border-r outline-none px-4  text-black"
                  placeholder="Password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="flex justify-center w-full"
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className={"h-4 w-4 text-black"}
                  />
                </button>
              </div>
            </div>
            <button className="text-xs text-gray-300">Forgot password?</button>
            <div className="mt-6">
              <button className="greenToPurple py-2 px-6 rounded-xl">
                Log in
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="font-semibold mt-4 text-xl">Share the love</h3>
            <p className="text-sm mt-6 mb-5">
              Trap Card Beta program: $250 a year early adopters Your referral
              code discount $99/year for both You and your referral!
            </p>
            <div>
              <div className="flex flex-col gap-y-1 mb-4">
                <label htmlFor="" className="text-xs text-cyan-400">
                  Referral Url
                </label>
                <div className="w-full bg-white rounded-lg overflow-hidden flex items-center">
                  <input
                    type={"text"}
                    name=""
                    id=""
                    value={"360nft.app/er23rx"}
                    className="py-2 flex-1 border-r outline-none px-4 text-black"
                    placeholder="Password"
                  />
                  <button className="flex justify-center w-10">
                    <FontAwesomeIcon
                      icon={faCopy}
                      className={"h-4 w-4 text-black"}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
