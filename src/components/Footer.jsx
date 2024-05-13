
function Footer() {
  return (
    <div className="bottom-0 inset-x-0">
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
  )
}

export default Footer