import '../App.css';
import pastaImage from '../assets/imgs/pasta.png';
import chickenImage from '../assets/imgs/chicken.png';
import broccoliImage from '../assets/imgs/broccoli.png';
import noodleImage from '../assets/imgs/noodle.png';
import cookingImage from '../assets/imgs/cooking.png';
import samosaImage from '../assets/imgs/samosa.png';
import mantiImage from '../assets/imgs/manti.png';
import NewsletterImage from '../assets/imgs/Newsletter.png';
import teamImage from '../assets/imgs/team.png';
import salmonImage from '../assets/imgs/salmon.png';
import masalaImage from '../assets/imgs/masala.png';
import stewImage from '../assets/imgs/stew.png';
import cakeImage from '../assets/imgs/cake.png';
import person1Image from '../assets/imgs/person1.png';
import person2Image from '../assets/imgs/person2.png';
import person3Image from '../assets/imgs/person3.png';
import person4Image from '../assets/imgs/person4.png';

function Main() {
  return (
    <main>
      <section className="mx-40" id="recipes">
        <div>
          <div>
            <h4 className="text-gray-700 text-4xl mt-20 font-serif">Recipes & Menus</h4>
            <hr className="border-orange-500 border-1 mt-2" />
          </div>
          <div className="mt-8 grid lg:grid-cols-4 gap-4">
            <div className="bg-white rounded overflow-hidden shadow-md relative">
              <div>
                <img src={pastaImage} alt="Pasta" className="w-full sm:h-64 cover" />
                <div className="my-4 px-2">
                  <a href="/"><span className="font-bold no-underline hover:underline font-serif">Pasta Salad</span><br /></a>
                  <span className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sint fugiat id, dolores similique laborum?</span><br />
                  <span className="fa fa-star checked mt-5"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded overflow-hidden shadow-md relative">
              <div>
              <img src={chickenImage} alt="Chicken" className="w-full sm:h-64 cover" />
                <div className="my-4 px-2">
                  <a href="/"><span className="font-bold no-underline hover:underline font-serif">Jalapeño Lime Chicken Soup</span><br /></a>
                  <span className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sint fugiat id, dolores similique laborum?</span><br />
                  <span className="fa fa-star checked mt-5"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded overflow-hidden shadow-md relative">
              <div>
                <img src={broccoliImage} alt="broccoli" className="w-full sm:h-64 cover" />
                <div className="my-4 px-2">
                  <a href="/"><span className="font-bold no-underline hover:underline font-serif">Easy Air Fryer Roasted Carrots And Broccoli</span><br /></a>
                  <span className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sint id, dolores similique.</span><br />
                  <span className="fa fa-star checked mt-5"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded overflow-hidden shadow-md relative">
              <div>
                <img src={noodleImage} alt="noodle" className="w-full sm:h-64 cover" />
                <div className="my-4 px-2">
                  <a href="/"><span className="font-bold no-underline hover:underline font-serif">Beef Sirloin Pasta Portobello</span><br /></a>
                  <span className="text-xs"> Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sint fugiat id, dolores similique laborum?</span><br />
                  <span className="fa fa-star checked mt-5"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-40">
        <div className="relative">
          <h4 className="text-gray-700 text-4xl mt-20 font-serif">We Love To Eat</h4>
          <hr className="border-orange-500 border-1 mb-6 mt-2" />
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <img src={cookingImage} alt="Cooking" className="w-full object-cover rounded overflow-hidden shadow-md" />
              <a href="/"><h1 className="sm:text-eft absolute top-1/2 mt-8 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-dark font-semibold font-serif">Quick & Easy Recipes</h1></a>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded overflow-hidden shadow-md relative">
                <a href="/"><img src={samosaImage} alt="samosa" className="w-full h-32 sm:h-72 object-cover mb-5" /></a>
                <a href="/"><span className="font-bold no-underline hover:underline font-serif px-2">Chili Samosa</span><br /></a>
              </div>
              <div className="bg-white rounded overflow-hidden shadow-md relative">
                <a href="/"><img src={mantiImage} alt="manti" className="w-full h-32 sm:h-72 object-cover" /></a>
                <a href="/"><span className="font-bold no-underline hover:underline font-serif px-2">Mantu</span><br /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section className="mx-40 my-20">
      <h2 className="text-gray-700 text-4xl mt-10 font-serif">Our Newest Recipes</h2>
      <hr className="border-orange-500 border-1 mt-2" />
      <div className="grid lg:grid-cols-4 gap-4">
        <div className="my-10 shadow-md rounded overflow-hidden">
          <a href="./Recipe2.html">
            <img className="w-full h-32 sm:h-64 object-cover" src={salmonImage} alt="Lachs" />
          </a>
          <h3 className="my-5 pl-3 text-md font-bold">Steamed Salmon</h3>
          <div className="pl-40 flex">
            <img className="rounded-full size-12" src={person1Image} alt="denis" />
            <h3 className="my-5 pl-3 text-md font-bold">Denis</h3>
          </div>
        </div>
        <div className="my-10 shadow-md rounded overflow-hidden">
          <a href="./Recipe3.html">
            <img className="w-full h-32 sm:h-64 object-cover" src={masalaImage} alt="masala" />
          </a>
          <h3 className="my-5 pl-3 text-md font-bold">Chicken Masala</h3>
          <div className="pl-40 flex">
            <img className="rounded-full size-12" src={person2Image} alt="anitha" />
            <h3 className="my-5 pl-3 text-md font-bold">Anitha</h3>
          </div>
        </div>
        <div className="my-10 shadow-md rounded overflow-hidden">
          <a href="./Recipe4.html">
            <img className="w-full h-32 sm:h-64 object-cover" src={stewImage} alt="rabbit" />
          </a>
          <h3 className="my-5 pl-3 text-md font-bold">Rabbit Stew</h3>
          <div className="pl-40 flex">
            <img className="rounded-full size-12" src={person3Image} alt="yago" />
            <h3 className="my-5 pl-3 text-md font-bold">Yago</h3>
          </div>
        </div>
        <div className="my-10 shadow-md rounded overflow-hidden">
          <a href="./Recipe1.html">
            <img className="w-full h-32 sm:h-64 object-cover" src={cakeImage} alt="vanilla" />
          </a>
          <h3 className="my-5 pl-3 text-md font-bold">Vanilla Cake</h3>
          <div className="pl-40 flex">
            <img className="rounded-full size-12" src={person4Image} alt="rabia" />
            <h3 className="my-3 pl-3 text-md font-bold">Rabia</h3>
          </div>
        </div>
      </div>
    </section>

      <div className="relative mt-4 bg-white rounded overflow-hidden shadow-md">
        <img src={teamImage} alt="About Us" className="w-full"  />
        <div className="flex flex-col justify-center items-start absolute top-1/4 left-1/5 transform -translate-y-1/2 mr-40 ml-40">
          <h1 className="text-4xl text-black px-4 py-2 font-serif mt-40">ABOUT US</h1>
          <p className="text-m text-gray-700 px-4 py-2 font-serif mt-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores perspiciatis aperiam, aliquam quas laboriosam nulla sapiente. Assumenda quos quasi voluptate reprehenderit. </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md mt-10 hover:bg-green-300">
            Our Story
          </button>
        </div>
      </div>

      <div className="relative mb-4 bg-white rounded overflow-hidden shadow-md h-100">
        <img src={NewsletterImage} alt="Newsletter" className="w-full" />
        <div className="flex flex-col justify-center items-start absolute top-1/4 left-1/5 transform -translate-y-1/2 mr-40 ml-40">
          <h1 className="text-4xl text-black px-4 py-2 font-serif mt-40">BE THE FIRST ONE TO TASTE OUR RECIPES!</h1>
          <p className="text-m text-gray-700 px-4 py-2 font-serif mt-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores perspiciatis aperiam, aliquam quas laboriosam nulla sapiente. Assumenda quos quasi voluptate reprehenderit, asperiores consequuntur mollitia perferendis ipsum molestias blanditiis porro nesciunt pariatur deleniti culpa sed excepturi esse accusantium nulla. Facilis temporibus molestiae ab, itaque et impedit porro at excepturi quae aliquam!</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md mt-10 hover:bg-green-300">
            Subscribe
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
