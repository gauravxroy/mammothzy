import "@/app/globals.css";
import formStore from "@/stores/formStore";
import { useEffect, useState } from "react";
import Modal from "./SuccessModal";
import router from "next/router";

function LocationActivity() {
    interface CountryData {
        flag: string;
        iso2: string;
    }

    const { formData, errors, updateFormData, validateForm, setActiveTab } = formStore();
    const [data, setData] = useState<CountryData[]>([]);
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [showModal, setShowModal] = useState(false);

    // API call for JSON data to fetch country unicode flags
    useEffect(() => {
        async function apiCall() {
            try {
                const response = await fetch("/data/codes.json");
                const result = await response.json();
                console.log(result);
                setData(result.data);
            } catch (err) {
                console.log("Error: ", err);
            }
        }
        apiCall();
    }, []);

    // Dropdown handler
    const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    // Previous button handler
    const handlePreviousBtn = (tab: string) => {
        setActiveTab(tab);
    };

    // Submit handler
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) return; // Prevent navigation if the form is invalid

        if (isValid) {
            setShowModal(true);
            setTimeout(() => {
                router.push("/"); // Redirect to main page
            }, 8000);
        }
        console.log("Form Data: ", formData); // Console the data

        // Reset the values after submit
        updateFormData('activityName', '');
        updateFormData('activityType', '');
        updateFormData('activityDescription', '');
        updateFormData('locationType', '');
        updateFormData('category', '');
        updateFormData('minMembers', 0);
        updateFormData('maxMembers', 0);
        updateFormData('addressLine1', '');
        updateFormData('addressLine2', '');
        updateFormData('zipCode', 0);
        updateFormData('city', '');
        updateFormData('state', '');
        updateFormData('contactNumber', 0);
        updateFormData('contactName', '');
    };

    return (
        <>
            <div className="">
                <div className="flex flex-col md:flex-row md:pl-8 divide-x-2 divide-slate-100 border-gray-200">
                    <div className="max-w-4xl ml-4 bg-white p-8">
                        <h2 className="text-xl font-semibold text-gray-700 mb-6">Location Details</h2>

                        <form onSubmit={handleSubmit} className="max-w-lg p-4 space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium" htmlFor="addressLine1">
                                        Address Line 1 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="addressLine1"
                                        name="addressLine1"
                                        placeholder="House number and street name"
                                        value={formData.addressLine1}
                                        onChange={(e) => updateFormData("addressLine1", e.target.value)}
                                        className="w-full border px-3 py-2 mt-1 rounded-full"
                                        required
                                    />
                                    {errors.addressLine1 && <span className="text-red-500">{errors.addressLine1}</span>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium" htmlFor="addressLine2">
                                        Address Line 2
                                    </label>
                                    <input
                                        type="text"
                                        id="addressLine2"
                                        name="addressLine2"
                                        placeholder="Other information, e.g., building name, landmark, etc."
                                        value={formData.addressLine2}
                                        onChange={(e) => updateFormData("addressLine2", e.target.value)}
                                        className="w-full border rounded-full px-3 py-2 mt-1"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium" htmlFor="zipCode">
                                        ZIP Code <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="zipCode"
                                        name="zipCode"
                                        placeholder="e.g: 123 467"
                                        value={formData.zipCode}
                                        onChange={(e) => updateFormData("zipCode", e.target.value)}
                                        className="w-full border rounded-full px-3 py-2 mt-1"
                                        required
                                    />
                                    {errors.zipCode && <span className="text-red-500">{errors.zipCode}</span>}
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium" htmlFor="city">
                                            City <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="Your City"
                                            value={formData.city}
                                            onChange={(e) => updateFormData("city", e.target.value)}
                                            className="w-full border rounded-full px-3 py-2 mt-1"
                                            required
                                        />
                                        {errors.city && <span className="text-red-500">{errors.city}</span>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium" htmlFor="state">
                                            State <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="state"
                                            name="state"
                                            placeholder="Your State"
                                            value={formData.state}
                                            onChange={(e) => updateFormData("state", e.target.value)}
                                            className="w-full border rounded-full px-3 py-2 mt-1"
                                            required
                                        />
                                        {errors.state && <span className="text-red-500">{errors.state}</span>}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold">Contact Details</h2>
                                <p className="text-sm text-gray-500">
                                    Please provide contact information for this activity.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="w-full sm:w-1/2">
                                    <label className=" text-sm font-medium" htmlFor="contactNumber">
                                        Contact Number <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex w-full border rounded-full px-3 py-2 mt-1 justify-center items-center">
                                        <select value={selectedOption} onChange={handleDropdownChange} className="w-1/4">
                                            {data.map((item, index) => (
                                                <option key={index} value={item.iso2}>
                                                    {item.flag}
                                                </option>
                                            ))}
                                        </select>

                                        <input
                                            type="text"
                                            id="contactNumber"
                                            name="contactNumber"
                                            placeholder="Contact Number"
                                            onChange={(e) => updateFormData("contactNumber", e.target.value)}
                                            required
                                            className="w-3/4"
                                        />
                                    </div>
                                    {errors.contactNumber && <span className="text-red-500">{errors.contactNumber}</span>}
                                </div>

                                <div className="w-full sm:w-1/2">
                                    <label className="block text-sm font-medium" htmlFor="contactName">
                                        Contact Name
                                    </label>
                                    <input
                                        type="text"
                                        id="contactName"
                                        name="contactName"
                                        placeholder="Contact Name"
                                        value={formData.contactName}
                                        onChange={(e) => updateFormData("contactName", e.target.value)}
                                        className="mt-2 block w-full p-2 border rounded-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 items-center">
                                <button
                                    onClick={() => handlePreviousBtn("ActivityTab")}
                                    type="button"
                                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
                                >
                                    Previous
                                </button>

                                <button
                                    id="successButton"
                                    data-modal-target="successModal"
                                    data-modal-toggle="successModal"
                                    type="submit"
                                    className="px-4 py-2 bg-[#001D44] text-white rounded-full hover:bg-[#001e44e4]"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {showModal && <Modal />}
        </>
    );
}

export default LocationActivity;
