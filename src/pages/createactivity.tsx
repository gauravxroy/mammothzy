import { useState } from "react";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import "@/app/globals.css"
import { MdOutlineLocationOn } from "react-icons/md";
import { TbFlag3 } from "react-icons/tb";
import Footer from "@/components/Footer";

function Activity() {
    const [activityName, setActivityName] = useState("");
    const [activityType, setActivityType] = useState("");

    const [error, setError] = useState("");
    const [locationType, setLocationType] = useState<string>("");
    const [category, setCategory] = useState<string>("");

    const [activityDescription, setActivityDescription] = useState<string>("");
    const [minMembers, setMinMembers] = useState<number>(0);
    const [maxMembers, setMaxMembers] = useState<number>(0);
    const categories = [
        "Adventure & Games",
        "Creative Expression",
        "Food & Drink",
        "Learning & Development",
        "Sports and Fitness",
        "Volunteering",
        "Other",
    ]
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!activityName || !minMembers || !maxMembers || !category || !activityType || !activityDescription || !locationType) {
            setError("All fields are required!");
            return;
        }


        //storing input data into object
        const activityData = {
            activityName,
            activityType,
            category,
            activityDescription,
            locationType,
            minMembers,
            maxMembers
        };


        //printing the value in console
        console.log("Data:", activityData);
        //reset or clearing the value after submit
        setError("");
        setActivityName("");
        setActivityType("");


    };

    const [activeTab, setActiveTab] = useState<string>('ActivityTab');
    const handleTabChange = (tab: string): void => {
        setActiveTab(tab);
    }
    return (
        <>
            <div className="mb-4">
                <Navbar />
                <div className="flex px-12 divide-x-2 divide-slate-100 border-b-2 border-gray-200">

                    <div className="      ">
                        <h2 className="text-2xl  text-gray-900 font-semibold mb-4">Create New Activity</h2>


                        <Link href="#tab1"
                            className={`flex justify-center items-center gap-1 px-4 py-2 
                            ${activeTab === 'ActivityTab' ? 'text-gray-800 ' : 'text-gray-400 hover:text-gray-800 transition ease-out'
                                }`}
                            onClick={() => handleTabChange("ActivityTab")}>
                            <TbFlag3 size={20} /> Activity Details
                        </Link>

                        <Link href="#tab2"
                            onClick={() => handleTabChange("LoactionTab")}
                            className={`flex justify-center items-center gap-1 px-4 py-2
                            ${activeTab === "LocationTab" ? 'text-gray-800 font-bold' : 'text-gray-400 transition ease-in-out hover:text-gray-800'}`}

                        >
                            <MdOutlineLocationOn size={20} /> Location Details
                        </Link>


                    </div>

                    <div className="max-w-4xl ml-8 bg-white p-8 ]
">
                        <h2 className="text-xl font-semibold text-gray-700 mb-6">
                            Create New Activity
                        </h2>
                        {error && <span className="text-red-500">{error}</span>}
                        <form onSubmit={handleSubmit}>
                            {/* Activity Name */}
                            <div className="mb-6">
                                <label
                                    htmlFor="activityName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Activity Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="activityName"
                                    type="text"
                                    placeholder="e.g. Cooking class in Palo Alto"
                                    value={activityName}
                                    onChange={(e) => setActivityName(e.target.value)}
                                    className="mt-2  w-full p-3  border rounded-full"
                                    required
                                />
                            </div>

                            {/* Category */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Select the best category to describe your activity <span className="text-red-500">*</span>
                                </label>
                                {categories.map((option) => (
                                    <div key={option} className="flex items-center mb-2">
                                        <input
                                            type="radio"
                                            id={option}
                                            name="category"
                                            value={option}
                                            checked={category === option}
                                            onChange={(e) => setCategory(e.target.value)}
                                            className="appearance-none mr-2 w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-gray-800 checked:border-gray-800 cursor-pointer"
                                        />
                                        <label htmlFor={option}>{option}</label>
                                        {/* <span className="absolute inset-0 z-10 flex items-center justify-center text-red-400
                                         text-sm pointer-events-none opacity-0 checked:opacity-100">
                                            ✓
                                        </span> */}
                                    </div>
                                ))}

                                {category === "Other" && (
                                    <input
                                        type="text"
                                        placeholder="Specify the category"
                                        className="mt-2  w-full  p-2 border rounded-full"
                                    />
                                )}
                            </div>

                            {/* Activity Description */}
                            <div className="mb-6">
                                <label
                                    htmlFor="activityDescription"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    About the Activity <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="activityDescription"
                                    placeholder="Activity Description"
                                    value={activityDescription}
                                    onChange={(e) => setActivityDescription(e.target.value)}
                                    className="mt-2 block w-full p-2 border rounded-lg"
                                    required
                                ></textarea>
                            </div>

                            {/* Activity Type */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Please select the activity type <span className="text-red-500">*</span>
                                </label>
                                {["Indoor", "Outdoor", "Virtual"].map((type) => (
                                    <div key={type} className="flex items-center mb-2">
                                        <input
                                            type="radio"
                                            id={type}
                                            name="activityType"
                                            value={type}
                                            checked={activityType === type}
                                            onChange={(e) => setActivityType(e.target.value)}
                                            className="appearance-none mr-2 w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-gray-800 checked:border-gray-800 cursor-pointer"

                                        />
                                        <label htmlFor={type}>{type}</label>
                                    </div>
                                ))}
                            </div>

                            {/* Location Type */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Please select the type of location <span className="text-red-500">*</span>
                                </label>
                                {["Provider Location", "User Location"].map((type) => (
                                    <div key={type} className="flex items-center mb-2">
                                        <input
                                            type="radio"
                                            id={type}
                                            name="locationType"
                                            value={type}
                                            checked={locationType === type}
                                            onChange={(e) => setLocationType(e.target.value)}
                                            className="appearance-none mr-2 w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-gray-800 checked:border-gray-800 cursor-pointer"

                                        />
                                        <label htmlFor={type}>{type}</label>
                                    </div>
                                ))}
                            </div>

                            {/* Member Count */}
                            <div className="mb-6 flex gap-4">
                                <div>
                                    <label
                                        htmlFor="minMembers"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Minimum Members <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        placeholder="Minimum Members"
                                        id="minMembers"
                                        type="number"
                                        min={0}
                                        step="null"
                                        value={minMembers || ''}
                                        onChange={(e) => setMinMembers(Number(e.target.value))}
                                        className="mt-2 appearance-none block w-full p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="maxMembers"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Maximum Members <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        placeholder="Maximum Members"
                                        id="maxMembers"
                                        type="number"

                                        value={maxMembers || ''}
                                        onChange={(e) => setMaxMembers(Number(e.target.value))}
                                        className="mt-2 block  w-full p-2 border rounded"

                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className=" bg-[#001D44] text-white font-semibold py-3  px-4 rounded-full hover:bg-[#001e44e7] hover:text-white"
                                >
                                    Save and Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Activity