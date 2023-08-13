import React from "react";
import Image from "next/image";

interface CardProps {
  eventName: string;
  eventImage: string;
  eventDescription: string;
  eventSchool: string;
  eventPrice: number;
}

const Card: React.FC<CardProps> = ({
  eventName,
  eventImage,
  eventDescription,
  eventSchool,
  eventPrice,
}) => {
  return (
    <>
      <div className="bg-white flex flex-row justify-center font-monty mr-3 my-3.5 rounded-xl ">
        <div className="">
          <Image
            width={420}
            height={350}
            src={eventImage}
            alt=""
            className="object-cover h-64 rounded-t-xl "
          />
          <div className="pl-7 pt-5  ">
            <div className="pl-3">
              <p className="text-5xl mt-5">{eventName}</p>
              <p className="text-xl my-5">
                {eventSchool} - {eventDescription} - <b>₹ {eventPrice}</b>
              </p>
              <div className="text-xs">
                <div className="flex felx-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mr-2"
                  >
                    <path
                      d="M1.66669 15.8332C1.66669 17.2498 2.75002 18.3332 4.16669 18.3332H15.8334C17.25 18.3332 18.3334 17.2498 18.3334 15.8332V9.1665H1.66669V15.8332ZM15.8334 3.33317H14.1667V2.49984C14.1667 1.99984 13.8334 1.6665 13.3334 1.6665C12.8334 1.6665 12.5 1.99984 12.5 2.49984V3.33317H7.50002V2.49984C7.50002 1.99984 7.16669 1.6665 6.66669 1.6665C6.16669 1.6665 5.83335 1.99984 5.83335 2.49984V3.33317H4.16669C2.75002 3.33317 1.66669 4.4165 1.66669 5.83317V7.49984H18.3334V5.83317C18.3334 4.4165 17.25 3.33317 15.8334 3.33317Z"
                      fill="black"
                    />
                  </svg>
                  <p className="">29<sup>th</sup> Feb 2023</p>
                </div>
                <div className="flex flex-row items-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15 "
                    height="15"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mr-2 mt-1"
                  >
                    <path
                      d="M10 1.6665C8.90567 1.6665 7.82204 1.88205 6.81099 2.30084C5.79994 2.71963 4.88129 3.33346 4.10746 4.10728C2.54466 5.67008 1.66669 7.7897 1.66669 9.99984C1.66669 12.21 2.54466 14.3296 4.10746 15.8924C4.88129 16.6662 5.79994 17.28 6.81099 17.6988C7.82204 18.1176 8.90567 18.3332 10 18.3332C12.2102 18.3332 14.3298 17.4552 15.8926 15.8924C17.4554 14.3296 18.3334 12.21 18.3334 9.99984C18.3334 8.90549 18.1178 7.82185 17.699 6.81081C17.2802 5.79976 16.6664 4.8811 15.8926 4.10728C15.1188 3.33346 14.2001 2.71963 13.189 2.30084C12.178 1.88205 11.0944 1.6665 10 1.6665ZM13.5 13.4998L9.16669 10.8332V5.83317H10.4167V10.1665L14.1667 12.4165L13.5 13.4998Z"
                      fill="black"
                    />
                  </svg>
                  <p className="mt-1.5">10 AM to 12 AM</p>
                </div>
                <div className="flex felx-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mt-1 mr-2"
                  >
                    <path
                      d="M13.2422 3.86703C13.2422 3.25765 13.0704 2.66061 12.7466 2.14438C12.4228 1.62815 11.96 1.21362 11.4114 0.948341C10.8628 0.683059 10.2505 0.577758 9.64483 0.644515C9.03911 0.711271 8.46447 0.947382 7.9868 1.32577C7.50913 1.70416 7.14777 2.20951 6.94415 2.78387C6.74054 3.35823 6.70292 3.97835 6.8356 4.57311C6.96828 5.16788 7.26589 5.71321 7.69431 6.14657C8.12273 6.57993 8.66461 6.88379 9.25781 7.02328V18.1248L10 19.3748L10.7422 18.1248V7.02328C11.4527 6.8542 12.0857 6.45093 12.5392 5.87841C12.9926 5.30588 13.2403 4.5974 13.2422 3.86703ZM10.9375 3.63266C10.7753 3.63266 10.6167 3.58455 10.4818 3.49441C10.3469 3.40427 10.2417 3.27616 10.1796 3.12627C10.1175 2.97637 10.1013 2.81144 10.1329 2.65231C10.1646 2.49319 10.2427 2.34702 10.3575 2.2323C10.4722 2.11758 10.6183 2.03945 10.7775 2.0078C10.9366 1.97614 11.1015 1.99239 11.2514 2.05448C11.4013 2.11656 11.5294 2.22171 11.6196 2.35661C11.7097 2.49151 11.7578 2.6501 11.7578 2.81235C11.7578 3.02991 11.6714 3.23856 11.5175 3.3924C11.3637 3.54623 11.1551 3.63266 10.9375 3.63266Z"
                      fill="black"
                    />
                  </svg>
                  <p className="mt-1.5">MG Auditorium</p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className=" border-black border-2 rounded-full py-3 pr-9  mt-2.5 mb-9 pl-9 "
            >
              <div className="flex flex-row ">
                Register Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 30 30"
                  fill="none"
                  className="ml-5"
                >
                  <path
                    d="M21.1743 22.8881L29.0625 14.9999L21.1743 7.11182L19.8485 8.43768L25.4734 14.0625L0.982265 14.0625V15.9375L25.4732 15.9375L19.8485 21.5622L21.1743 22.8881Z"
                    fill="black"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
