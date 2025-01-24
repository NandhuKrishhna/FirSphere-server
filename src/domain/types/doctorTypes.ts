import mongoose from "mongoose";

export type RegisterDoctorParams = {
    name: string;
    email: string;
    password: string;
    userAgent?: string;
  };


  export type DoctorDetailsParams = {
    bio?: string;
    experience: number;
    consultationFees: number;
    contactPhoneNumber: string;
    professionalEmail: string;
    officeAddress: string;
    clinicLocations: string[]; 
    consultationLanguages: string[];
    primarySpecialty: string; 
    secondarySpecialties: string[]; 
    areasOfExpertise: string[];
    specificTreatmentFocuses: string[];
    medicalLicenseNumber: string;
    profilePicture?: string; 
    gender: "Male" | "Female";
    professionalTitle: string;
  };
  
  
  