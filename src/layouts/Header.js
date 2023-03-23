import dino from '../assets/images/dino.png';
import { DownIcon } from '../icons';

export default function Header() {
  return (
    <>
      <header className="flex h-[150px] text-white font-normal">
        <a
          href="/"
          className="flex justify-center items-center gap-[9px] pl-[173px] pr-[107px]"
        >
          <div>
            <img src={dino} alt="dino-logo" />
          </div>
          <div>
            <span className="text-2xl font-bold italic leading-[29.26px]">
              LOREM <span className="text-my-green">IPSUM</span>
            </span>
          </div>
        </a>
        <div className="grow flex items-center">
          <ul className="flex gap-[30px] leading-[21.94px]">
            <li className="hover:text-my-green">
              <a href="/">LOREM</a>
            </li>
            <li className="hover:text-my-green hover:fill-my-green">
              <button className="flex items-center gap-[5px]">
                LOREM
                <div className="fill-white">
                  <DownIcon />
                </div>
              </button>
            </li>
            <li className="hover:text-my-green">
              <a href="/">LOREMIPSUM</a>
            </li>
            <li className="hover:text-my-green">
              <a href="/">LOREM & IPSUM</a>
            </li>
            <li className="hover:text-my-green">
              <a href="/">LOREM</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
