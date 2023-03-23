export default function ProductCard({
  id,
  title,
  description,
  thumbnail,
  price,
  discount,
  rating,
  stock,
}) {
  const newPrice = Math.ceil(price * (1 - discount / 100));
  const showPrice = new Intl.NumberFormat('en-EN').format(newPrice);

  return (
    <div className="w-[416px] h-[443px] bg-white rounded shadow-[0_4px_25px_rgb(0,0,0,0.06)]">
      <div>
        <a href="/">
          <img
            className="w-[416px] h-[236px] rounded"
            src={thumbnail}
            alt="productImg"
          />
        </a>
      </div>
      <div className="flex flex-col items-center justify-between py-[33px] h-[207px]">
        <div className="w-[369px] h-fit">
          <p className="font-semibold text-[26px] leading-8 h-[45px]">
            {title}
          </p>
          <p className="font-normal text-lg leading-[23px] text-[#333]">
            {description}
          </p>
        </div>
        <div className="font-normal text-lg leading-[23px] flex justify-between w-[369px] text-[#333]">
          <span>Price: {showPrice}</span>
          <span>Rating: {rating}</span>
          <span>Stock: {stock}</span>
        </div>
      </div>
    </div>
  );
}
