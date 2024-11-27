// import React from 'react';
// import { CircleHelp } from 'lucide-react';
// import Image from 'next/image';

// const Navbar = () => {
//   return (
//     <nav
//       className="w-full bg-gradient-to-br from-[#1e1e33]
//      to-[#030311] text-white py-8 lg:py-[4.5rem] px-2 lg:px-6 "
//     >
//       <div
//         className="bg-red-500 flex flex-col lg:flex-row
//           items-start justify-start px-5
//          lg:items-center lg:justify-center
//    "
//       >
//         {/* Logo section */}
//         <div
//           className="bg-teal-500 w-[5%] lg:w-full flex items-center justify-start
//          space-x-4  mb-4 lg:mb-0"
//         >
//           <div>
//             <Image
//               src="/images/athena-logo.svg"
//               alt="Athena"
//               className=""
//               width={280}
//               height={280}
//             />
//           </div>
//           <div className="flex items-center space-x-2">
//             <div className="w-[2px] h-16 mr-3 ml-1 bg-white"></div>
//             <div>
//               <h1 className="text-2xl">Playbook</h1>
//               <div className="flex items-center justify-center space-x-2">
//                 <h2>Library</h2>
//                 <span className="px-2 text-sm font-medium bg-[#9ED0CB] rounded-sm text-gray-700">
//                   Beta
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Search bar section */}
//         <div
//           className="relative mt-4 lg:mt-0 flex items-center
//            justify-center lg:ml-14  w-[95%]"
//         >
//           <input
//             type="text"
//             placeholder="Search playbooks..."
//             className="w-full mr-6 lg:ml-4  px-4 py-4 lg:py-7
//              bg-[#333343] rounded-sm outline-none"
//           />
//           <button className="absolute inset-y-0 right-14 px-4 bg-transparent text-gray-400 hover:text-white transition-colors duration-300">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//           <div className="flex items-center justify-center">
//             <button>
//               <CircleHelp />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { CircleHelp, Search } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav
      className="w-full bg-gradient-to-br from-[#1e1e33]
     to-[#030311] text-white py-8 lg:py-[4.5rem] px-8 lg:px-[64px]"
    >
      <div
        className="flex flex-col lg:flex-row items-start lg:items-center 
         lg:px-0 lg:justify-center"
      >
        {/* Logo section */}
        <div
          className="w-full lg:w-[30%] flex items-center 
          space-x-4 mb-4 lg:mb-0"
        >
          <div>
            <Image
              src="/images/athena-logo.svg"
              alt="Athena"
              width={140}
              height={140}
            />
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-[2px] h-16 mr-3 ml-1 bg-white"></div>
            <div>
              <h1 className="text-2xl">Playbook</h1>
              <div className="flex items-center space-x-2">
                <h2>Library</h2>
                <span className="px-2 text-sm font-medium bg-[#9ED0CB] rounded-sm text-gray-700">
                  Beta
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Search bar section */}
        <div
          className="w-full lg:w-[70%]  mt-4 lg:mt-0
         flex items-center justify-center"
        >
          <div className="relative w-[90%]">
            <input
              type="text"
              placeholder="Search playbooks..."
              className="w-full px-4 py-4 lg:py-[26px] bg-[#333343] 
            rounded-sm outline-none"
            />
            <button
              className="absolute inset-y-0 right-2 px-4 bg-transparent
           text-gray-400 hover:text-white transition-colors
            duration-300"
            >
              <Search />
            </button>
          </div>

          <div className="flex items-center justify-end w-[10%]">
            <button>
              <CircleHelp />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
