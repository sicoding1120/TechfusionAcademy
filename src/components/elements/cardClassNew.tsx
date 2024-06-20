import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/router";

function CourseCardNew({ title, subtitle, price, key, image,kategori }: any) {
  const router = useRouter();

  return (
    <div
      className="w-full bg-white h-[550px] flex flex-col rounded-lg overflow-hidden md:m-4 border-2"
      key={key}
    >
      <Image
        className="w-full h-1/2"
        src={image}
        alt="Course Cover"
        width={200}
        height={200}
      />
      <div className="w-full py-4 h-1/2 flex justify-between flex-col">
        <div className="px-4 flex flex-col gap-1">
          <div className="flex gap-4">
            {kategori.map((items:any, index:any) => (
              <div className="border-2 rounded-md text-color-c2 border-color-c2 px-5 py-1 capitalize font-semibold flex justify-center" key={index}>
                {items}
              </div>
            ))}
          </div>
          <div className="font-bold text-4xl">{title}</div>
          <p className="text-gray-400 ">{subtitle} </p>
          <div className="w-full flex flex-col gap-2 mt-4">
            <div className="flex gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
            <p className="capitalize text-xl font-bold">
              {price === 0 ? "free" : `rp.${price}`}
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="w-full pt-4">
            <button
              className=" btn w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={
                price === 0
                  ? () => router.push(`Courses/class/${title}`)
                  : () =>
                    router.push(`Courses/class/${title}`)}
            >
              More Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCardNew;
