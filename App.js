
import './index.css';


function App() {
  return (
    <div className="App">
  

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative mx-4">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

<div>
<div class="flex flex-wrap">
<div class="flex justify-between">
<div class="drop-shadow-lg w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
    <a href="">
        <img class="p-8 m-2 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPapuIidrsRIpKnZZDNmt90NYakU6gIuHUiQ&usqp=CAU" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">3-BHK Apartments,Andheri West</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rent</a>
        </div>
    </div>
</div>
<div class="drop-shadow-lg w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
    <a href="#">
        <img class="p-8 m-2 rounded-t-lg" src="https://images.nobroker.in/images/8a9ffb838a9d0e44018a9dafc3ce0af9/8a9ffb838a9d0e44018a9dafc3ce0af9_291419_572974_medium.jpg" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">1-bhk Apartment, Mira Road </h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">Rs.15000 </span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rent</a>
        </div>
    </div>
</div>
<div class="drop-shadow-lg w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
    <a href="#">
        <img class="p-8 m-2 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product image" />
    </a>
    <div class="px-5 pb-5 pt-2">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Bunglow-10Bhk, Deluxe, Lokhandwala</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">Rs 1,00,000</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rent</a>
        </div>
    </div>
</div>
</div>
<div class="flex justify-between">
<div class="drop-shadow-lg w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
    <a href="">
        <img class="p-8 m-2 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPapuIidrsRIpKnZZDNmt90NYakU6gIuHUiQ&usqp=CAU" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">3-BHK Apartments,Andheri West</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rent</a>
        </div>
    </div>
</div>
<div class="drop-shadow-lg w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
    <a href="#">
        <img class="p-8 m-2 rounded-t-lg" src="https://images.nobroker.in/images/8a9ffb838a9d0e44018a9dafc3ce0af9/8a9ffb838a9d0e44018a9dafc3ce0af9_291419_572974_medium.jpg" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">1-bhk Apartment, Mira Road </h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">Rs.15000 </span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rent</a>
        </div>
    </div>
</div>
<div class="drop-shadow-lg w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
    <a href="#">
        <img class="p-8 m-2 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product image" />
    </a>
    <div class="px-5 pb-5 pt-2">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Bunglow-10Bhk, Deluxe, Lokhandwala</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">Rs 1,00,000</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rent</a>
        </div>
    </div>
</div>
</div>
</div>




</div>
    </div>
  );
}

export default App;
