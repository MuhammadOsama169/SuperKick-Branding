import * as yup from "yup";

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    name: yup.string().min(3, "Username must be at least 3 characters long").required("Required"),
    business: yup.string().min(3, "Username must be at least 3 characters long"),
    phone: yup.number().min(3, "Please enter a valid phone number"),
    website: yup.string().min(3, "Username must be at least 3 characters long"),
    message: yup.string().min(3, "Message must be at least 3 words long"),
});