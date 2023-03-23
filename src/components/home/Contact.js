import { useEffect, useState } from 'react';
import bicycle from '../../assets/images/bicycle.png';
import { CalendarIcon } from '../../icons';
import Calendar from './Calendar';
import useDate from '../../hooks/useDate';

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [showDate, setShowDate] = useState('');
  const date = useDate();

  useEffect(() => {
    if (date) {
      const formatDate = new Date(date);
      const newDate = new Intl.DateTimeFormat().format(formatDate);
      setShowDate(newDate);
    }
  }, [date]);

  return (
    <>
      <div className="h-[1003px] flex justify-center items-center gap-[141px] text-white">
        {/* Bicycle Image */}
        <div>
          <img
            className="w-[719px] h-[423px] mb-[60px]"
            src={bicycle}
            alt="bicycle"
          />
        </div>
        {/* Contact Us Form */}
        <div className="flex flex-col justify-between w-[519px] h-[588px] mr-[83px] mb-[13px]">
          <div>
            <h1 className="font-kanit font-semibold text-6xl leading-[73px]">
              ติดต่อเรา
            </h1>
          </div>
          <div className="flex flex-col gap-[34px]">
            <div className="flex flex-col gap-[37px]">
              <div className="flex flex-col gap-3">
                <p className="font-kanit text-[#EDEDEE] text-lg font-normal leading-[22px]">
                  ชื่อ - นามสกุล
                </p>
                <hr className="border border-solid border-[#F5F5F5]" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-kanit text-[#EDEDEE] text-lg font-normal leading-[22px]">
                  เบอร์ติดต่อ
                </p>
                <hr className="border border-solid border-[#F5F5F5]" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-kanit text-[#EDEDEE] text-lg font-normal leading-[22px]">
                  อีเมล
                </p>
                <hr className="border border-solid border-[#F5F5F5]" />
              </div>
              {/* Calendar */}
              <div className="flex flex-col gap-3 relative">
                <p className="font-kanit flex items-end justify-between text-[#EDEDEE] text-lg font-normal leading-[22px]">
                  วันที่
                  <span className="font-base mr-[201px]">{showDate}</span>
                  <button
                    onClick={() => setOpen(!open)}
                    className="mr-3 fill-white"
                  >
                    <CalendarIcon />
                  </button>
                </p>
                <hr className="border border-solid border-[#F5F5F5]" />
                {open ? <Calendar /> : null}
              </div>
            </div>
            <div className="mb-6">
              <p>Lorem Ipsum is simply dummy</p>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
          </div>
          {/* Submit Form Button */}
          <button className="flex justify-center items-center w-[290px] h-14 rounded-[50px] bg-gradient-to-b from-my-light-green to-my-dark-green shadow-[0_4px_10px_rgb(0,0,0,0.35)]">
            <span className="text-xl font-medium leading-[18px] tracking-[0.1px] text-black">
              LOREM
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
