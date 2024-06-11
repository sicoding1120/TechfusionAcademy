import { useRouter } from "next/router";
import { useRef } from "react";
import { IoIosSearch } from "react-icons/io";

const InputSearch = ({
  SearchHandle,
  placeholder,
}: {
  SearchHandle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleSearch = (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (
      (event as React.KeyboardEvent<HTMLInputElement>).key === "Enter" ||
      event.type === "click"
    ) {
      event.preventDefault();
      if (searchRef.current) {
        const keyword = searchRef.current.value;
        router.push(`/search/${keyword}`);
      }
    }
  };

  return (
    <div className="relative w-full h-full">
      <input
        placeholder={placeholder}
        className="p-2 rounded w-full outline-none border dark:bg-color-c7 dark:text-white border-gray-500"
        ref={searchRef}
        onKeyDown={handleSearch}
        onChange={SearchHandle}
      />
      <button
        className="absolute top-2 end-2"
        onClick={handleSearch}
        aria-label="Search"
      >
        <IoIosSearch size={24} />
      </button>
    </div>
  );
};
export default InputSearch;
