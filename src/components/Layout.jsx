import App from "../App";
import { NavLink, Outlet } from "react-router-dom";
import { useContentful } from "react-contentful";
import { useEffect } from "react";
import logo from '../assets/icons/Logo.svg';

function Layout() {
  return (
    <div>
        <nav className="navbar z-10 p-1 flex w-screen top-5" id="home">
          <div className="w-1/3 flex pl-10 justify-start ml-8">
            <p>
              <img
                src={logo}
                alt=""
                width="50px"
                height="50px"
              />
            </p>
          </div>
          <div className="flex justify-start gap-12 w-1/3">
            <button className="text-black hover:bg-green-300 p-2 rounded-md">
              <NavLink to='/'>Home</NavLink>
            </button>
            <button className="text-black hover:bg-green-300 p-2 rounded-md">
              <NavLink to='/recipes'>Recipes</NavLink>
            </button>
            <button className="text-black hover:bg-green-300 p-2 rounded-md">
              <NavLink to='/about'>About us</NavLink>
            </button>
          </div>
          <div className="flex space-x-6 gap-12 text-xs justify-end mr-6 w-5/6 pr-10 pt-2">
            <div className="flex gap-10 pr-6">
              <input
                type="text"
                placeholder="..."
                className="text-black drop-shadow-lg inline-block text-center inputbox align-middle"
              />
              <button>
                <img
                  src="src/assets/icons/search-svgrepo-com.svg"
                  alt="Search"
                  width="24px"
                  height="24px"
                />
              </button>
            </div>
            <div className="pt-2">
              <img
                src="src/assets/icons/profile.svg"
                alt="Profile"
                width="24px"
                height="24px"
              />
              <p>Profile</p>
            </div>
            <div className="pt-2">
              <img
                src="src/assets/icons/write.svg"
                alt="Write"
                width="24px"
                height="24px"
                className="ml-6"
              />
              <p>Write a recipe</p>
            </div>
          </div>
          </nav>
          <main>
              <Outlet />
          </main>
          <footer className="bg-white py-14 px-14">
        <div className="container mx-auto flex justify-between items-center mt-10 mb-10 ml-24 mr-24">
            <div className="flex items-center">
                <div className="mr-10">
                    <img src="src\assets\icons\Logo.svg" alt="Logo" className="h-24 w-auto" />
                </div>
            </div>
    
            <div className="flex justify-center">
                <div className="flex flex-col mr-40">
                    <a href="#" className="text-gray-700 hover:text-green-300 mr-4 mb-2">About Us</a>
                    <a href="#" className="text-gray-700 hover:text-green-300 mr-4 mb-2">Blog</a>
                    <a href="#" className="text-gray-700 hover:text-green-300 mr-4 mb-2">Recipes</a>
                    <a href="#" className="text-gray-700 hover:text-green-300 mr-4 mb-2">Privacy Policy</a>
                </div>
                
                <div className="flex flex-col mr-20">
                    <a href="#" className="text-gray-700 hover:text-green-300 mr-4 mb-2">Career</a>
                    <a href="#" className="text-gray-700 hover:text-green-300 mr-4 mb-2">Contact</a>
                    <a href="#" className="text-gray-700 hover:text-green-300 mr-4 mb-2">Search</a>
                </div>
            </div>
    
            <div className="flex flex-col items-center mr-60">
          
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md mt-6 mb-8 hover:bg-green-300">Follow Us</button>
    
                <div className="flex mb-6">
                    <div className="mr-6">
                        <img src="src\assets\icons\tiktok.svg" alt="Tiktok" className="h-8 w-auto" />
                    </div>
                    <div className="mr-6">
                        <img src="src\assets\icons\facebook.svg" alt="Facebook" className="h-8 w-auto" />
                    </div>
                    <div>
                        <img src="src\assets\icons\pinterest.svg" alt="Pinterest" className="h-8 w-auto" />
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-6">
                        <img src="src\assets\icons\youtube.svg" alt="YouTube" className="h-8 w-auto" />
                    </div>
                    <div className="mr-6">
                        <img src="src\assets\icons\instagram.svg" alt="Instagram" className="h-8 w-auto" />
                    </div>
                    <div>
                        <img src="src\assets\icons\linkedin.svg" alt="LinkedIn" className="h-8 w-auto" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default Layout;
