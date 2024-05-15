import '../App.css';

function Navbar() {
  return (
    <div>
        <nav className="navbar z-10 p-1 flex w-screen top-5" id="home">
            <div className="w-1/3 flex pl-10 justify-start ml-8">
                <p> <img src="src\assets\icons\Logo.svg" alt="" width="50px" height="50px" /></p>
            </div>
            <div className="flex justify-start gap-12 w-1/3">
                <button className="text-black hover:bg-violet-100 p-2 rounded-md"><a href="./index.html">Home</a></button>
                <button className="text-black hover:bg-violet-100 p-2 rounded-md"><a href="">Recipes</a></button>
                <button className="text-black hover:bg-violet-100 p-2 rounded-md"><a href="#about-us">About us</a></button>
            </div>
            <div className="flex space-x-6 gap-12 text-xs justify-end mr-6 w-5/6 pr-10 pt-2">
                <div className='flex gap-10 pr-6'>
                    <input type="text" placeholder='...' className='text-black drop-shadow-lg inline-block text-center inputbox align-middle' />
                    <button><img src="src/assets/icons/search-svgrepo-com.svg" alt="Search" width="24px" height="24px" /></button>
                </div>
                <div className='pt-2'>
                    <img src="src/assets/icons/profile.svg" alt="Profile"width="24px" height="24px" />
                    <p>Profile</p>
                </div>
                <div className='pt-2'>
                    <img src="src/assets/icons/write.svg" alt="Write" width="24px" height="24px" className="ml-6" />
                    <p>Write a recipe</p>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar