// Define types for form data
interface FormData {
  activityName: string;
  activityType: string;
  activityDescription: string;
  locationType: string;
  category: string;
  minMembers: number;
  maxMembers: number;
}


//tab activity

interface FormStore {
  formData: FormData;
  errors: Record<string, string>;
  updateFormData: (field: keyof FormData, value: string | number) => void;
  validateForm: () => boolean;
   activeTab: string;
    setActiveTab: (tab: string) => void;
}
// Zustand store
import { create } from 'zustand';

const formStore = create<FormStore>((set) => ({
  formData: {
    activityName: "",
    activityType: "",
    activityDescription: "",
    locationType: "",
    category: "",
    minMembers: 0,
    maxMembers: 0,

    // create formData varibles for location field
  },
 activeTab: "ActivityTab", // Default tab
  setActiveTab: (tab) => set({ activeTab: tab }),


  errors: {},
  updateFormData: (field, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [field]: value,
      },
    })),
  validateForm: () => {
    const errors: Record<string, string> = {};
    set((state) => {
      const { activityName, activityType, activityDescription, locationType, category, minMembers, maxMembers } = state.formData;

      if (!activityName) errors.activityName = "Activity Name is required.";
      if (!activityType) errors.activityType = "Activity Type is required.";
      if (!activityDescription) errors.activityDescription = "Activity Description is required.";
      if (!locationType) errors.locationType = "Location Type is required.";
      if (!category) errors.category = "Category is required.";
      if (minMembers <= 0) errors.minMembers = "Minimum Members must be greater than 0.";
      if (maxMembers <= 0 || maxMembers < minMembers) errors.maxMembers = "Maximum Members must be valid.";

      return { errors };
    });

    return Object.keys(errors).length === 0; // Return true if no errors
  },
}));


export default formStore;
