"use client";

const Filter = () => {
    return (
        <div className="mt-12 flex justify-between">
            <div className="flex gap-6 flex-wrap">
                <select
                    name="type"
                    id="type"
                    className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
                >
                    <option value="">Type</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>

                <input
                    type="text"
                    name="min"
                    placeholder="min price"
                    className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
                />
                <input
                    type="text"
                    name="max"
                    placeholder="max price"
                    className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
                />

                <select
                    name="cat"
                    id="category"
                    className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
                >
                    <option value="">Category</option>
                    <option value="new">New Arrival</option>
                    <option value="popular">Popular</option>
                </select>

                <select
                    name="filters"
                    id="filters"
                    className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
                >
                    <option value="">All Filters</option>
                </select>
            </div>

            <div>
                <select
                    name="sort"
                    id="sort"
                    className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
                >
                    <option value="">Sort By</option>
                    <option value="asc price">Price (low to high)</option>
                    <option value="desc price">Price (high to low)</option>
                    <option value="asc lastUpdated">Newest</option>
                    <option value="desc lastUpdated">Oldest</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
