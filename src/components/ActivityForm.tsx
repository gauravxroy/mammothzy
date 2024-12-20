
import "@/app/globals.css";

import { HiCheck } from "react-icons/hi";
import formStore from "@/stores/formStore";

function Activity() {
    const categories = [
        "Adventure & Games",
        "Creative Expression",
        "Food & Drink",
        "Learning & Development",
        "Sports and Fitness",
        "Volunteering",
        "Other",
    ];

    const { formData, errors, updateFormData, validateForm, activeTab, setActiveTab } = formStore();


    const handleSaveAndContinue = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) return; // Prevent navigation if the form is invalid
        if (activeTab === 'ActivityTab') {
            setActiveTab('LocationTab'); // Change to the Location tab
        }
        console.log("Form data:", formData); // Proceed to the next step
    };

    return (
        <>
            <div className="mb-4">
                <div className="flex px-12 divide-x-2 divide-slate-100 border-b-2 border-gray-200">
                    {/* <div>
                        <h2 className="text-2xl text-gray-900 font-semibold mb-4">
                            Create New Activity
                        </h2>


                        <Link href="#tab1"
                            className={`flex justify-center items-center gap-1 px-4 py-2 
                            ${activeTab === 'ActivityTab' ? 'text-gray-800 ' : 'text-gray-400 hover:text-gray-800 '
                                }`}
                            onClick={handleSaveAndContinue}>
                            <TbFlag3 size={20} /> Activity Details
                        </Link>

                        <Link href="#tab2"
                            onClick={handleSaveAndContinue}
                            className={`flex justify-center items-center gap-1 px-4 py-2
                            ${activeTab === "LocationTab" ? 'text-gray-800 ' : 'text-gray-400  hover:text-gray-800'}`}

                        >
                            <MdOutlineLocationOn size={20} /> Location Details
                        </Link>
                    </div> */}

                    <div className="max-w-4xl ml-8 bg-white p-8">
                        <h2 className="text-xl font-semibold text-gray-700 mb-6">
                            Create New Activity
                        </h2>
                        <form onSubmit={handleSaveAndContinue}>

                            <div className="mb-6">
                                <label htmlFor="activityName" className="block text-sm font-medium text-gray-700">
                                    Activity Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="activityName"
                                    type="text"
                                    placeholder="e.g. Cooking class in Palo Alto"
                                    value={formData.activityName}
                                    onChange={(e) => updateFormData("activityName", e.target.value)}
                                    className="mt-2 w-full p-3 border rounded-full"
                                />
                                {errors.activityName && <span className="text-red-500">{errors.activityName}</span>}
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Select the best category to describe your activity{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                {categories.map((option) => (
                                    <div key={option} className="relative flex items-center mb-2">
                                        <input
                                            type="radio"
                                            id={option}
                                            name="category"
                                            value={option}
                                            checked={formData.category === option}
                                            onChange={(e) => updateFormData("category", e.target.value)}
                                            className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-gray-800 checked:border-gray-800 cursor-pointer"
                                        />
                                        <label htmlFor={option} className="ml-2 cursor-pointer">
                                            {option}
                                        </label>
                                        {formData.category === option && (
                                            <span className="absolute left-[0.02rem] text-white font-semibold pointer-events-none">
                                                <HiCheck size={18} />
                                            </span>
                                        )}

                                    </div>
                                ))}
                                {errors.category && <span className="text-red-500">{errors.category}</span>}
                            </div>


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
                                    value={formData.activityDescription}
                                    onChange={(e) => updateFormData("activityDescription", e.target.value)}
                                    className="mt-2 block w-full p-2 border rounded-lg"
                                    required
                                ></textarea>
                                {errors.activityDescription && <span className="text-red-500">{errors.activityDescription}</span>}
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Please select the activity type <span className="text-red-500">*</span>
                                </label>
                                {["Indoor", "Outdoor", "Virtual"].map((type) => (
                                    <div key={type} className="flex items-center mb-2 relative">
                                        <input
                                            type="radio"
                                            id={type}
                                            name="activityType"
                                            value={type}
                                            checked={formData.activityType === type}
                                            onChange={(e) => updateFormData("activityType", e.target.value)}
                                            className="appearance-none mr-2 w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-gray-800 checked:border-gray-800 cursor-pointer"

                                        />
                                        <label htmlFor={type}>{type}</label>
                                        {formData.activityType === type && (
                                            <span
                                                className="absolute left-[0.02rem]   text-white font-semibold  pointer-events-none"
                                            >
                                                <HiCheck size={18} />
                                            </span>
                                        )}
                                    </div>
                                ))}
                                {errors.activityType && <span className="text-red-500">{errors.activityType}</span>}
                            </div>


                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Please select the type of location <span className="text-red-500">*</span>
                                </label>
                                {["Provider Location", "User Location"].map((type) => (
                                    <div key={type} className=" relative flex items-center mb-2">
                                        <input
                                            type="radio"
                                            id={type}
                                            name="locationType"
                                            value={type}
                                            checked={formData.locationType === type}
                                            onChange={(e) => updateFormData("locationType", e.target.value)}
                                            className="appearance-none mr-2 w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-gray-800 checked:border-gray-800 cursor-pointer"

                                        />
                                        <label htmlFor={type}>{type}</label>
                                        {formData.locationType === type && (
                                            <span
                                                className="absolute left-[0.02rem]   text-white font-semibold  pointer-events-none"
                                            >
                                                <HiCheck size={18} />
                                            </span>
                                        )}
                                    </div>
                                ))}
                                {errors.locationType && <span className="text-red-500">{errors.locationType}</span>}
                            </div>


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
                                        value={formData.minMembers}
                                        onChange={(e) => updateFormData("minMembers", e.target.value)}
                                        className="mt-2 appearance-none block w-full p-2 border rounded"
                                    />
                                    {errors.minMembers && <span className="text-red-500">{errors.minMembers}</span>}
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

                                        value={formData.maxMembers}
                                        onChange={(e) => updateFormData("maxMembers", e.target.value)}
                                        className="mt-2 block  w-full p-2 border rounded"

                                    />
                                    {errors.maxMembers && <span className="text-red-500">{errors.maxMembers}</span>}
                                </div>
                            </div>



                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="bg-[#001D44] text-white font-semibold py-3 px-4 rounded-full hover:bg-[#001e44e7]"
                                >
                                    Save and Continue
                                </button>
                            </div>
                        </form>


                    </div>


                </div>
            </div>

        </>
    );
}

export default Activity;
