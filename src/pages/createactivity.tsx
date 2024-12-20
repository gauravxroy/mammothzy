import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import "@/app/globals.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbFlag3 } from "react-icons/tb";
import ActivityForm from "@/components/ActivityForm";

import formStore from "@/stores/formStore";

function Activity() {

    const { activeTab, setActiveTab, validateForm } = formStore();
    const handleTabClick = (tab: string) => {
        const isValid = validateForm();
        if (!isValid) return; //if isvalid=false(make true) return next line not executed
        setActiveTab(tab); // Update the active tab in Zustand
    };
    return (

        <div className="mb-4">
            <Navbar />
            <div className="flex px-12 divide-x-2 divide-slate-100 border-b-2 border-gray-200">
                <div>
                    <h2 className="text-2xl text-gray-900 font-semibold mb-4">
                        Create New Activity
                    </h2>


                    <Link
                        href="#tab1"
                        className={`flex justify-center items-center gap-1 px-4 py-2 
                    ${activeTab === "ActivityTab" ? "text-gray-800" : "text-gray-400 hover:text-gray-800"}`}
                        onClick={() => handleTabClick("ActivityTab")}
                    >
                        <TbFlag3 size={20} /> Activity Details
                    </Link>

                    <Link
                        href="#tab2"
                        className={`flex justify-center items-center gap-1 px-4 py-2 
                    ${activeTab === "LocationTab" ? "text-gray-800" : "text-gray-400 hover:text-gray-800"}`}
                        onClick={() => handleTabClick("LocationTab")}
                    >
                        <MdOutlineLocationOn size={20} /> Location Details
                    </Link>
                </div>

                {activeTab === "ActivityTab" && <div><ActivityForm /></div>}
                {activeTab === "LocationTab" && <div>Location tab</div>}

            </div>
            <Footer />
        </div>

    );
}

export default Activity;
