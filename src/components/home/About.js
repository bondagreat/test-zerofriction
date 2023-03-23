import bicycle from '../../assets/images/bicycle.png';

export default function About() {
  return (
    <>
      <div className="h-[868px] text-white flex justify-center items-center">
        <div className="space-y-[69px] ml-[67px] mb-[62px]">
          <div className="font-bold text-8xl">
            <p className="leading-[117px]">
              LOREM <br />
              <span className="text-my-green">IPSUM</span>
            </p>
          </div>
          <div className="w-[440px] space-y-[15px]">
            <p className="font-semibold text-xl leading-[24.38px]">
              Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply
            </p>
            <p className="font-normal text-lg leading-[27px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        <div className="mb-2">
          <img src={bicycle} alt="bicycle" />
        </div>
      </div>
    </>
  );
}
