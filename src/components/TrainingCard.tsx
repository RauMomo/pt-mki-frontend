import cls from 'classnames';
import { apiConfig } from '../config/api';
import { formatPrice } from '../utils/formatPrice';
import Chip from './Chip';
import Divider from './Divider';

interface Props {
  title: string;
  body: string;
  category: string;
  href: string;
  bgColor: string;
  image: any;
  id: number;
  date_list: string[];
  onlinePrice: number;
  offlinePrice: number;
  isOnline: boolean;
  isHomePage?: boolean;
}

// const formattedStartDate = fromDate.toLocaleDateString('id-ID', {day: 'numeric', month: 'short'});
// const formattedEndDate = toDate.toLocaleDateString('id-ID', {day: 'numeric', month: 'short', year: 'numeric'});
// const timeDifference = getDaysDifference(Date.now())

  
export const TrainingCard : React.FC<Props>= ({
  href,
  title,
  body,
  bgColor,
  image,
  category,
  onlinePrice,
  offlinePrice,
  isOnline,
  id,
  date_list,
  isHomePage = false,
}) => {
  var sampleDate = date_list[0];
  var fromUntilDate = date_list[0].substring(0, sampleDate.indexOf(" "));

  const regex = /^(\d+)-(\d+)$/;

  // Execute the regex on the input string
  const match = fromUntilDate.match(regex);

  var timeDifference = 1;
  if (match) {
    const number1 = match[1]; // The first captured group (number1)
    const number2 = match[2];

    timeDifference = parseInt(number2) - parseInt(number1) + 1;
  }

  var urlImage = `${apiConfig.fileBaseUrl}${image}`;
  var extraCssCard = isHomePage ? "max-w-[350px]" : "max-w-[450px]";

  var bgCardCss = `flex flex-col relative gap-8 py-4 rounded-xl ${extraCssCard}`;

  return (
    <>
      <style>
        {`
          .link-card {
            @apply list-none flex bg-none rounded-lg shadow-inner transition duration-500 ease-out min-w-20 break-words flex-wrap whitespace-normal min-h-[60vh] sm:min-h-[80vh] m-0 bg-red-500;
            background-size: 120%;
            background-position: 100%;
            transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
          }
          .link-card > a {
            width: 150%;
            text-decoration: none !important;
            line-height: 1.4;
            padding: calc(1.5rem - 1px);
            border-radius: 8px;
            color: black;
            opacity: 0.8;
          }
        `}
      </style>
      <div className="link-card no-underline">
        <div
          className={cls(bgCardCss,'bg-bgCard' )}
        >
          <div className="h-48 rounded-xl">
            <img
              src={urlImage}
              alt="Training Description"
              className="object-cover bg-cover rounded-t-xl sm:h-40 md:h-[240px] h-[280px] object-top relative -translate-y-8 w-auto"
            />
            <div className="absolute -translate-y-28 md:-translate-y-24 left-0 z-10">
              <div className="flex flex-row gap-0">
                <a className="py-4 md:py-2 px-2 rounded-lg relative flex items-center gap-2">
                  <div className="bg-bgComplement rounded-xl text-complementary font-normal px-4 py-1 leading-2 flex items-center">
                    {isOnline ? (
                      <p className="mb-1 flex items-center text-sm">
                        <span className="px-2 py-[8px] rounded-full bg-complementary align-middle mr-1.5 whitespace-pre-wrap md:whitespace-nowrap"></span>
                        Online & Offline
                      </p>
                    ) : (
                      <p className="bg-bgSecondary text-secondary text-sm">
                        Offline
                      </p>
                    )}
                  </div>
                  <div className="bg-bgComplement rounded-xl text-complementary font-normal px-4 py-1 text-sm leading-2 flex items-center">
                    <p className="mb-1 text-sm">{timeDifference} Hari</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-4 justify-start items-start text-left">
            <div className="text-left mt-0 -translate-x-4">
              <Chip
                title={category}
                bgColor={"bg-bgLightSkyBlue"}
                textColor={"text-secondary"}
              />
            </div>
            <a href={`/training/${id}`}>
              <h4 className="no-underline font-normal mt-0 text-black text-left break-words max-w-[90%] h-auto min-h-16 sm:min-h-20 md:min-h-24 self-center overflow-hidden mr-8">
                {title}
              </h4>
            </a>
            <Divider />
            <div className="mb-4">
              <div className="text-dimGray text-base font-extralight opacity-70">
                Diselenggarakan pada:
              </div>
              {date_list.map((value: any, index: number) => {
                return (
                  <div className="flex flex-row">
                    <img
                      src={"../../icons/icon-date.svg"}
                      alt="Date Icon"
                      className="object-cover w-8 h-auto bg-cover rounded-md mr-3"
                    />
                    <p>{value}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <span className="text-primary text-[0.95rem] sm:text-[1.1rem] md:text-[1.25rem]">
                <span className="text-dimGray text-[0.8rem] sm:text-[1rem] md:text-[1.25rem]">
                  Offline:
                </span>{" "}
                {formatPrice(offlinePrice)},-
              </span>
              <span className="text-[0.95rem] sm:text-[1.1rem] md:text-[1.25rem] text-primary">
                <span className="text-dimGray text-[0.8rem] sm:text-[1rem] md:text-[1.25rem]">
                  Online:
                </span>{" "}
                {formatPrice(onlinePrice)},-
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// <li className=`link-card`>
//   <div className=`flex flex-col relative gap-8 ${bgColor} py-4 rounded-xl ${extraCssCard}`>
//     <div className="h-48 rounded-xl">
//       <img
//           src={urlImage}
//           alt="Training Description"
//           className="object-cover bg-cover rounded-t-xl sm:h-40 md:h-[240px] h-[280px] object-top relative -translate-y-8 w-auto"
//       />
//       <div className="absolute -translate-y-28 md:-translate-y-24 left-0 z-10">
//         <div className="flex flex-row gap-0">
//           <a className="py-4 md:py-2 px-2 rounded-lg relative flex items-center gap-2">
//             <div className="bg-bgComplement rounded-xl text-complementary font-normal px-4 py-1 leading-2 flex items-center">
//               {isOnline ? (
//                 <p className="mb-1 flex items-center text-sm">
//                   <span className="px-2 py-[8px] rounded-full bg-complementary align-middle mr-1.5 whitespace-pre-wrap md:whitespace-nowrap"></span>Online & Offline
//                 </p>
//               ) : (
//                 <p className="bg-bgSecondary text-secondary text-sm">Offline</p>
//               )}
//             </div>
//             <div className="bg-bgComplement rounded-xl text-complementary font-normal px-4 py-1 text-sm leading-2 flex items-center">
//               <p className="mb-1 text-sm">{timeDifference} Hari</p>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//     <div className="flex flex-col px-4 justify-start items-start text-left">
//       <div className="text-left mt-0 -translate-x-4">
//       <Chip title={category} bgColor={"bg-bgLightSkyBlue"} textColor={"text-secondary"}/>
//     </div>
//     <a href=`/training/${id}`>
//       <h4 className="font-normal mt-0 text-black text-left break-words max-w-[90%] h-auto min-h-16 sm:min-h-20 md:min-h-24 self-center overflow-hidden mr-8">
//         {title}
//       </h4>
//     </a>
//     <Divider />
//     <div className="mb-4">
//       <subtitle className="text-dimGray text-base font-extralight opacity-70">Diselenggarakan pada:</subtitle>
//       {date_list.map((value, index) => {
//       return (
//         <div className="flex flex-row">
//           <img
//             src={"../../icons/icon-date.svg"}
//             alt="Date Icon"
//             className="object-cover w-8 h-auto bg-cover rounded-md mr-3"
//           />
//           <p>
//             {value}
//           </p>
//         </div>
//       )
//     })}  
//     </div>
//     <div className="flex flex-col gap-2 mt-4">
//       <span className="text-primary text-[0.95rem] sm:text-[1.1rem] md:text-[1.25rem]"><span className="text-dimGray text-[0.8rem] sm:text-[1rem] md:text-[1.25rem]">Offline:</span> {formatPrice(offlinePrice)},-</span>
//       <span className="text-[0.95rem] sm:text-[1.1rem] md:text-[1.25rem] text-primary"><span className="text-dimGray text-[0.8rem] sm:text-[1rem] md:text-[1.25rem]">Online:</span> {formatPrice(onlinePrice)},-</span>
//     </div>
//     </div>
//   </a>
//    </div>
// </li>
// <style>
//   @tailwind base;
//   @tailwind components;
//   @tailwind utilities;
// </style>
