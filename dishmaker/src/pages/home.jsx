import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Typography } from "@material-tailwind/react";
import logo from '../images/logo.svg';
import square1 from '../images/square-1.svg';
import square2 from '../images/square-2.svg';
import square3 from '../images/square-3.svg';
import square4 from '../images/square-4.svg';
import square5 from '../images/square-5.svg';
import couscous from '../images/couscous.jpg';
import tajine from '../images/Tajine.jpg';
import pastilla from '../images/Pastilla.jpg';
import triangle from '../images/triangle.svg';
import {AiFillStar, AiOutlineHeart} from 'react-icons/ai';
import {ImUsers} from 'react-icons/im';
import {PiShoppingCart} from 'react-icons/pi';
import {IoMdQuote} from 'react-icons/io';

const Home = () => {
  return (
    
    <div class="mx-24">
    <div class="flex flex-wrap m-4 mt-8 items-center mx-auto">
      <div class="order-1 lg:order-1">
      <img src={logo}></img>
      </div>

    <div class="order-3 lg:order-2">
      <form class="">
        <div class="relative flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-3 absolute text-gray-400 focus-within:text-gray-500 w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
        <input type='text' name='search' placeholder='Cherchez un plat, ...' class="pr-3 pl-10 py-2 placeholder-gray-400 text-black rounded-lg ring-1 ring-gray-300 focus:ring-2 focus:ring-gray-400 " />
        {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-[965px] absolute text-gray-400 focus-within:text-gray-500 w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>*/}
     </div></form>
    </div>
    
      <div class="order-2 lg:order-3"><button type="button" class="text-white text-base bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-orange-400 dark:hover:bg-orange-500 focus:outline-none dark:focus:ring-orange-600">Devenir Dish Maker</button></div>
    </div>
    <div className="relative isolate mt-[-100px] px-6 lg:px-8">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-200 to-orange-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Découvrez les dernières créations de nos chefs. <a href="#" className="font-semibold text-orange-600"><span className="absolute inset-0" aria-hidden="true"></span>En savoir plus <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div className="text-center">
          <div className=''><h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">Bienvenue dans <p>l'univers de <span className='text-orange-500'>DishMaker</span></p></h1>
          </div><p className="mt-6 text-lg leading-8 text-gray-600">C'est une expérience, une passion, une culture, et surtout, c'est un moyen de relier les gens à travers le monde.</p>
          <div className="mt-10 flex items-center justify-center">
            <a href="#" className="rounded-md bg-orange-600 px-3.5 py-2.5 mr-14 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Découvrir</a>
            <a href="#" className="text-sm font-semibold leading-6 ml-14 text-gray-900">Voir plus <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-orange-200 to-orange-300 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
    </div>
    <div class="flex my-10 mt-[-50px]">
      <div class="ml-24">
      <p class="text-2xl text-stone-700">Catégorie de plat</p></div>
      <button>
      <div class="flex items-center mr-24 space-x-1">
        <Link class="text-orange-500" to="/products">voir plus</Link>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-orange-500 w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
      </div></button>
      
    </div>
    <div class="grid md:grid-cols-5 grid-cols-3 mb-24">
      <div class="grid-rows-2">
    <img src={square1} class="w-32"></img>
    <p class="font-light text-center mt-2">Tajine</p></div>
    <div class="grid-rows-2">
    <img src={square2} class="w-32"></img>
    <p class="font-light text-center mt-2">Soupe</p></div>
    <div class="grid-rows-2">
    <img src={square3} class="w-32"></img>
    <p class="font-light text-center mt-2">Thé</p></div>
    <div class="grid-rows-2">
    <img src={square4} class="w-32"></img>
    <p class="font-light text-center mt-2">Goûté</p></div>
    <div class="grid-rows-2">
    <img src={square5} class="w-32"></img>
    <p class="font-light text-center mt-2">Salade</p></div>
    </div>
    <div class="ml-24 mb-[-100px]">
      <p class="text-2xl text-stone-700">Meilleurs plats</p></div>
      <div
    className='w-full min-h-screen flex flex-col justify-center items-center'
    >
      <div className="grid sm:px-10 w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 w-full overflow-hidden  flex flex-col  justify-center items-center shadow-gray-200 shadow-md  ">
          <img
          className='w-full h-60 object-cover'
          src={couscous} alt=""  />
          <div className="card-desc p-2 bg-white w-full flex flex-col gap-2 justify-start items-start">
            <div className="w-full px-3 flex items-center justify-between">
            <h1 className='text-3xl font-medium text-slate-900'>
              Couscous
            </h1>
            <div className="flex  items-center justify-start gap-1 mr-1">
              <p
              className='text-slate-400 text-xs '
              >
                40 min -
              </p>
              <div className="flex items-center justify-start gap-1">
                <AiFillStar className='text-yellow-500 text-xs' />
                <p
                className='text-slate-400 text-sm'
                >
                <span
                className=' text-slate-700'
                >5.0</span> (1.5k avis)
                </p>
                
              </div>
            </div>
            </div>
            <div className="flex px-4 w-full justify-between items-center">
              <p
              className='flex items-center mb-8 justify-start gap-1 text-slate-400 text-sm'
              >
                4 
                <ImUsers className='text-slate-400' />
              </p>
              <p
              className='text-slate-800 mt-2 font-medium text-4xl'
              >
                100 DH
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="flex  relative justify-start items-start mr-[250px]">
              <img src={triangle} alt=""
              className='  w-20'
              />
              <AiOutlineHeart
              
              className=' absolute text-slate-50 text-xl  left-4 top-1/2' />
              </div>
              <PiShoppingCart className=' text-4xl mt-6  mr-1 text-orange-500' />
            </div>
          </div>
        </div>
        <div className="col-span-1 w-full overflow-hidden  flex flex-col  justify-center items-center shadow-gray-200 shadow-md  ">
          <img
          className='w-full h-60 object-cover'
          src={pastilla} alt=""  />
          <div className="card-desc p-2 bg-white w-full flex flex-col gap-2 justify-start items-start">
            <div className="w-full px-3 flex items-center justify-between">
            <h1 className='text-3xl font-medium text-slate-900'>
              Pastilla
            </h1>
            <div className="flex  items-center justify-start gap-1 mr-1">
              <p
              className='text-slate-400 text-xs '
              >
                90 min -
              </p>
              <div className="flex items-center justify-start gap-1">
                <AiFillStar className='text-yellow-500 text-xs' />
                <p
                className='text-slate-400 text-sm'
                >
                <span
                className=' text-slate-700'
                >5.0</span> (2.5k avis)
                </p>
                
              </div>
            </div>
            </div>
            <div className="flex px-4 w-full justify-between items-center">
              <p
              className='flex items-center mb-8 justify-start gap-1 text-slate-400 text-sm'
              >
                4 
                <ImUsers className='text-slate-400' />
              </p>
              <p
              className='text-slate-800 mt-2 font-medium text-4xl'
              >
                100 DH
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="flex  relative justify-start items-start mr-[250px]">
              <img src={triangle} alt=""
              className='  w-20'
              />
              <AiOutlineHeart
              
              className=' absolute text-slate-50 text-xl  left-4 top-1/2' />
              </div>
              <PiShoppingCart className=' text-4xl mt-6  mr-1 text-orange-500' />
            </div>
          </div>
        </div>
        <div className="col-span-1 w-full overflow-hidden  flex flex-col  justify-center items-center shadow-gray-200 shadow-md  ">
          <img
          className='w-full h-60 object-cover'
          src={tajine} alt=""  />
          <div className="card-desc p-2 bg-white w-full flex flex-col gap-2 justify-start items-start">
            <div className="w-full px-3 flex items-center justify-between">
            <h1 className='text-3xl font-medium text-slate-900'>
              Tajine
            </h1>
            <div className="flex  items-center justify-start gap-1 mr-1">
              <p
              className='text-slate-400 text-xs '
              >
                60 min -
              </p>
              <div className="flex items-center justify-start gap-1">
                <AiFillStar className='text-yellow-500 text-xs' />
                <p
                className='text-slate-400 text-sm'
                >
                <span
                className=' text-slate-700'
                >5.0</span> (1.5k avis)
                </p>
                
              </div>
            </div>
            </div>
            <div className="flex px-4 w-full justify-between items-center">
              <p
              className='flex items-center mb-8 justify-start gap-1 text-slate-400 text-sm'
              >
                4 
                <ImUsers className='text-slate-400' />
              </p>
              <p
              className='text-slate-800 mt-2 font-medium text-4xl'
              >
                150 DH
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="flex  relative justify-start items-start mr-[250px]">
              <img src={triangle} alt=""
              className='  w-20'
              />
              <AiOutlineHeart
              
              className=' absolute text-slate-50 text-xl  left-4 top-1/2' />
              </div>
              <PiShoppingCart className=' text-4xl mt-6  mr-1 text-orange-500' />
            </div>
          </div>
        </div>
        
    </div></div>

    <section className="relative isolate overflow-hidden bg-white px-6 py-[-80px] sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl mb-[100px]">
      <IoMdQuote className='text-4xl text-orange-500' />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “En tant que cuisinier passionné de cuisine méditerranéenne, j'ai toujours rêvé de partager les saveurs authentiques de ma région natale avec un public plus large. C'est là qu'intervient Dish Maker. Cette plateforme m'a offert une opportunité incroyable de faire exactement cela.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 text-base">
              <div className="font-semibold text-gray-900 text-center">Judith</div>
              <div className="text-gray-600 text-center mt-2">Cuisinière passionnée et utilisateur de Dish Maker</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-10 bg-white text-center md:justify-between">
        <img src={logo} className='ml-[100px]'></img>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 A&A
      </Typography>
    </footer>
</div>
  )
}
export default Home