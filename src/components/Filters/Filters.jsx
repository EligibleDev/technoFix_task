import { Input } from "@material-tailwind/react";

const Filters = ({ handleSearch, handleSort }) => {
    return (
        <div className="flex justify-end gap-4">
            <span className="w-52">
                <Input className="" onChange={handleSearch} label="search..." />
            </span>

            <select
                onChange={(e) => handleSort(e)}
                className="h-full w-52 rounded-[7px] border border-gray-500 bg-transparent px-3 py-[11.5px] text-sm font-normal outline outline-0 transition-all focus:border-2 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            >
                <option value="">Default Sorting</option>
                <option value="name">Sort by Name</option>
                <option value="email">Sort by Email</option>
                <option value="company">Sort by Company</option>
            </select>
        </div>
    );
};

export default Filters;
